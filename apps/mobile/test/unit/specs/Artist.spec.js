// import Vue from 'vue'
import Artist from '@/components/Artist'

describe('Artist.vue', () => {
  it('sets the correct default data', () => {
    expect(Artist.data).to.be.a('function')
    const defaultData = Artist.data()
    expect(defaultData.artist).to.be.an('object').that.is.empty
  })
})
