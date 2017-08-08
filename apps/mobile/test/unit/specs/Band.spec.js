// import Vue from 'vue'
import Band from '@/components/Band'

describe('Band.vue', () => {
  it('sets the correct default data', () => {
    expect(Band.data).to.be.a('function')
    const defaultData = Band.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.band).to.be.an('object').that.is.empty
    expect(defaultData.albums).to.be.an('array').that.is.empty
  })
})
