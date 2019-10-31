// pages/routine/routine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleMsg: '日常巡更',//头部标题信息
    calFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  calFlag:function(){
    let that = this;
    that.setData({
      calFlag: !that.data.calFlag,
    })
  },
  rouscan:function(){
    wx.navigateTo({
      url: '/pages/scan/scan',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})