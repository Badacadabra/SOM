// import Vue from 'vue'
import LiveReport from '@/components/LiveReport'

describe('LiveReport.vue', () => {
  it('sets the correct default data', () => {
    expect(LiveReport.data).to.be.a('function')
    const defaultData = LiveReport.data()
    expect(defaultData.report).to.be.an('object').that.is.empty
  })
})

