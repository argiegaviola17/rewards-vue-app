<template>  
    <div id="items">
      <span id="items-header-name">Here is the full list of prizes that you can win.</span>
      <div class="py-5">
        <div class="container">
          <!-- row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 -->
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">     
            <RewardItem v-for="item in items" :key="item._id" v-bind:item="item" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RewardItem from '@/components/RewardItem.vue'
import axios from "axios"
export default {
  components:{
    RewardItem
  },
  data: function() {
    return {
      items: []
    };
  },
  methods:{
    fetchData(){
      axios
      .get("/reward/all")
      .then(response => {
        this.items = response.data
      })
    }
  },
  mounted(){
    this.fetchData();
  }
}
</script>

<style scoped>

#items-header-name {
  font-size:25px;
  color: white
}

</style>
