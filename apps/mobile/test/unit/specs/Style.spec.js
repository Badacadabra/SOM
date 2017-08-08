// import Vue from 'vue'
import Style from '@/components/Style'

describe('Style.vue', () => {
  it('sets the correct default data', () => {
    expect(Style.data).to.be.a('function')
    const defaultData = Style.data()
    expect(defaultData.bandsSelected).to.be.true
    expect(defaultData.albumsSelected).to.be.false
  })
})
