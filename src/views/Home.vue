<template>  
    <div id="items">
      <div class="pt-5">
        <span id="items-header-name">Here is the full list of prizes that you can win.</span>
      </div>
      <div class="py-5">
        <div class="container">
          <!-- row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 -->
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">     
            <RewardItem v-for="item in items" :key="item._id" v-bind:item="item" />
          </div>

          <div class="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3 pt-5" v-if="hasNext === 'Y'">
            <button class="btn rounded-pill app-btn-bg-color btn-md col-lg-6 col-xl-6 col-sm-12 text-white"  @click="loadMore">Load more
            </button>
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
      items: [],
      pageNumber: 1,
      count: 6,
      api: '/reward/all',
      hasNext: "N"
    };
  },
  methods:{
    fetchData(){
      axios
      .get(`${this.api}?pageNumber=${this.pageNumber}&count=${this.count}`)
      .then(response => {
        this.items = this.items.concat(response.data.items);
        this.hasNext = response.data.hasNext;
        if(this.hasNext === "Y"){
          this.pageNumber =  this.pageNumber + 1;
        }
      })
    },
    loadMore(){
      this.fetchData();
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
  color: white;
  font-weight: bold;
}

</style>
