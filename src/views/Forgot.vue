<template>
    <div class="container-fluid ">
        <div class="row py-5 rouned-sm justify-content-center">
            <div class="col-lg-6 py-5" id="register">
                <h1 class="text-center">Forgot Password</h1>
                <div  class="text-start ">
                    <dynamic-form :form="form" @change="valueChanged" />
                </div>
                <!-- btn-sm col-12 col-sm-6 col-lg-6 col-xl-6 mt-5 -->
                <button submit="true" :form="form.id" class="btn rounded-pill btn-outline-secondary btn-sm col-12 col-sm-6 col-lg-6 col-xl-6 mt-5 mb-3">
                    Submit
                </button>
                <div>
                    Don't Have an Account ?
                    <router-link :to="{ name: 'register' }">
                        <label >Create an account</label>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent  } from 'vue';

import {  
  
  EmailField 
} from '@asigloo/vue-dynamic-forms';
 
export default defineComponent({
  name: 'Register',
  setup() {
    const form = computed(() => ({
      id: 'registerForm',
      fields: {
         
        email: EmailField ({
            label: 'Email',
        }),
      },
    }));

    function valueChanged(values) {
      console.log('Values', values);
    }

    return {
      form,
      valueChanged,
    };
  },
});
</script>

<style scoped>
#register{
    background: white
}

</style>