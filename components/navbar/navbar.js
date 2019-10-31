// components/navbar/navbar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleMsg: {
      type: String,//类型
      value: 'default value'//默认值
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },

  /**
   * 组件的方法列表
   */
  methods: {
    BackUp:function(){
      var pages = getCurrentPages();
      console.log(pages)
      wx.navigateBack({
        delta: pages.length - 2
      })
    }
  }
})
