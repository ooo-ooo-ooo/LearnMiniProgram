//index.js
//获取应用实例
// getApp()获取App()产生的示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;

Page({
  // ------------- 2.初始化数据 ---------------------------
  data: {
   
  },
  // ----------- 1.监听页面的生命周期函数 ---------------
  // 页面被加载出来
  onLoad(){
    // console.log("onLoad")
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   箭头函数中的this一层层向上找
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
  },
  // 页面显示出来时
  onShow() {
    console.log("onShow")
  },
  // 页面初次渲染时
  onReady(){
    console.log("onReady")
  },
  // 页面隐藏起来时
  onHide(){
    console.log("onHide")
  },
  onUnload(){
    console.log("onUnload")
  },

  // ------------- 3. 监听wxml中相关的一些事件 --------------
  handleGetUserInfo(event) {
    console.log(event);
  },

  // ------------- 4. 监听其他事件 --------------
  // 监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log("页面滚动到底部")
  },
  // 下拉刷新事件
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
})
