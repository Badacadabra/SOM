// import Vue from 'vue'
import Interview from '@/components/Interview'

describe('Interview.vue', () => {
  it('sets the correct default data', () => {
    expect(Interview.data).to.be.a('function')
    const defaultData = Interview.data()
    expect(defaultData.interview).to.be.an('object').that.is.empty
  })
})
