<template>
  <!-- <div />  -->
  <video autoplay muted loop id="video-top"  class="fixed-top"  >
    <source src="../src/assets/bg.mp4" type="video/mp4">
  </video>
  
   
  <div id="img-top" class="fixed-top" /> 

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
 
#video-top{
  width: 100%;
  z-index:-1000;    
}
#img-top{
  background-image: url("assets/main-bg.jpg");
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  
  z-index:-1000;    
  height: 800px; /* whatever the height of the background image is */
}


 
 
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 #video-top {
     display: block;
  }
  #img-top {
     display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
 #video-top {
     display: block;
  }
  #img-top {
     display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
   #video-top {
     display: block;
  }
  #img-top {
     display: none;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #video-top {
     display: block;
  }
  #img-top {
     display: none;
  }
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
  },
  methods: {
    isHomePage(){

      return this.$route.name === "Home";
    }
  }
}

</script>


