var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    scrollHeight: '',
    scrollTop: '',
    array: [
      {
        Status: 1,
        CustomerCName: "99999",
        CustomerEName: "1111"
      },
      {
        Status: 1,
        CustomerCName: "99999",
        CustomerEName: "1111"
      },
      {
        Status: 1,
        CustomerCName: "99999",
        CustomerEName: "1111"
      },
      {
        Status: 1,
        CustomerCName: "99999",
        CustomerEName: "1111"
      },
      {
        Status: 1,
        CustomerCName: "99999",
        CustomerEName: "1111"
      },
      

    ]
  },
  onLoad: function () {
    app.editTabBar();
    var that = this;
    console.log("Intent" + app.globalData.opp)
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  //详情
  bit: function (e) {
    wx.navigateTo({
      url: "../intentDetails/intentDetails"
    })
    console.log(e)
  },
  order: function (e) {
    wx.navigateTo({
      url: "../crtQuote/crtQuote"
    })
    console.log(e)
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
  },
  //上拉加载更多
  lower: function (event) {
    wx.showNavigationBarLoading()
    this.load();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  load: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000
    });

  },
})