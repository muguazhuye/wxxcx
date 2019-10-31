//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  
  onLoad: function () {
    console.log(app.globalData.CustomBar,'jj')
  },
  routine:function(){
   wx.navigateTo({
      url:"/pages/routine/routine"
    })
  },
  emhandle:function(){
    wx.navigateTo({
      url: '/pages/emhandle/emhandle',
    })
  }
})
