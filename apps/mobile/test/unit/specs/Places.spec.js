// import Vue from 'vue'
import Places from '@/components/Places'

describe('Places.vue', () => {
  it('sets the correct default data', () => {
    expect(Places.data).to.be.a('function')
    const defaultData = Places.data()
    expect(defaultData.places).to.be.an('array').that.is.empty
  })
})
