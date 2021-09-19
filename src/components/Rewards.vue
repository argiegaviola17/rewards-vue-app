<template>
    <div  id="rewards" class="d-flex align-items-center justify-content-center">
      Rewards
    </div>
    <div  id="rewards_extra_small" >
      Rewards
    </div>
</template>

<style  lang="scss" scoped>

@include media(">480px") { 
    #rewards {
      background-color: #0274bb;
      color: white;
      font-weight: 800;
      font-family: Sprint Sans Bold;
    }
    #rewards_extra_small{
      display: none!important;
    }
}

@include media(">desktop") { // desktop - 1024px
    #rewards {
      height: 192px;
      font-size: 35px;
    }
}
@include media(">480px","<=desktop") { 
    #rewards {
      height: 15vw;
      font-size: 5vw;
    }
}
 
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

