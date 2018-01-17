var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    code: '',//给服务器的
    animationData: {},
    tabbar: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar();
    var that = this
    //监听有没有绑定
    wx.getStorage({
      key: 'xunjie',
      success: function (res) {
        app.globalData.opp = res.data
        console.log("home" + app.globalData.opp)
      },
      fail: function (e) {
        wx.redirectTo({
          url: '../login/login',
        })
      }
    })

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
  onShow: function () {

  },
//  转发
  onShareAppMessage:function(){
    return {
      title: '微信小程序联盟',
      path: '/home/home'
    }
  }

})