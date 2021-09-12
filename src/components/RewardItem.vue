<template>
    <div class="col">
        <div class="card shadow-sm border-0 rounded-0">
            <div class="card-img-top  rounded-0" id="image" :style="getStyle()"> 
                <!-- <img  :src="item.imageUrl" style="width:100%;height:400px;"/> -->
            </div>
            

            <div class="card-body">
                <p class="card-text px-5 pt-3 pb-3">
                <font style="vertical-align: inherit; font-weight:800" >
                    Win a {{item.name}}
                </font>
                </p>
                <div class="align-items-center pt-2 pb-3">
                <router-link :to="{ name: 'item', params: { id: item._id }}">
                    <span class="btn rounded-pill app-btn-bg-color btn-md col-6"  >Redeem ></span>
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
        getStyle(){
            return `background-image: url(${this.item.imageUrl})`
        }
    }
}
</script>

<style scoped>
#image {
    width: 100%;
    height: 400px;
    background-size: cover;
    color: white;
    padding: 20px;
}
</style>