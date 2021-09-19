<template>
    <div id="core_display">  
      <div id="items">
        <div id="items-header-name" class="d-flex align-items-center justify-content-center">
          <label id="label">Here is the full list of prizes that you can win.</label>
        </div>

        <div id="content" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <RewardItem v-for="item in items" :key="item._id" v-bind:item="item" />
        </div>
      </div>
    </div>

    <div id="core_display_extra_small">
      <div>Here is the full list of prizes</div>
      <div style="margin-bottom:5%">that you can win.</div>
      <RewardItem v-for="item in items" :key="item._id" v-bind:item="item" />
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
 
<style lang="scss" scoped>
@include media(">=1600px") { // desktop - 1024px
  #core_display {  
    height: 1187px;
  }
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

  #core_display_extra_small{
    display: none !important;
  }

}

@include media(">480px","<1600px") { // tablet - 768px
    #core_display{
      display: block;
    }
    #content {
      padding: 20px 1em 20px 1em;
    }
    #items-header-name{
      padding-top: 20px;
    }
    #core_display_extra_small{
      display: none!important;
    }
}
 
@include media(">=50px","<=480px") {
   #core_display{
      display: none!important;
    }
    #core_display_extra_small{
      display: block;
      text-align: center;
      padding: 3% 0% 3% 0%;
      font-size: 6vw;
    }
}
</style>