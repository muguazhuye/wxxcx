// pages/wxempower/wxempower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleMsg:'绑定账号',//头部标题信息
    showBoxFlag:true,//模态提示框
    showToast:false,
    workId:'',//工号
    passWord:'',//密码
    yzNumber:10,//允许验证的次数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  closeDailog:function(){
    let that =this;
    that.setData({
      showBoxFlag: false
    })
  },
  formSubmit: function (e) {
    console.log(e,'oooo')
    console.log(e.detail.value.workId != 'admin', 'lp')
    if (e.detail.value.workId != 'admin'){
      console.log('ss')
      this.setData({
        showToast: true
      })
      setTimeout(()=>{
        this.setData({
          showToast: false
        })
      }, 1000);
      return
    }else if (e.detail.value.passWord != 'admin') {
      this.setData({
        showToast: true
      })
      setTimeout(() => {
        this.setData({
          showToast: false
        })
      }, 1000);
      return

    }
    console.log('aa')
    wx.switchTab({
      url: '/pages/index/index',
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