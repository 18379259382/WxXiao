//app.js
App({

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        },
        fail: function () {
          wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法正常使用。请10分钟后再次点击授权，或者删除小程序重新进入。',
            success: function (res) {
              if (res.confirm) {

              }
            }
          })
        }
      })
    }
  },
  editTabBar: function () {
    var tabbar = this.globalData.tabbar,
      currentPages = getCurrentPages(),
      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    opp: '',
    userInfo: null,
    tabbar: {
      color: "#C2C2C4",
      selectedColor: "#01BBD2",
      backgroundColor: "#ffffff",
      borderStyle: "#C2C2C4",
      list: [
        {
          pagePath: "/pages/home/home",
          text: "首页",
          iconPath: "/images/icon_home.png",
          selectedIconPath: "/images/icon_unhome.png",
          selected: true
        },
        {
          pagePath: "/pages/client/client",
          text: "客户",
          iconPath: "/images/icon_intent_home.png",
          selectedIconPath: "/images/icon_intent_unhome.png",
          selected: false
        },
        {
          pagePath: "/pages/need/index",
          text: "需求",
          iconPath: "/images/icon_user_need.png",
          selectedIconPath: "/images/icon_user_unneed.png",
          selected: false
        },
        {
          pagePath: "/pages/intent/intent",
          text: "订单",
          iconPath: "/images/icon_intent.png",
          selectedIconPath: "/images/icon_unitnet.png",
          selected: false
        }
      ],
      position: "bottom"
    }
  }
})
