<template>    
    <div v-if="loading" class="loading container">
      Loading...
    </div>

    <div v-if="error" class="error">
        <PageNotFound />
    </div>

    <div class="container" v-if="item">
        <div class="row" id="item">
            <div class="row  g-0 border-bottom pb-5" >
                <div class="col-6 me-1" style="border-radius:0px;">
                    <img :src="item.imageUrl"   style="width:459px;height:418px;object-fit:cover;" />
                </div>
                <div class="col-6 ms-2" id="details">
                   <div id="name" class="row border-bottom">
                       <span >Win a {{item.name}}</span>
                   </div>
                    <div id="redeemBtn" class="row  border-bottom" >
                        <button type="button"   href="#exampleModalToggle" class="btn  rounded-pill app-btn-bg-color col-6"   @click="showModal">Redeem ></button>
                    </div>
                    <div id="stock" class="row">
                        <span >{{item.quantity}} left in stock</span>
                    </div>
                </div>
            </div>
            <div class="col-12 pt-5 pb-5"  >
               <div class="row">
                    <div class="col-2">
                        <span id="description-label">Description</span>
                    </div>
                    <div class="col-10  ps-5">
                        <span>{{item.description}}</span>
                    </div>
               </div>
            </div>

        </div>
    </div>
    <!-- <div class="container">
        <div class="row border-bottom pb-5 pt-5 g-0">
            <div class="col">
                <img style="height:400px" :src="item.imageUrl" />
            </div>

            <div class="col">
                <div class="card text-start px-3 py-3" style="width: 30rem;">
                    <div class="card-body">
                        <div class="border-bottom card-title pb-5">
                            <span id="name">Win a {{item.name}}</span>
                        </div>
                        <div class="border-bottom mt-4 pb-4">
                            <button type="button" data-bs-toggle="modal" href="#exampleModalToggle" class="btn  rounded-pill app-btn-bg-color col-6"   @click="redeemItem">Redeem ></button>
                        </div>
                        <div class="mt-3">
                            <span id="stock">{{item.qty}} left in stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container ">
        <div class="row pb-5 pt-5 g-0">
            <div class="col">
                <span id="description-label">Description</span>
            </div>

            <div class="col">
                <span>{{item.description}}</span>
            </div>
        </div>
    </div>-->
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
    font-family: Sprint Sans Bold;
    padding-bottom: 66px;
}
#redeemBtn {
    padding-top: 32px;
    padding-bottom: 32px;
}
#stock {
    font-size: 15px;
    padding-top: 14px;
}
#description-label{
    font-size: 25px;
    font-weight:900;
    font-stretch: ultra-condensed;
}
#item {
    padding-left: 178px;
    padding-right: 178px;
    padding-top: 36px;
}
#details{
    width: 459px;
    height: 306px;
    border-radius: 5px;
    background-color: white;
    padding: 29px 33px 46px 33px;
}
</style>