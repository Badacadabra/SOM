// import Vue from 'vue'
import Audio from '@/components/Audio'

describe('Audio.vue', () => {
  it('sets the correct default data', () => {
    expect(Audio.data).to.be.a('function')
    const defaultData = Audio.data()
    expect(defaultData.audio).to.be.an('object').that.is.empty
  })
})
