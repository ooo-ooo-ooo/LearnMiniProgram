//index.js
//获取应用实例
const app = getApp()

Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      mask: true,
      icon: "loading",
      duration: 3000
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈哈',
      // showCancel: false,
      cancelText: "退出",
      cancelColor: "red",
      success: function(res){
        if(res.cancel){
          console.log("用户点击了取消按钮")
        }
        if(res.confirm){
          console.log("用户点击了确认按钮")
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      // 必须手动hideLoading才会让loading消失
      wx.hideLoading()
    },2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ["相册", "拍照"],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })
  }
})
