// import Vue from 'vue'
import Place from '@/components/Place'

describe('Place.vue', () => {
  it('sets the correct default data', () => {
    expect(Place.data).to.be.a('function')
    const defaultData = Place.data()
    expect(defaultData.place).to.be.an('object').that.is.empty
  })
})
