<template>
    <div class="col">
        <div class="card shadow-sm border-0 rounded-0">
            <div class="card-img-top  rounded-0 img-fluid" id="image" :style="getStyle()"> 
            </div>
            
            <div class="card-body">
                <p class="card-text pt-3 pb-3 col-12">
                    <font style="vertical-align: inherit; font-weight:800" >
                        Win a {{item.name}}
                    </font>
                </p>
                <div class="align-items-center pt-2 pb-3">
                    <router-link :to="{ name: 'item', params: { id: item._id }}">
                        <span class="btn rounded-pill app-btn-bg-color btn-md col-12 col-lg-6 col-xl-6"  >Redeem ></span>
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
    color: white;
    padding: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
}
</style>