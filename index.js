import Card from './src/components/Card'
import Alert from './src/components/Alert'

const SdkUI = {}
SdkUI.install = Vue => {
  Vue.component('card', Card)
  Vue.component('alert', Alert)
}

export default SdkUI
