<template>
    <div class="col">
        <div class="card shadow-sm border-0 rounded-0">
            <!-- <div class="card-img-top  rounded-0 img-fluid" id="image" :style="getStyle()">  -->
            <!-- </div> -->
            <img :src="item.imageUrl" class="card-img-top"  id="image" width="300" height="300">
            
            <div class="card-body">
                <!-- <p class="card-text pt-3 pb-3 col-12 ">
                    <font style="vertical-align: inherit; font-weight:800" >
                        Win a {{item.name}}
                    </font>
                </p> -->
                <div class="item-name badge-primary col-sm-12 col-md-12 ">
                    Win a {{item.name}}
                </div>
            </div>
            <div class="align-items-center pt-2 pb-3 card-footer">
                    <router-link :to="{ name: 'item', params: { id: item._id }}">
                        <span class="btn rounded-pill btn-outline-secondary btn-md col-lg-6 col-xl-6 col-sm-12"  >Redeem  
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </span>
                    </router-link>
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
#image {
      
    color: white;
    object-fit: cover;
}
.card-footer {
    padding: 48px 0 56px;
    background: transparent;
    border:0;
}


</style>