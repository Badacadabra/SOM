// import Vue from 'vue'
import Audios from '@/components/Audios'

describe('Audios.vue', () => {
  it('sets the correct default data', () => {
    expect(Audios.data).to.be.a('function')
    const defaultData = Audios.data()
    expect(defaultData.audios).to.be.an('array').that.is.empty
  })
})
