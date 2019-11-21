App({
  // 生命周期
  // 小程序初始化完成时，会执行的生命周期（全局只触发一次）
  onLaunch: function () {
    // console.log('小程序初始化完成：onLaunch')
    // 获取用户信息(异步调用)
    // wx.getUserInfo({
    //   // 数据拿到之后，再进行回调
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  },

  //  小程序显示出来时
  onShow: function (options) {
    // console.log('界面显示出来：onShow')
    // console.log(options);
    // 1.判断小程序的进入场景
    // switch(options.scene){
    //   case 1001:
    //     break;
    //   case 1005:
    //     break;
    // }


    // 2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res);
    //   }
    // })  
  },

  //  小程序隐藏时
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide')
  },

  // 小程序产生一些错误时
  onError: function (msg) {
    console.log('小程序中发生了一些错误时会执行：onError')
  },
  globalData: {
    name: "coderwhy",
    age: 18
  }
})
