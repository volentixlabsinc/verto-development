import utils from '../utils'

describe('Launch test', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('Shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('verto')
      })
  })
})
