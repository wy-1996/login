<template>
  <div class="my-body">
    <div class="my-body-main" :class="myBodyMainMargin">
      <div class="home" v-if="this.$store.state.type == '首页'">
        <v-banner></v-banner>
        <v-real-time></v-real-time>
        <v-broadcast></v-broadcast>
        <v-special-small></v-special-small>
      </div>
      <div class="abc" v-else-if="this.$store.state.type == '资讯'">
        <v-refer></v-refer>
      </div>
      <div class="setting" v-else-if="this.$store.state.type == '文章'">
        <v-article></v-article>
      </div>
      <div class="broadcast" v-else-if="this.$store.state.type == '播单'">
        <v-broadcast-list></v-broadcast-list>
      </div>
      <div class="setting" v-else-if="this.$store.state.type == '话题'">
        <!-- <v-setting></v-setting> -->
      </div>
      <div class="setting" v-else-if="this.$store.state.type == '专题'">
        <v-special></v-special>
      </div>
      <div class="unfinsh" v-else>
        页面正在开发<br>
        敬请期待
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vFooter from './demo/footer'
import vSpecialSmall from './demo/specialSmall'
import vBanner from './demo/MainBanner'
import vRealTime from './demo/RealTime'
import vBroadcast from './Broadcast'
import vBroadcastList from './BroadcastList'
import vRefer from './demo/Refer'
import vSetting from './demo/setting'
import vSpecial from './demo/Special'
import vArticle from './demo/Article'

export default {
  name:"v-dhd",
  data(){
    return{
      a:sessionStorage.getItem('root'),
      myBodyMainMargin:{
        my_body_main_max:true,
        my_body_main_min:false,
        
      },
    }
  },
  computed: {
    reduce: function(){
      // console.log(this.$store.state.reduce);
      return this.$store.state.reduce;
    },
  },
  watch: {
    reduce(val){
      if(this.$store.state.reduce==true) {
        // console.log(1);
        this.myBodyMainMargin.my_body_main_max=false;
        this.myBodyMainMargin.my_body_main_min=true;
      }
      else{
        // console.log(2);
        this.myBodyMainMargin.my_body_main_max=true;
        this.myBodyMainMargin.my_body_main_min=false;
      }
    },
  },
  components:{
    vFooter,
    vSpecialSmall,
    vBroadcast,
    vBanner,
    vRealTime,
    vBroadcastList,
    vRefer,
    vSetting,
    vSpecial,
    vArticle
  }
}
</script>

<style>
  /* body css */
  .my-body{
    width: 100%;
    display: flex;
  }
  .my-body-main{
    flex: auto;
    transition: 0.5s linear;
  }
  .my_body_main_max{
    margin-left: 2.3rem;
    overflow: hidden;
  }
  .my_body_main_min{
    margin-left: 0.8rem;
    overflow: hidden;
  }
  .unfinsh{
    font-family: "楷书";
    margin-top: 0.4rem;
    text-align: center;
  }
</style>