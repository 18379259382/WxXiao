
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.engineerTabBar();
    var  that=this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }),
      wx.login({
        success: function (res) {
          that.setData({
            'code': res.code
          })
          console.log(res.code)
          //发送网络请求,获取有没有绑定过
        },
        fail: function (e) {
          wx.showToast({
            title: '请重新登录',
          })
        }
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