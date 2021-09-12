<template>
    <div class="container" >
        <header class="">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-8 col-lg-8" >
                    <div class="row">
                        <router-link :to="{ name: 'Home' }" style="text-decoration:none;">
                            <div class="fs-2 mb-3 text-white d-flex justify-content-start">
                                <img src="../assets/logo-2.png" width="50" height="50" class=" mt-1  me-2"/>
                                AG Company
                            </div>
                         </router-link>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="row">
                        <div class="fs-2 mb-3 text-white d-flex justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle  mt-2 me-2" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                            </svg>
                            John Smith
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </div>
</template>

<style scoped>
#logo {
    background-image: linear-gradient(to bottom, rgba(121, 100, 90, 0.52), rgba(100, 0, 14, 0.4)),url('../assets/logo.jpeg');
    width: 100px;
    height: 100px;
    background-size: cover;
    /* padding: 20px; */
}
 
</style>