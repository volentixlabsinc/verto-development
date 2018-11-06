import Vue from 'vue'
import LandingPage from '@/components/LandingPage'

describe('LandingPage.vue', () => {
  it('Has a created hook', () => {
    assert.typeOf(LandingPage.created, 'function');
  })

  it('Sets the correct default data', () => {
    assert.typeOf(LandingPage.data, 'function')
    const defaultData = LandingPage.data()
    assert.equal(defaultData.messages, 'Welcome page')
  })

  it('Renders the correct message', () => {
    const Constructor = Vue.extend(LandingPage)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.container').textContent).toBe('Welcome page')
    assert.include(vm.$el.querySelector('.container').textContent, 'Welcome page')
  })
})
