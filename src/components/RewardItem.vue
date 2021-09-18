<template>
    <div class="col r-item-wrapper" >
        <div class="r-item shadow-sm">
            <img :src="item.imageUrl"  height="247" style="width:100%" />
            <div >
                <div class="r-item-title d-flex align-items-center justify-content-center">
                    Win a {{item.name}}
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <router-link :to="{ name: 'item', params: { id: item._id }}">
                        <span class="r-item-btn app-btn-bg-color col-lg-12 btn" style="text-decoration:none;" >Redeem ></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="col r-item-wrapper-extra-small" >
        <div class="r-item shadow-sm">
            <img :src="item.imageUrl" style="width:100%;height:auto" />
            <div >
                <div class="r-item-title">
                    Win a {{item.name}}
                </div>
                <div class=" ">
                    <router-link :to="{ name: 'item', params: { id: item._id }}" style="text-decoration:none;color:black;">
                        <span class="r-item-btn app-btn-bg-color"   >Redeem ></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
export default {
    name: 'RewardItem',
    props: {
        item: {
            type: Object
        }
    },
    methods:{
        
    }
}
</script>

 

<style lang="scss" scoped>
@include media(">=desktop") { // desktop - 1024px
    .r-item{
        width: 371px;
        height: 471px;
        border-radius: 5px;
        background-color: white;
    }
    .r-item > img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .r-item-title {
        height: 144px;
        width: 100%;
        font-size: 20px;
        font-weight: 800;
        font-family: Sprint Sans Bold;
    }
    .r-item-btn {
        width:162px;
        border-radius: 50rem;
    }

    .r-item-wrapper-extra-small{
        display: none!important;
    }
}
@include media(">=phone","<=tablet") { // tablet - 768px
    .r-item-wrapper{
        display: none!important;
    }
    .r-item-wrapper-extra-small{
        display: block;
    }
}
@include media(">=240px","<phone") { // 
    .r-item-wrapper{
        display: none!important;
    }
    .r-item-wrapper-extra-small{
        display: block;
    }
}
@include media(">=50px","<240px") {
    .r-item-wrapper{
        display: none!important;
    }
    .r-item-wrapper-extra-small{
        display: block;
        padding: 0% 2% 0% 2%;
    }
    .r-item{
        padding: 0% 0% 10% 0%;
        background-color: white;
        border-radius: 3vw;
        margin-bottom: 3%;
    }
    .r-item-title {
        width: 100%;
        font-size: 8vw;
        font-family: Sprint Sans Bold;
        text-align: center;
        margin-bottom: 5%;
    }
    .r-item-btn{
        width: 100%;
        font-size: 5vw;
        border-radius: 50rem;
        padding: 3%;
    }
}
</style>