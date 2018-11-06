<template>
  <div class="hero-body is-paddingless has-blur-background font-gibson">
    <div class="gradient-wrapper">&nbsp;</div>
    <div class="container">
      <div class="columns is-marginless p-b-md">
        <div>
          <div class="top-layer">
            <div class="column list-item">
              <div class="is-size-custom-header has-text-centered">
                <p class="has-text-aqua">Transaction Record</p>
              </div>
              <router-link :to="{ name: 'Main', params: { key: $route.params.wallet } }">
                <span class="icon is-size-6 has-text-white m-l-sm"><font-awesome-icon icon="arrow-left" class="is-size-7 has-text-white"/></span>
              </router-link>
              <div class="m-t-sm p-b-md is-size-vtx-amount has-text-centered">
                <p class="has-text-light"> {{ $route.params.transaction.iVal >= 0 ? '+' : '-' }}{{ $route.params.transaction.iVal }}.{{ $route.params.transaction.fVal }} VTX</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column list-item font-gibson has-text-white">
          <div v-if="$route.params.transaction.fromAccount && $route.params.transaction.fromKey">
            <p class="is-size-5 has-text-grey p-t-md p-l-sm">From:</p>
            <div class="wallet-address">
              <span class="is-size-7 has-text-aqua p-l-sm">Account: </span>
              <span class="size-font-wallet has-text-white p-l-sm"> {{ $route.params.transaction.fromAccount }} </span>
            </div>
            <b-tooltip :label="$route.params.transaction.fromKey" position="is-bottom" type="is-white">
              <div class="wallet-address">
                <span class="is-size-7 has-text-aqua p-l-sm">Wallet: </span>
                <span class="size-font-wallet has-text-white p-l-sm"> {{ $route.params.transaction.fromKey }} </span>
              </div>
            </b-tooltip>
          </div>
          <p class="is-size-5 has-text-grey p-t-sm p-l-sm">To:</p>
          <div class="wallet-address">
            <span class="is-size-7 has-text-aqua p-l-sm">Account: </span>
            <span class="size-font-wallet has-text-white p-l-sm"> {{ $route.params.transaction.toAccount }} </span>
          </div>
          <b-tooltip :label="$route.params.transaction.sToKey" position="is-bottom" type="is-white">
            <div class="wallet-address">
              <span class="is-size-7 has-text-aqua p-l-sm">Wallet: </span>
              <span class="size-font-wallet has-text-white p-l-sm"> {{ $route.params.transaction.sToKey }} </span>
            </div>
          </b-tooltip>
        </div>
        <div class="column">
          <div class="level is-mobile">
            <div class="level-left">
              <div>
                <p class="is-size-5 has-text-grey p-t-sm p-l-sm">Transaction #:</p>
                <p class="is-size-6 has-text-white p-l-sm"> {{ $route.params.transaction.Id }} </p>
                <br>
                <p class="is-size-5 has-text-grey p-l-sm">Transaction Time:</p>
                <div class="level is-mobile">
                  <div class="level-left">
                    <p class="is-size-6 has-text-white p-l-sm"> {{ $route.params.transaction.timestamp | formatDate }} </p>
                  </div>
                  <div class="level-right">
                    <p class="is-size-6 has-text-white p-l-sm"> {{ $route.params.transaction.timestamp | formatTime }} </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-right m-r-xl">
              <div>
                <p class="is-size-5 has-text-grey p-l-sm">Block #:</p>
                <p class="is-size-6 has-text-white p-l-sm"> {{ $route.params.transaction.tbn }} </p>
                <br>
                <p class="is-size-5 has-text-grey p-l-sm">Prefix #:</p>
                <p class="is-size-6 has-text-white p-l-sm"> {{ $route.params.transaction.tbp }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    formatDate: value => moment(value).format("MMM D, YYYY"),
    formatTime: value => moment(value).format("h:mm:ss A")
  }
};
</script>

<style scoped>
.tooltip {
  width: 95%;
}
.tooltip:before {
  margin-left: 0.5rem;
}
.tooltip:after {
  width: 22rem;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}
.wallet-address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.transaction-id {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.is-size-custom-header {
  font-size: 1.7rem;
}
.is-size-vtx-amount {
  font-size: 2.7rem;
}
.copy-button {
  width: 100%;
}
.has-blur-background {
  background-image: url(~@/assets/img/transaction-back-screen.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.has-text-aqua {
  color: #2cfee6;
}
.size-font-wallet {
  font-size: 0.8rem;
}
.size-smaller {
  font-size: 0.75rem;
}
.is-vcentered {
  align-items: center;
}
.line-height-md {
  line-height: 1rem;
}
.list-item {
  border-bottom: solid 1px rgba(55, 202, 189, 0.3);
  width: 100vw;
}
</style>
