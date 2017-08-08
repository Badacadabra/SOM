// import Vue from 'vue'
import PhotoGallery from '@/components/PhotoGallery'

describe('PhotoGallery.vue', () => {
  it('sets the correct default data', () => {
    expect(PhotoGallery.data).to.be.a('function')
    const defaultData = PhotoGallery.data()
    expect(defaultData.gallery).to.be.an('object').that.is.empty
  })
})
