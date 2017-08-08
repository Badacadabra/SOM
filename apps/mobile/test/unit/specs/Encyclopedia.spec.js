// import Vue from 'vue'
import Encyclopedia from '@/components/Encyclopedia'

describe('Encyclopedia.vue', () => {
  it('sets the correct default data', () => {
    expect(Encyclopedia.data).to.be.a('function')
    const defaultData = Encyclopedia.data()
    expect(defaultData.stats).to.be.an('array').that.is.empty
  })
})
