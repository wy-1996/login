import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 通知栏信息
    msg_show:false,

    reduce:false,
    // 点击的图片
    BroadcastListNum:0,
    // 头列表
    BroadcastTab:[],
    // 小列表
    BroadcastList:[],
    // 播单显示，隐藏
    BroadcastTabShow:false,
    // 播放列表
    PlayList:[],
    // 播放列表显示隐藏
    globalActionsListShow:false,
    nowPlay:[{imgSrc:require("../assets/music/musicLogo.png"),singSrc: "天外来物.mp3",fun:'up'},{imgSrc:require("../assets/globalActions/play.png"),fun:'playTo'},{imgSrc:require("../assets/globalActions/close.png"),fun:'close'}],
    type:'首页'
  },
  getters:{
    getReduce(state){
      return state.reduce;
    },
    getBroadcastTab(state){
      return state.BroadcastTab;
    },
    getBroadcastList(state){
      return state.BroadcastList;
    },
    getBroadcastTabShow(state){
      return state.BroadcastTabShow;
    },
    getPlayList(state){
      return state.PlayList;
    },
    getMsg_show(state){
      return state.msg_show;
    }
  },
  mutations: {
    setReduce(state){
      if(state.reduce==true){
        state.reduce=false;
      }else{
        state.reduce=true;
      }
    },
    // 设置为第几张轮播
    setBroadcastListNum(state,temp){
      state.BroadcastListNum = temp.BroadcastListNum
    },
    // 是否显示播单列表
    setBroadcastTabShow(state){
      if(state.BroadcastTabShow == true){
        state.BroadcastTabShow = false;
      }else{
        state.BroadcastTabShow = true;
      }
    },
    setBroadcastTab(state,temp){
      state.BroadcastTab = temp.BroadcastTab
    },
    setBroadcastList(state,temp){
      state.BroadcastList = temp.BroadcastList;
    },
    // 清空小列表
    clearBroadcastList(state){
      state.BroadcastList = [];
    },
    // 添加到播放列表
    addToPlayList(state,temp){
      state.PlayList.push(temp.BroListid);
      // console.log(state.PlayList);
    },
    setMsg_show(state){
      if(state.msg_show==true){
        state.msg_show=false;
      }else{
        state.msg_show=true;
      }
    },
    change_page(state,payload){
      state.type = payload;
      console.log(state.type)
    },
    // 是否显示播放列表
    global_actions_list(state){
      if(state.globalActionsListShow == true){
        state.globalActionsListShow = false;
      }else{
        state.globalActionsListShow = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
