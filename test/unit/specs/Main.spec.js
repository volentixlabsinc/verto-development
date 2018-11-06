import Vue from 'vue'
import Main from '@/components/Main'

describe('Main.vue', () => {
  it('Has a mounted hook', () => {
    assert.typeOf(Main.mounted, 'function');
  })

  it('Sets the correct default data', () => {
    assert.typeOf(Main.data, 'function')
    const defaultData = Main.data()
    assert.equal(defaultData.wallet, '')
    assert.equal(defaultData.balance, '0.00')
    assert.isFalse(defaultData.isCardModalActive)
    assert.equal(defaultData.transactionLink, "/transactiondetails")
  })

  it('Renders the correct message', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    assert.include(vm.$el.querySelector('.wallet-address').textContent, 'Wallet address:')
  })
})
