Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendNeed1: false,
    sendNeed2: true,
    date: "2017-12-01", //失效日期
    createDate: "2017-12-01",//生成日期
    makeDate: "2017-12-01", //交期
    //value
    material: '',//型号
    brand: '',//品牌
    number1: '',//数量
    price: '', //价格
    smallNumber: '',//最小订单数
    smallNumber1: '',//最小包装数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    if (id == 1) {
      this.setData({
        sendNeed1: false,
        sendNeed2: true,
      })
    } else {
      this.setData({
        sendNeed1: true,
        sendNeed2: false,
        date: "2017-12-03", //失效日期
        createDate: "2017-12-04",//生成日期
        makeDate: "2017-12-05", //交期
        //value
        material: '111',//型号
        brand: '222',//品牌
        number1: '333',//数量
        price: '444', //价格
        smallNumber: '555',//最小订单数
        smallNumber1: '666',//最小包装数
      })
    }

  },
  createDateChange: function (e) {
    this.setData({
      createDate: e.detail.value
    })
  },
  makeDateChange: function (e) {
    this.setData({
      makeDate: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value

    })
  },
  //id=1 发需求  id=2 保存
  formSubmit: function (e) {
    var that = this;
    if (e.detail.target.id == 1) {
      //phoneInput1
      console.log(e)
      console.log(e.detail.value.data0)
      console.log(e.detail.value.data1)
      console.log(e.detail.value.data2)
      console.log(e.detail.value.phoneInput1)
      console.log(e.detail.value.phoneInput2)
      console.log(e.detail.value.phoneInput3)
      console.log(e.detail.value.phoneInput4)
      console.log(e.detail.value.phoneInput5)
      console.log(e.detail.value.phoneInput6)
      wx.showModal({
        title: '提示',
        content: '是否发送需求?',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      console.log(e)
    }
    // wx.switchTab({
    //   url: '../need/index',
    // })
  }
})