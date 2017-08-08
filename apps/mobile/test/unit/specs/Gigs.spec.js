// import Vue from 'vue'
import Gigs from '@/components/Gigs'

describe('Gigs.vue', () => {
  it('sets the correct default data', () => {
    expect(Gigs.data).to.be.a('function')
    const defaultData = Gigs.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.gigs).to.be.an('array').that.is.empty
  })
})
