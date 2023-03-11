<script>
import AppHeader from './components/AppHeader.vue';
import ProjectMain from './components/ProjectMain.vue';
export default {
  components:{
    AppHeader,
    ProjectMain,
  }
}
</script>
<template lang="">
  <AppHeader />
  <div>
    <router-view></router-view>
  </div>
</template>
<style lang="">
  
</style>