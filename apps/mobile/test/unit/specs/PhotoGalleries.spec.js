// import Vue from 'vue'
import PhotoGalleries from '@/components/PhotoGalleries'

describe('PhotoGalleries.vue', () => {
  it('sets the correct default data', () => {
    expect(PhotoGalleries.data).to.be.a('function')
    const defaultData = PhotoGalleries.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.galleries).to.be.an('array').that.is.empty
  })
})
