// import Vue from 'vue'
import Label from '@/components/Label'

describe('Label.vue', () => {
  it('sets the correct default data', () => {
    expect(Label.data).to.be.a('function')
    const defaultData = Label.data()
    expect(defaultData.label).to.be.an('object').that.is.empty
    expect(defaultData.albums).to.be.an('array').that.is.empty
  })
})
