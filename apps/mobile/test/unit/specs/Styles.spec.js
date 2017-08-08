// import Vue from 'vue'
import Styles from '@/components/Styles'

describe('Styles.vue', () => {
  it('sets the correct default data', () => {
    expect(Styles.data).to.be.a('function')
    const defaultData = Styles.data()
    expect(defaultData.styles).to.be.an('array').that.is.empty
  })
})
