<template>
  <div class="home text-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue.js courses" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
