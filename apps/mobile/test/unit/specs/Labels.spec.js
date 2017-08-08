// import Vue from 'vue'
import Labels from '@/components/Labels'

describe('Labels.vue', () => {
  it('sets the correct default data', () => {
    expect(Labels.data).to.be.a('function')
    const defaultData = Labels.data()
    expect(defaultData.labels).to.be.an('array').that.is.empty
  })
})
