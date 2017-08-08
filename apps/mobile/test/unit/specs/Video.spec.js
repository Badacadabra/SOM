// import Vue from 'vue'
import Video from '@/components/Video'

describe('Video.vue', () => {
  it('sets the correct default data', () => {
    expect(Video.data).to.be.a('function')
    const defaultData = Video.data()
    expect(defaultData.video).to.be.an('object').that.is.empty
  })
})
