// import Vue from 'vue'
import Releases from '@/components/Releases'

describe('Releases.vue', () => {
  it('sets the correct default data', () => {
    expect(Releases.data).to.be.a('function')
    const defaultData = Releases.data()
    expect(defaultData.releases).to.be.an('array').that.is.empty
  })
})
