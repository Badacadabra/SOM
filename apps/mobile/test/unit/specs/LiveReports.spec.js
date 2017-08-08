// import Vue from 'vue'
import LiveReports from '@/components/LiveReports'

describe('LiveReports.vue', () => {
  it('sets the correct default data', () => {
    expect(LiveReports.data).to.be.a('function')
    const defaultData = LiveReports.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.reports).to.be.an('array').that.is.empty
  })
})
