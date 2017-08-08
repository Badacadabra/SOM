// import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('sets the correct default data', () => {
    expect(Login.data).to.be.a('function')
    const defaultData = Login.data()
    expect(defaultData.pseudo).to.be.a('string').that.is.empty
    expect(defaultData.password).to.be.a('string').that.is.empty
  })
})
