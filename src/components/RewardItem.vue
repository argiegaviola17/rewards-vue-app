<template>
    <div class="col">
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
        // getStyle(){
        //     return `background-image: url(${this.item.imageUrl})`
        // }
    }
}
</script>

<style scoped>
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
</style>