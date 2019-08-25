<template>
  <div class="home text-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Vue.js courses" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'hello-world': () => import('@/components/HelloWorld.vue')
  }
};
</script>
