Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  upper: function () {
    
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("我是");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
  },
})