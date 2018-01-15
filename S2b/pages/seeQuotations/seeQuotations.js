Page({

  /**
   * 页面的初始数据
   */
  data: {
    seeNumber:'你的编号',
    groupName:'5分',
    brand: '5分',
    cargo: '5分',
    serve: '5分',
    praise: '5分',
    hiddenmodalput: true,
    array: [{
      count: 111
    },
      {
        count: 111
      },
      {
        count: 111
      },
      {
        count: 111
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //生成订单
  creatIntent: function (e) {
    var id = 1;
    wx.navigateTo({
      url: "../crtQuote/crtQuote?id=" + id,
    })
      console.log(e)
  },
  bitn: function (e) { 
      this.setData({
        hiddenmodalput: true
      })
      
  },
  //查看评论
  textEvaluate: function (e) {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      seeNumber: '你的编号',
      groupName: '5分',
      brand: '5分',
      cargo: '5分',
      serve: '5分',
      praise: '5分',
 
    })
  }
})