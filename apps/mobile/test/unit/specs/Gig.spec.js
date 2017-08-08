// import Vue from 'vue'
import Gig from '@/components/Gig'

describe('Gig.vue', () => {
  it('sets the correct default data', () => {
    expect(Gig.data).to.be.a('function')
    const defaultData = Gig.data()
    expect(defaultData.gig).to.be.an('object').that.is.empty
    expect(defaultData.coordinates).to.be.an('object').that.is.empty
  })
})
