<template>
  <div id="app">
    <router-view/>
    <!-- <env-label v-if="enviroment == 'development'"/> -->
  </div>
</template>
<script>
import EnvLabel from '@/components/_EnvLabel.vue'
export default {
  name:'App',
  components: {
    EnvLabel
  },
  data() {
    return {
      enviroment: process.env.NODE_ENV
    }
  }
  
}
</script>

