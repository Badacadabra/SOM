// import Vue from 'vue'
import Albums from '@/components/Albums'

describe('Albums.vue', () => {
  it('sets the correct default data', () => {
    expect(Albums.data).to.be.a('function')
    const defaultData = Albums.data()
    expect(defaultData.albums).to.be.an('array').that.is.empty
  })
})

