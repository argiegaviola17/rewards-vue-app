<template>    
    <div v-if="loading" class="loading container">
      Loading...
    </div>

    <div v-if="error" class="error">
        <PageNotFound />
    </div>

    <div class="container" v-if="item">
        <div class="row pb-5 pt-5 g-0">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3"  >
                <img style="height:400px" :src="item.imageUrl" class="img-fluid"/>
            </div>
            <div class="col-12  col-sm-6  col-xl-6" >
                <div class="card text-start  px-3 py-3 col-12 col-sm-12 col-md-12 col-lg-8" >
                    <div class="card-body">
                        <div class="row border-bottom card-title pb-5" >
                            <span id="name">Win a {{item.name}}</span>
                        </div>
                        <div class="row border-bottom mt-4 pb-4" >
                            <button v-if="item.quantity>0" type="button"  class="btn  rounded-pill app-btn-bg-color col-sm-12 col-lg-6 col-md-6"   @click="showModal">Redeem ></button>
                            <button v-else type="button"  class="btn  rounded-pill app-btn-bg-color col-sm-12 col-lg-6 col-md-6" disabled>Redeem ></button>
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
</style>