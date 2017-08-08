// import Vue from 'vue'
import Bands from '@/components/Bands'

describe('Bands.vue', () => {
  it('sets the correct default data', () => {
    expect(Bands.data).to.be.a('function')
    const defaultData = Bands.data()
    expect(defaultData.bands).to.be.an('array').that.is.empty
  })
})
