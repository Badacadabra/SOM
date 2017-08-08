// import Vue from 'vue'
import Reviews from '@/components/Reviews'

describe('Reviews.vue', () => {
  it('sets the correct default data', () => {
    expect(Reviews.data).to.be.a('function')
    const defaultData = Reviews.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.reviews).to.be.an('array').that.is.empty
  })
})
