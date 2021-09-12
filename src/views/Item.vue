<template>    
    <div v-if="loading" class="loading container">
      Loading...
    </div>

    <div v-if="error" class="error">
        <PageNotFound />
    </div>

    <div class="container" v-if="item">
        <div class="row pb-5 pt-5 g-0">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 gx-3"  >
                <img :src="item.imageUrl" class="img-fluid" id="image"/>
            </div>
            <div class="col-sm-6  col-md-12 col-lg-12 col-xl-6 " >
                <div class="card text-start  px-3 py-3 col-sm-12 col-md-12 col-lg-12 col-xl-8" >
                    <div class="card-body">
                        <div class="row border-bottom card-title pb-5" >
                            <span id="name">Win a {{item.name}}</span>
                        </div>
                        <div class="row border-bottom mt-4 pb-4" >
                            <button v-if="item.quantity>0" type="button"  class="btn  rounded-pill btn-outline-secondary col-sm-12 col-lg-6 col-md-6"   @click="showModal">Redeem 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </button>
                            <button v-else type="button"  class="btn  rounded-pill btn-outline-secondary  col-sm-12 col-lg-6 col-md-6" disabled>Redeem 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="row mt-3" >
                            <span id="stock">{{item.quantity}} left in stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container bg-white mb-5" v-if="item">
        <div class="row pb-5 pt-5 g-0">
            <div class="col-12 col-lg-4">
                <span id="description-label">Description</span>
            </div>

            <div class="col-12 col-lg-8">
                <span>{{item.description}}</span>
            </div>
        </div>
    </div>
    <RedeemModal id="redeemModal" congratsModalId="congratsModal"  v-bind:item="item" v-if="item" v-on:updateItem="updateItem" />
</template>

<script>
import RedeemModal from '@/components/RedeemModal.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import axios from "axios"
import * as bs from "bootstrap"
window.bs = bs;
export default {

    data: function() {
        return {
            item: null,
            loading: false,            
            error: null
        };
    },
    components: {
        RedeemModal,
        PageNotFound
    },
    methods: {
        
        async showModal( ) {
            var myModal = new bs.Modal(document.getElementById('redeemModal'), {
                  keyboard: false
            })
            myModal.show();
        },
        fetchData () {
            this.error = this.post = null
            this.loading = true
            const fetchedId = this.$route.params.id
         
            
            axios
            .get("/reward/"+fetchedId)
            .then(response => {
                this.item = response.data;
            }).catch(error => {
                this.error = error.toString()
            })
            .finally(() => {
                this.loading = false
            })
        },
        updateItem (item) {
            this.item = item;
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    mounted(){
        this.fetchData();    
    }
}
</script>

<style scoped>
#name {
    font-size: 30px;
    font-weight:900;
    font-stretch: ultra-condensed;
}
#stock {
    font-size: 15px;
}
#description-label{
    font-size: 25px;
    font-weight:900;
    font-stretch: ultra-condensed;
}
#image {
      
    color: white;
    object-fit: cover;
}
</style>