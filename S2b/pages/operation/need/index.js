var app = getApp();
Page({
  data: {
    tabbar: {},
    scrollHeight: '',
    scrollTop:'',
    array: [],
    Status:'',
  },
  onShow:function(){
    wx.showLoading({
      title: '加载中',
    })
  },
  onLoad: function () {
    app.editTabBar();
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url: 'http://mobile.icvip.com/Sale/RequirementInfo/List',
      success:function(res){  
        wx.hideLoading();
        that.setData({
          array:res.data,
        })
      },
      fail:function(){
        that.setData({
          array:[],
        })
      }
    })
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });

  },
  //编辑
  compileTap: function (e) {
    wx.navigateTo({
      url: "../deliver/deliver"
    })
    console.log(e)
  },
  //查看报价
  lookTap: function (e) {
    wx.navigateTo({
      url: "../seeQuotations/seeQuotations"
    })
    console.log(e)
  },
  //上拉加载更多
  lower: function (event) {
    wx.showNavigationBarLoading()
    this.load();
    console.log("upper");
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