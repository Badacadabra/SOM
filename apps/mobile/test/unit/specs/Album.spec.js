// import Vue from 'vue'
import Album from '@/components/Album'

describe('Album.vue', () => {
  it('sets the correct default data', () => {
    expect(Album.data).to.be.a('function')
    const defaultData = Album.data()
    expect(defaultData.album).to.be.an('object').that.is.empty
    expect(defaultData.audios).to.be.an('array').that.is.empty
    expect(defaultData.bandcampLogo).to.be.a('string').that.contains('bandcamp.png')
    expect(defaultData.soundcloudLogo).to.be.a('string').that.contains('soundcloud.png')
    expect(defaultData.defaultLogo).to.be.a('string').that.contains('no-image.png')
  })
})
