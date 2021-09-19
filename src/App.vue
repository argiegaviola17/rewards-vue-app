<template>
 <div  id="wrapper" class="container">
   <div id="main">
      <Header />
      <Rewards />
      <router-view/>
      <Footer /> 
   </div>
 </div>
</template>

<style>
#wrapper{
  height: 5000px;
  overflow: visible;
}
#main {
  background-color: #f3f3f3;
  height: 4031px;
}

</style>

<style lang="scss" scoped>
@include media(">=desktop") { // desktop - 1024px
    #wrapper {
        width: 1301px;
    }
    #main {
      width: 1301px;
    }
}
@include media(">=phone","<=tablet") { // tablet - 768px
    #wrapper {
      width: 100%;
      padding: 0px;
    }
    #main {
      width: 100%;
      padding: 0px;
    }
}
 
@include media(">=50px","<phone") {
    #wrapper {
      width: 100%;
      padding-left: 0px!important;
      padding-right: 0px!important;
    }
    #main {
      width: 100%;
      padding: 0px!important;
    }
}
</style>

<script >
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


