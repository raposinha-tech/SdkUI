import Card from './src/components/Card'

const SdkUI = {}
SdkUI.install = Vue => {
  Vue.component('card', Card)
}

export default SdkUI
