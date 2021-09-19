<template>
 <div  id="wrapper" class="container">
   <div id="main">
      <Header />
      <Rewards />
      <router-view/>
      <Footer /> 
   </div>
 </div>
 <!-- Back to top button -->
  <button
          type="button"
          class="btn app-btn-bg-color btn-floating btn-lg"
          id="btn-back-to-top"
          >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  </button>
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
@include media(">=1600px") { // desktop - 1024px
    #wrapper {
      width: 1301px;
    }
    #main {
      width: 1301px;
    }
}


@include media(">=50px","<=480px") {
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

#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
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
  },
  methods:{
    scrollToTop(){
      window.scrollTo(0,0);
    }
  },
  watch: {
    '$route': 'scrollToTop'
  },
  mounted(){
    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}

</script>


