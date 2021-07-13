<template>
<v-app>
      <TopNav/>
      <v-main>
         <transition name="fade" mode="out-in">
          <router-view/>
         </transition>
      </v-main>
      <Footer/>
  </v-app>
</template>

<script>

import TopNav from '../src/components/TopNav.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name:'App',
    components: {
    TopNav,
    Footer
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>