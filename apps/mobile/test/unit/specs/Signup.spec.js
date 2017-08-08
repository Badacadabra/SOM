// import Vue from 'vue'
import Signup from '@/components/Signup'

describe('Signup.vue', () => {
  it('sets the correct default data', () => {
    expect(Signup.data).to.be.a('function')
    const defaultData = Signup.data()
    expect(defaultData.username).to.be.a('string').that.is.empty
    expect(defaultData.password).to.be.a('string').that.is.empty
    expect(defaultData.email).to.be.a('string').that.is.empty
    expect(defaultData.location).to.be.a('string').that.is.empty
    expect(defaultData.language).to.be.a('string').that.is.empty
    expect(defaultData.birthday).to.be.a('string').that.is.empty
    expect(defaultData.locations).to.be.an('array').that.is.empty
  })
})
