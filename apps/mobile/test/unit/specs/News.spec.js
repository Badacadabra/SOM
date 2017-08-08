// import Vue from 'vue'
import News from '@/components/News'

describe('News.vue', () => {
  it('sets the correct default data', () => {
    expect(News.data).to.be.a('function')
    const defaultData = News.data()
    expect(defaultData.news).to.be.an('object').that.is.empty
  })
})
