<template>
    <div class="modal fade" :id="id" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" aria-labelledby="modalTitle" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header  justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" v-if="!loading"></button>
                </div>

                <div class="modal-header  justify-content-center">
                    <h5 class="modal-title " id="modalTitle">Are you Sure ?</h5>
                </div>
                <div class="modal-body mb-3">
                    <div class="row justify-content-center ">
                        <div class="col-sm-12 col-md-6 col-lg-4" >
                            <img  :src="item.imageUrl" class="img-fluid rounded-circle" width="200" height="200"/>
                        </div>
                        <span class="col-sm-12 ">Redeeem for {{item.name}}</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-center row">
                    <button v-if="!loading" class="btn col-sm-12 col-md-3 col-lg-3 rounded-pill btn-outline-secondary"  v-on:click="redeemItem">Yes</button>
                    <button v-if="!loading" type="button" class="btn col-sm-12 col-md-3 col-lg-3   rounded-pill app-btn-cancel-bg-color" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    <span v-if="loading">Loading...</span>
                </div>
                <div class="modal-footer justify-content-center  mb-3">
                    <span v-if="error" class="text-danger">{{error}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="congratsModalId" data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true" aria-labelledby="modalCongratsTitle" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header  justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-header  justify-content-center">
                    <h5 class="modal-title " id="modalTitle">Congratulations!</h5>
                </div>
                <div class="modal-body mb-3">
                    <div class="row justify-content-center">
                        <span>Your redeemed {{item.name}}.</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-center mb-3">
                    <button class="btn btn-outline-secondary col-sm-12 col-md-6 col-lg-6   rounded-pill" data-bs-dismiss="modal" @click="morePrizes">More Prizes</button>
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

<style scoped>
.modal-header {
    border-bottom: white;
}
.modal-footer {
    border-top: white;
}
#modalTitle {
    font-weight: 900;
    font-size: 25px;
}

#modalCongratsTitle {

}
</style>