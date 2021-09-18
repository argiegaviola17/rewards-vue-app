<template>
    <div id="header" class="d-flex row mx-0 ps-3" >
        <div id="logo_div" class="d-flex justify-content-start align-items-center col-6 col-md-6">
            <router-link :to="{ name: 'Home' }" style="text-decoration:none;color:black">
                <img alt="APP logo" src="../assets/app-logo.png" height="48" id="app_logo">
                &nbsp;&nbsp;
                <label id="company_name">AG Company</label>
            </router-link>
            
        </div>
 
        <div id="name_div" class="d-flex justify-content-end col-12 col-md-6 pe-5" >
            <div class="rounded-circle align-self-center" style="width:46px;height:46px;" >
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <span id="name" style="margin-left:10px;" class="py-4">Argie Gaviola</span>
        </div>
    </div>

    <div class="header_extra_small" >
        <!-- <div>
            <span id="name" >Argie Gaviola</span>
        </div> -->
        <div class="logo_extra_small">
            <img alt="APP logo" src="../assets/app-logo.png" style="width:100%;height:auto ">
        </div>
        
        <div class="user_extra_small">
            <svg xmlns="http://www.w3.org/2000/svg" style="padding-right:2%" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <label >Argie Gaviola</label>         
        </div>
    </div>
</template>


<style lang="scss" scoped>


@include media(">=desktop") {
    #header {
        height: 81px;
    }
    #name {
        font-size: 13px;
        letter-spacing: 0.3px;
        font-family: Sprint Sans Medium;
    }
    #name_div_mobile {
        display: none !important;;
    }
    #header{
        background-color: white;
    }
    #company_name {
        font-size: 30px;
        font-weight: normal;
    }

    .header_extra_small{
        display: none;
    }
}
@include media(">=phone","<=tablet") {    
    .header_extra_small{
        display: none;
    }
}

@include media(">=240px","<phone") {
    .header_extra_small{
        display: none;
    }
}

@include media(">=50px","<240px") {
    #header{
        display: none!important;
    }
    .header_extra_small{
        background-color: white;
    }  
    .header_extra_small > .logo_extra_small{
        padding-left: 33.33%;
        padding-right: 33.33%;
    }
    .header_extra_small > .user_extra_small{
        background-color: black;
        color: white;
        opacity: 4;
        font-family: Sprint Sans Regular;
        font-size: 10vw;
        padding-left: 5%;        
    }    
}

@include media(">=50px","<119px") {
    .user_extra_small > svg {
        display: none!important;
    }
}
</style>