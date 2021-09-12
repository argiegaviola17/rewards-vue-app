<template>
  <div id="top" class="fixed-top"/> 
  <Header />
  <Rewards />
  <div id="core-display" class="container" >
    <router-view/>
  </div>
  <Footer />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#core-display {
  /* background-color: #f3f3f3; */
}
#top{
  background-image: url("assets/main-bg.jpg");
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  
  z-index:-1000;    
  height: 800px; /* whatever the height of the background image is */
}

</style>

<script>
import Header from '@/components/Header.vue'
import Rewards from '@/components/Rewards.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Rewards,
    Footer
  }
}
</script>


