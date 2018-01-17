// 客户
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    scrollHeight: '',
    scrollTop: '',
    queryClude: '',//查询框
    array: [],
    openClient: false,
    isShow:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar();
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var a = 0;
    if (a == 1) {
      that.setData({
        openClient: true
      })
    }
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url:  'http://mobile.icvip.com/Sale/Customer/GetCustomer',
      success:function(res){
         wx.hideLoading()
        console.log(res)
        that.setData({
          array:res.data
        })
      },
      fail: function (res){
        console.log(res)
        that.setData({
          isShow:true,
        })
      } 
    })
    
  },

  //发需求
  sendNeed: function (e) {
    var id = '1';
    wx.navigateTo({
      url: "../deliver/deliver?id=" + id
    })
    console.log(e)
  },
  //预约拜访
  order: function () {
    var userName = this.data.array.CustomerID
    wx.navigateTo({
      url: "../order/order?userName" + userName
    })
    console.log(userName)
  },
  //查看详情   
  details: function () {
    wx.navigateTo({
      url: "../clientDetails/clientDetails"
    })
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
  closed: function () {
    wx.navigateTo({
      url: "../login/login"
    })
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
  put_in: function (e) {
    console.log(e)
    this.setData({
      'queryClude': e.detail.value
    })
  },
  c_need: function () {
    var cool = this.data.queryClude;
    if (cool!=''){
      wx.navigateTo({
        url: '../query/query?cool=' + cool,
      })
    }
  }
})