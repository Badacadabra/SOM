// import Vue from 'vue'
import Artists from '@/components/Artists'

describe('Artists.vue', () => {
  it('sets the correct default data', () => {
    expect(Artists.data).to.be.a('function')
    const defaultData = Artists.data()
    expect(defaultData.artists).to.be.an('array').that.is.empty
  })
})
