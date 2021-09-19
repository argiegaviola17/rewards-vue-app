<template>
    <div  id="rewards" class="d-flex align-items-center justify-content-center">
      Rewards
    </div>
    <div  id="rewards_extra_small" >
      Rewards
    </div>
</template>

<style  lang="scss" scoped>

@include media(">=desktop") { // desktop - 1024px
    #rewards {
      height: 192px;
      background-color: #0274bb;
      color: white;
      font-size: 35px;
      font-weight: 800;
      font-family: Sprint Sans Bold;
    }
    #rewards_extra_small{
      display: none!important;
    }
}
// @include media(">=phone","<=tablet") { // tablet - 768px
//      #rewards_extra_small{
//       display: none!important;
//     }
// }
 
@include media(">=50px","<=480px") {
    #rewards{
      display: none !important;
    }
    #rewards_extra_small{
      display: block;
      background-color: #0274bb;
      color: white;
      font-family: Sprint Sans Bold;
      font-size: 8vw;
      text-align: center;
      padding: 5% 0% 5% 0%;
    }
}
</style>

