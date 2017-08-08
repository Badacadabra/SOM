// import Vue from 'vue'
import Events from '@/components/Events'

describe('Events.vue', () => {
  it('sets the correct default data', () => {
    expect(Events.data).to.be.a('function')
    const defaultData = Events.data()
    expect(defaultData.gigsSelected).to.be.true
    expect(defaultData.reportsSelected).to.be.false
    expect(defaultData.galleriesSelected).to.be.false
  })
})

