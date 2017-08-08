// import Vue from 'vue'
import Review from '@/components/Review'

describe('Review.vue', () => {
  it('sets the correct default data', () => {
    expect(Review.data).to.be.a('function')
    const defaultData = Review.data()
    expect(defaultData.review).to.be.an('object').that.is.empty
  })
})
