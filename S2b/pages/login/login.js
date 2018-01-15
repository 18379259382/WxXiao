let app = getApp();
var Util = require('../../utils/util.js')
Page({
  data: {
    selectPerson: true,
    btnItem: false,
    firstPerson: '请选择角色',
    loading: false,
    inputValue: "",
    itme: true,
    imageUrl: "../../images/icon_open.png",
    focus: false,
    btnDisabled: true,
    getCodeBtnProperty: {
      titileColor: '#B4B4B4',
      disabled: true,
      loading: false,
      title: '获取验证码'
    },
    userRegister: {
      mobile: '',//电话
      reg_verify: '',//验证码 
    },
  },


  nameInput: function (e) {  //手机号输入
    let that = this;
    var inputValue = e.detail.value;
    let length = e.detail.value.length;
    if ((/^1[34578]\d{9}$/.test(inputValue))) {
      that.setData({
        'userRegister.mobile': inputValue,//手机号
        'getCodeBtnProperty.titileColor': '#9ED99D',
        'getCodeBtnProperty.disabled': false
      })
    } else {
      that.setData({
        'userRegister.mobile': '',
        'getCodeBtnProperty.titileColor': '#B4B4B4',
        'getCodeBtnProperty.disabled': true
      })
    }
  },


  //获取验证码
  getCodeAct: function (res) {
    var that = this;
    var count = 60;
    var si = setInterval(function () {
      if (count > 0) {
        count--;
        that.setData({
          'getCodeBtnProperty.disabled': true,
          'getCodeBtnProperty.title': '倒计时' + count + ' s',
        });
      } else {
        that.setData({
          'getCodeBtnProperty.disabled': false,
          'getCodeBtnProperty.title': "获取验证码"
        });
        count = 60;
        clearInterval(si);
      }


    }, 1000);
    wx.showLoading({
      title: '获取中...',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    wx.request({
      url: 'http://mobile.icvip.com/Account/AccountInfo/GetPhoneCode?phonenumbers=' + this.data.userRegister.mobile,
      success: function (e) {
        console.log(e)
        if (e.data.State == 1) {
          wx.showToast({
            title: '获取成功',
          })
        } else {
          wx.showToast({
            title: '获取失败',
            image: '../../images/icon_x.png'
          })
        }
      },
      fail: function () {
        wx.showToast({
          title: '获取失败',
          image: '../../images/icon_x.png'
        })
      }
    })
  },


  codeInput: function (e) {   //验证码输入
    let that = this;
    let inputValue = e.detail.value;
    let length = e.detail.value.length;
    if (length >= 6) {
      that.setData({
        'userRegister.reg_verify': inputValue,//验证码
        btnDisabled: false
      })
    } else {
      that.setData({
        'userRegister.reg_verify': '',
        btnDisabled: true
      })
    }
  },
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        btnItem: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        btnItem: false,
        selectPerson: true,
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      btnItem: false,
    })
  },
  bindButtonTap: function () { //绑定按钮
    var Person = this.data.firstPerson;
    if (Person == '请选择角色') {
      wx.showToast({
        title: '请选择角色',
        image: '../../images/icon_g.png'
      })
    } else {
      //网络请求绑定电话
      wx.setStorage({
        key: 'xunjie',
        data: '111',
      })
      wx.switchTab({
        url: '../home/home'
      });
    }
    console.log(this.data.userRegister.mobile)
    console.log(this.data.userRegister.reg_verify)
    console.log(this.data.firstPerson)

  },


})
