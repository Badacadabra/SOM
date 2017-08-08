// import Vue from 'vue'
import Videos from '@/components/Videos'

describe('Videos.vue', () => {
  it('sets the correct default data', () => {
    expect(Videos.data).to.be.a('function')
    const defaultData = Videos.data()
    expect(defaultData.videos).to.be.an('array').that.is.empty
  })
})
