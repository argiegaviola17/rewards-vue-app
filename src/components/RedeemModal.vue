<template>
    <div class="modal fade" :id="id" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" aria-labelledby="modalTitle" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered  modal-lg" >
            <div class="modal-content" id="modalMain"  >
                <div class="modal-header  justify-content-end">
                    <button type="button" class="btn py-0 px-0 mb-0"  data-bs-dismiss="modal" aria-label="Close" v-if="!loading">
                        <img src="../assets/close_btn.png" style="width:26px;height:26px;object-fit:cover;"/>
                    </button>
                </div>

                <div class="modal-header  justify-content-center mt-0 py-0">
                    <h5 class="modal-title " id="modalTitle">Are you Sure ?</h5>
                </div>
                <div class="modal-body mb-3">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4" >
                            <img  :src="item.imageUrl"  class="rounded-circle" style="width:204px;height:204px;object-fit:cover;"/>
                        </div>
                        <span class="col-sm-12  text-center" id="item-name">Redeeem for {{item.name}}?</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-center row">
                    <button v-if="!loading" class="btn col-sm-12 col-md-3 col-lg-3 rounded-pill app-btn-bg-color"  v-on:click="redeemItem">Yes</button>
                    <button v-if="!loading" type="button" class="btn col-sm-12 col-md-3 col-lg-3   rounded-pill app-btn-cancel-bg-color" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    <span v-if="loading" style="text-align:center">Loading...</span>
                </div>
                <div class="modal-footer justify-content-center  mb-3">
                    <span v-if="error" class="text-danger">{{error}}</span>
                </div>
            </div>

            <div class="modal-content modal_extra_small">
                <div class="close_btn_div">
                    <button type="button" class="close_btn"   data-bs-dismiss="modal" aria-label="Close" v-if="!loading">
                        <img src="../assets/close_btn.png" style="width:8vw;height:8vw;object-fit:cover;"/>
                    </button>
                </div>

                <div class="ask_div" >
                    <span  >Are you Sure ?</span>
                </div>
                <div class="img_name">
                    <div class=""  >
                        <div class="pb-3" >
                            <img  :src="item.imageUrl"  class="rounded-circle" style="width:40vw;height:40vw;object-fit:cover;"/>
                        </div>
                        <span class="text-center"  >Redeeem for {{item.name}}?</span>
                    </div>
                </div>
                <div class="buttons"  >
                    <button v-if="!loading" type="button" class=" app-btn-bg-color  "  v-on:click="redeemItem">Yes</button>
                    <button v-if="!loading" type="button" class=" app-btn-cancel-bg-color " data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    <span v-if="loading" >Loading...</span>
                </div>
                <div class="error"  >
                    <span v-if="error" class="text-danger">{{error}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="congratsModalId" data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true" aria-labelledby="modalCongratsTitle" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered  modal-lg">
            <div class="modal-content" id="modalCongrats">
                <div class="modal-header  justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-header  justify-content-center">
                    <h5 class="modal-title " id="modalTitle">Congratulations!</h5>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center text-center" id="congrats-text-content">
                        <span>Your redeemed </span>
                        <span>{{item.name}}.</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-center mb-3">
                    <button class="btn app-btn-bg-color col-sm-12 col-md-6 col-lg-3   rounded-pill" data-bs-dismiss="modal" @click="morePrizes">More Prizes</button>
                </div>
            </div>

            <div class="modal-content modal_extra_small"  >
                <div class="close_btn_div">
                    <button type="button" class="close_btn"   data-bs-dismiss="modal" aria-label="Close" >
                        <img src="../assets/close_btn.png" style="width:8vw;height:8vw;object-fit:cover;"/>
                    </button>
                </div>

                <div class="ask_div" >
                    <span  >Congratulations!</span>
                </div>

                 <div class="img_name">
                    <div class=""  >
                        <span>Your redeemed </span>
                        <span>{{item.name}}.</span>
                    </div>
                </div>

                <div class="buttons" >
                    <button type="button" class="app-btn-bg-color" data-bs-dismiss="modal" @click="morePrizes">More Prizes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 
import * as bs from "bootstrap"
import axios from "axios"
export default {
    name: 'RedeemModal',
    props: {
        id: String,
        congratsModalId: String,
        item : {
            type: Object
        }
    },
    data: function() {
        return {
            loading: false,            
            error: null
        };
    },
    methods: {
        morePrizes(){
            this.$router.push({ name: 'Home' })
        },
        redeemItem(){
            this.loading = true
            axios
            .post("/reward/redeem",{id: this.item._id, versionNo: this.item.__v  })
            .then(response => {
                const instance = bs.Modal.getInstance(document.getElementById("redeemModal") )
                instance.hide();

                var myModal = new bs.Modal(document.getElementById('congratsModal'), {
                    keyboard: false
                })
                myModal.show();
                this.$emit("updateItem",response.data);
            }).catch(error => {
                this.error = error.response.data.message;
            })
            .finally(() => {
                this.loading = false
            });
        },
    }
}
</script>

<style lang="scss" scoped>
@include media(">=desktop") { // desktop - 1024px
    .modal-header {
        border-bottom: white;
    }
    .modal-footer {
        border-top: white;
    }
    #modalTitle {
        font-weight: 900;
        font-size: 30px;
        font-family: Sprint Sans Bold;
    }
    #modalMain{
        width: 685px;
        height: 501px;
    }
    #modalCongrats{
        width: 638px;
        height: 326px;
    }
    #modalCongrats > div.modal-body {
        flex: none;
    }
    #congrats-text-content{
        font-size: 17px;
        font-family: Sprint Sans Regular;
    }
    #item-name{
        font-family: Sprint Sans Regular;
    }

    .modal_extra_small{
        display: none!important;
    }
}

