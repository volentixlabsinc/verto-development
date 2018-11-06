<template>
  <section class="hero is-fullheight is-light is-bold" >
    <div class="hero-head top-bg">
      <div class="container dark-blue-gradient">
        <div class="container p-l-lg p-r-lg p-b-md">
          <div class="p-t-lg p-b-lg has-text-centered">
            <!-- <div class="is-pulled-left is-vcentered is-flex m-t-md">
              <router-link to="/welcome">
                <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
              </router-link>
            </div> -->
            <img src="~@/assets/img/wallet-logo.png" class="logo">
            <div class="is-pulled-right is-vcentered is-flex m-t-md">
              <router-link to="/settings">
                <font-awesome-icon icon="sliders-h" class="is-size-5 has-text-white" flip="horizontal"/>
              </router-link>
            </div>
          </div>
          <div class="p-b-md level is-mobile">
            <div class="level-left has-text-centered">
              <div>
                <p class="is-marginless is-size-3 has-text-white font-gibson"> {{ balance }} VTX </p>
                <div class="level is-mobile is-size-5 font-gibson">
                  <p class="level-left has-text-primary" >{{ currentBtcValue.toFixed(4) }} BTC</p>
                  <div class="level-right is-size-5 has-text-white m-l-md">
                    <font-awesome-icon icon="sync-alt" style="cursor:pointer" @click="refreshContent"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-right has-text-centered">
              <a @click="isCardModalActive = true">
                <qrcode :value="wallet" :options="{ size: 80 }" class="has-text-centered"></qrcode>
              </a>
            </div>
          </div>
        </div>
        <div class="has-text-white container p-b-md" >
          <div class="columns is-marginless is-mobile has-background-darkgreen p-l-lg p-r-lg p-t-sm p-b-sm has-text-centered">
            <b-tooltip :label="wallet" position="is-bottom" class="m-l-lg" type="is-white" style="width:80%">
              <div class="column is-11 is-paddingless wallet-address is-size-7 font-calibri">
                Wallet address:
                <span id="wallet-address">{{ wallet }}</span>
              </div>
            </b-tooltip>
            <div class="column is-1 is-paddingless has-text-right line-height-md">
              <a v-clipboard:copy="wallet" id="button-copy-wallet-address" @click="toast">
                <font-awesome-icon icon="copy" class="is-size-7 has-text-white"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body is-paddingless has-background-darkgreen">
      <div class="container w-main-b-graident">
        <div class="columns is-marginless p-b-md">
          <div v-if="loadingData" class="p-l-lg p-r-md m-t-md is-size-4 has-text-grey-light">
            <p>
              Loading data...
            </p>
          </div>
          <div v-if="hasTransactions">
            <div class="p-l-md p-r-md m-t-md p-b-none is-size-4 has-text-grey-light">
              Transaction History
            </div>
            <div v-for="transaction in transactions" :key="transaction.id" class="transaction_list column is-paddingless list-item">
              <router-link :to="{ name: 'TransactionDetails', params: { transaction, wallet } }">
                <div class="columns is-marginless is-mobile p-t-md p-b-md p-r-md p-l-md">
                  <div class="column is-6 is-paddingless is-size-7 font-calibri">
                    <div class="columns is-marginless">
                      <div class="column is-paddingless">
                        <div class="level is-mobile has-text-white">
                          <div class="level-left">
                            {{ transaction.timestamp | formatDate }}
                          </div>
                          <div class="level-right">
                            {{ transaction.timestamp | formatTime }}
                          </div>
                        </div>
                      </div>
                      <div class="column is-paddingless">
                        <div class="wallet-address has-text-grey-light" >
                          NO: {{ transaction.sToKey }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-5 is-paddingless is-flex level level-right has-text-primary is-size-5 m-l-md">
                    {{ transaction.amount >= 0 ? '+' : '' }}{{ transaction.iVal }}.{{ transaction.fVal }} VTX
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div v-if="noTransactions">
            <p class="has-text-grey is-size-5 m-l-lg has-text-weight-bold">
              You have no transactions
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="button is-fullwidth is-size-5 is-primary" @click="openZixipay"> -->
    <div class="has-background-darkgreen">
      <router-link to="/getvtx">
        <a class="button is-fullwidth is-size-5 is-primary" href="https://zixipay.com">
          <p class="p-l-md p-r-md has-text-weight-bold is-size-6">Get VTX</p>
        </a>
      </router-link>
    </div>
    <div class="hero-foot">
      <div class="container has-background-darklightgreen p-md">
        {{ appName }}: {{ appVersion }}
      </div>
    </div>
    <b-modal :active.sync="isCardModalActive" class="modal-qr">
      <div class="card-content has-text-centered">
        <p class="image qr-modal">
          <qrcode :value="wallet" :options="{ size: 220 }" class="has-text-centered"></qrcode>
        </p>
      </div>
    </b-modal>
  </section>
</template>

<script>
import Ledger from "volentix-ledger";
import axios from 'axios'

const chainId = process.env.CHAIN_ID
const httpEndpoint = process.env.HTTP_ENDPOINT

const myaccount = "vtxtrust";
let ledger = {};

export default {
  data() {
    return {
      transactions: [
        {
          s: "",
          key: 0,
          Id: 0,
          sToKey: "",
          fromAccount: "",
          toAccount: "",
          fromKey: "",
          currency: "",
          amount: 0,
          iVal: null,
          fVal: null,
          comment: "",
          nonce: "",
          timestamp: 0
        }
      ],
      messages: "",
      isCardModalActive: false,
      wallet: "",
      balance: "0.00",
      transactionLink: "/transactiondetails",
      hasTransactions: false,
      noTransactions: false,
      appVersion: this.$appVersion,
      appName: this.$appName,
      loadingData: true,
      currentBtcValue: 0.0
    };
  },
  mounted() {
    ledger = new Ledger({
      httpEndpoint: httpEndpoint,
      chainId: chainId
    },
    process.env.LEDGER_ACCOUNT_NAME);

    this.setWallet();
    this.refreshBalance();
    this.getTransactionHistory();
  },
  methods: {
    setWallet: function() {
      this.wallet = this.$store.state.userKey;
    },
    async getTransactionHistory() {
      this.hasTransactions = false;
      this.noTransactions = false;
      // console.log("wallet: " + this.wallet);
      try {
        const userTransactions = await ledger.retrieveTransactions({
          account: myaccount,
          wallet: this.wallet
        });
        this.loadingData = false;
        if (userTransactions.transactions.length > 0) {
          this.transactions = userTransactions.transactions;
          this.hasTransactions = true;
          this.getDate();
        } else {
          this.noTransactions = true;
        }
      } catch (error) {
        console.log("1!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(error)
        this.noTransactions = true;
        this.loadingData = false;
      }
    },
    getDate() {
      for (let i = 0; i < this.transactions.length; i++) {
        this.transactions[i].timestamp =
          parseInt(this.transactions[i].timestamp) / 1000;
      }
    },
    async refreshBalance() {
      this.loadingData = true;
      this.balance = "0.00";
      this.currentBtcValue = 0.00
      try {
        const balance = await ledger.retrieveBalance({
          account: myaccount,
          wallet: this.wallet
        },
        "vltxtgevtxtr");
        console.log("Balance: " + JSON.stringify(balance))
        // console.log(balance);
        this.balance = balance.amount.toFixed(2);
        if (this.balance > 0) {
          let results = await axios.get("https://volentix-cf.tekstackapps.com/public/api/summary/");
          // console.log(JSON.stringify());
          this.currentBtcValue = ((results.data.current_price * this.balance) / 100000000)
        }
      } catch (error) {
        console.log("2@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        this.noTransactions = true;
        this.loadingData = false;
      }
    },
    removeToast: function() {
      this.isCopied = false;
    },
    copiedClicked: function() {
      this.isCopied = true;
      setTimeout(this.removeToast, 2000);
    },
    toast() {
      this.$toast.open({
        type: "is-white",
        message: "Copied",
        duration: 2000
      });
    },
    openZixipay() {
      const shell = require("electron").shell;
      event.preventDefault();
      shell.openExternal("https://zixipay.com");
    },
    refreshContent() {
      this.refreshBalance();
      this.getTransactionHistory();
    }
  }
};
</script>

<style scoped>
.notices.is-top {
  top: 18rem !important;
  left: 18.5rem;
}
.notices .toast {
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
}
.is-vcentered {
  align-items: center;
}
.top-bg {
  background-image: url(~@/assets/img/wallet-main-top-bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dark-blue-gradient {
  background: linear-gradient(
    to bottom,
    rgba(41, 137, 216, 0) 0%,
    rgba(255, 255, 255, 0) 10%,
    rgba(34, 52, 53, 1) 100%
  );
}
.w-main-b-graident {
  background: linear-gradient(
    to bottom,
    rgba(34, 52, 53, 1) 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0.1) 80%,
    rgba(255, 255, 255, 0) 90%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.wallet-address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;
}
.line-height-md {
  line-height: 1rem;
}
.logo {
  height: 3.5rem;
}
.list-item {
  border-bottom: solid 1px rgba(55, 202, 189, 0.3);
  width: 100vw;
}
.hero-body {
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  align-items: flex-start !important;
}
.hero-body > .container {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.hero-foot {
  border-top: none;
}
.hero.is-fullheight .hero-body {
  flex: 1;
}
.hero.is-fullheight {
  height: 100vh;
}
</style>
