Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderName: '',
    selectPerson: true,
    firstPerson: '请选择预约方式',
    btnItem: false,
    makeData: '请选择预约时间',
  },
  showitem: function () {

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
  orderSelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      btnItem: false,
    })
  },
  makeDateChange: function (e) {
    this.setData({
      makeData: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    orderName: ''
    console.log(options.userName)
  },

  btnTap: function () {
    console.log(this.data.makeData)
    console.log(this.data.firstPerson)
    wx.switchTab({
      url: '../client/client',
    })
  }
})