@include media(">480px","<desktop") { // tablet - 768px
    #modalMain {
        display: none!important;
    }
    #modalCongrats {
        display: none!important;
    }
    .modal-dialog{
        margin:none!important
    } 
    .modal_extra_small {
        text-align: center;
        padding-bottom: 10%;

        .close_btn_div {
            text-align: right;
            .close_btn{
                border:1px solid white;
                background-color:white;
                border-start-end-radius: 10%;
                img {
                    width: 4vw!important;
                    height:4vw!important;
                }
            }
        }
        .ask_div{
            font-size:5vw;
            font-family: Sprint Sans Bold;
        }
        .img_name{
            font-size:4vw
        }
        .buttons{
            display: flex;
            padding-top: 5%;
            
            flex-direction: column;
            padding-left: 30%;
            padding-right: 30%;
        
            [type=button] {
                border: 1px solid transparent!important;   
                border-radius: 5em;
                margin-top:2%;
                font-size: 3vw;
                padding-top: 3%;
                padding-bottom: 3%;
            }
        }  
    }

}
 
@include media(">=50px","<=480px") {
    #modalMain {
        display: none!important;
    }
    #modalCongrats {
        display: none!important;
    }
    .modal-dialog{
        margin:2%!important
    }   
    .modal_extra_small {
        text-align: center;
        padding-bottom: 10%;

        .close_btn_div {
            text-align: right;
            .close_btn{
                border:1px solid white;
                background-color:white;
                border-start-end-radius: 10%;
            }
        }
        .ask_div{
            font-size:10vw;
            font-family: Sprint Sans Bold;
        }
        .img_name{
            font-size:6vw
        }
        .buttons{
            display: flex;
            padding-top: 5%;
            
            flex-direction: column;
            padding-left: 20%;
            padding-right: 20%;
        
            [type=button] {
                border: 1px solid transparent!important;   
                border-radius: 5em;
                margin-top:5%;
                font-size: 5vw;
                padding-top: 3%;
                padding-bottom: 3%;
            }
        }  
    }

    
}
</style>