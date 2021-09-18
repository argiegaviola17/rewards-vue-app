<template>
    <div id="core-display">  
      <div id="items">
        <div id="items-header-name" class="d-flex align-items-center justify-content-center">
          <label id="label">Here is the full list of prizes that you can win.</label>
        </div>

        <div id="content" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <RewardItem v-for="item in items" :key="item._id" v-bind:item="item" />
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
  height: 150px;
}
#content {
  padding: 0px 78px 0px 78px;
}
#label{
  font-family: Sprint Sans Regular;
  letter-spacing: 0.5px;
  margin-left: -16px;
  font-size:20px;
}
#core-display {  
  height: 1187px;
}
</style>

<style scoped lang="scss">


</style>
