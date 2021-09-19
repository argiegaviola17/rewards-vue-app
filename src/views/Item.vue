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

    <div v-if="item" class="container_extra_small">
        <img :src="item.imageUrl" style="width:100%;height:auto" />
        <div class="details ">
            <div class="name border-bottom">
                <span >Win a {{item.name}}</span>
            </div>
            <div  class="redeemBtnDiv border-bottom" >
                <button type="button"   href="#exampleModalToggle" class="  app-btn-bg-color redeemBtn"   @click="showModal">Redeem ></button>
            </div>
            <div class="stock row">
                <span >{{item.quantity}} left in stock</span>
            </div>
        </div>

        <div  class="description_label border-top">
            <span  >Description</span>
        </div>

        <div  class="description">
            <span>{{item.description}}</span>
        </div>
    </div>
     
    <RedeemModal id="redeemModal" congratsModalId="congratsModal"  v-bind:item="item" v-if="item" v-on:updateItem="updateItem" />
</template>

<script>
import RedeemModal from '@/components/RedeemModal.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import axios from "axios"
import * as bs from "bootstrap"
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

<style lang="scss" scoped>
@include media(">=1600px") { // desktop - 1024px
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
    .container_extra_small{
        display: none;
    }
}
 

@include media(">480px","<1600px") { // tablet - 768px
    .container{
        display: none!important;
    }
    .container_extra_small{
        display: block;

        padding: 5% 20% 5% 20%;

        .details {
            background-color: white;            
            border-end-end-radius: 5%;
            border-end-start-radius: 5%;
            margin-bottom: 10%;
            padding: 0% 3% 0% 3%;

            .name {
                font-size: 4vw;
                font-family: Sprint Sans Bold;
            }

            .redeemBtnDiv{
                width: 100%;
                padding: 4vw 0vw 4vw 0vw;
                text-align: center;
                height: auto;
                
                .redeemBtn  {
                    border: 1px solid transparent ;
                    font-size: 3vw ;
                    border-radius: 50rem;
                }   
            }
             
            .stock{
                font-size: 2vw;
                padding: 4% 0% 5% 0%;
            }
        }

        .description_label {
            text-align: center;
            font-size: 3vw;
             font-family: Sprint Sans Bold;
        }

        .description {
            text-align: center;
            font-size: 2vw;
        }
    }
}
 
@include media(">=50px","<=480px") {
    .container{
        display: none!important;
    }
    .container_extra_small{
        display: block;
        padding: 5% 2% 5% 2%;

        .details {
            background-color: white;
            padding: 2% 3% 4% 3%;
            border-end-end-radius: 5%;
            border-end-start-radius: 5%;
            margin-bottom: 10%;

            .name {
                font-size: 9vw;
                font-family: Sprint Sans Bold;
                 
            }

            .redeemBtnDiv{
                width: 100%;
                padding: 4vw 0vw 5vw 0vw;
                text-align: center;
                height: auto;
                
                .redeemBtn  {
                    border: 1px solid transparent ;
                    font-size: 7vw ;
                    border-radius: 50rem;
                    
                }   
            }
             
            .stock{
                font-size: 5vw;
                padding: 4% 0% 5% 0%;
            }
        }

        .description_label {
            text-align: center;
            font-size: 8vw;
             font-family: Sprint Sans Bold;
        }

        .description {
            text-align: center;
            font-size: 7vw;
        }
        
    }
}
</style>