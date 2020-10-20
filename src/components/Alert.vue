<template>
  <card :class="types[type].bg">
    <div class="flex p-4">
      <div class="w-10">
        <Zondicon :icon="types[type].icon" :class="types[type].color"
                  class="fill-current inline-block h-6 w-6  flex-shrink-0 mr-2"/>
      </div>
      <div>
        <div class="font-bold w-full flex justify-left" v-if="title"> {{ title }}</div>
        <div class="w-full text-justify">
          <slot></slot>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Zondicon from 'vue-zondicons'
import TypeValidator from '../mixins/validators/TypeValidator'

export default {
  name: 'Alert',
  data () {
    return {
      types: {
        success: {
          icon: 'checkmark',
          color: 'text-green-500',
          bg: 'bg-green-200'
        },
        info: {
          icon: 'information-solid',
          color: 'text-blue-500',
          bg: 'bg-blue-200'
        },
        danger: {
          icon: 'close-solid',
          color: 'text-red-500',
          bg: 'bg-red-200'
        },
        warning: {
          icon: 'hand-stop',
          color: 'text-yellow-500',
          bg: 'bg-yellow-200'
        }
      }
    }
  },
  components: {
    Zondicon
  },
  props: {
    type: {
      type: String,
      required: true,
      validate: TypeValidator
    },
    title: {
      type: String
    }
  }
}
</script>
<style src="../assets/tailwind.css"></style>
