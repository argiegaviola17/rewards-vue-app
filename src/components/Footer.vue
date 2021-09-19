<template>
  <div  id="footer" class="d-flex align-items-center justify-content-center">
    <span>Terms &amp; Conditions &nbsp;|&nbsp; Privacy Policy</span>
  </div>
    
  <div id="extra_small_footer" >
    <div>Terms &amp; Conditions</div>
    <div>Privacy Policy</div>
  </div>
</template>



<style lang="scss" scoped>

@include media(">=desktop") {
  #footer {
    height: 228px;  
    background: linear-gradient(81deg, rgba(7,7,7,1) 0%, rgba(25,25,25,1) 100%);
    color: white;
    font-size: 16px;
    font-weight: 800;
    font-family: Sprint Sans Regular;
  }
  #extra_small_footer{
    display: none !important;
  }
}
// @include media(">=phone","<=tablet") {    
//    #extra_small_footer{
//     display: none !important;
//   } 
// }

@include media(">=50px","<=480px") {
  #footer {
    display: none !important;
  } 
  #extra_small_footer{
    display: block;
    background: linear-gradient(81deg, rgba(7,7,7,1) 0%, rgba(25,25,25,1) 100%);
    color: white;
    width: 100%;
    height: auto;
    font-size: 5vw;
    text-align: center;    
    padding: 5% 0% 5% 0%;
  }
}
</style>