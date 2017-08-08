// import Vue from 'vue'
import NewsFeed from '@/components/NewsFeed'

describe('NewsFeed.vue', () => {
  it('sets the correct default data', () => {
    expect(NewsFeed.data).to.be.a('function')
    const defaultData = NewsFeed.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.news).to.be.an('array').that.is.empty
  })
})

