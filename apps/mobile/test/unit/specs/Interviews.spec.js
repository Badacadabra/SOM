// import Vue from 'vue'
import Interviews from '@/components/Interviews'

describe('Interviews.vue', () => {
  it('sets the correct default data', () => {
    expect(Interviews.data).to.be.a('function')
    const defaultData = Interviews.data()
    expect(defaultData.page).to.equal(1)
    expect(defaultData.interviews).to.be.an('array').that.is.empty
  })
})
