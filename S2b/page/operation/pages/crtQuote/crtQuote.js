var app = getApp();
Page({
  data: {
    isHiddenTop: true,
    isHidden: false,
    makeData: '2017-12-01',
    courseNamelist: [],
    brandNamelist: [],
    priceNamelist: [],
    sellNamelist: [],
    numberNamelist: [],
    dateNamelist: [],
    list: [{}],
    red: [],
  },
  //编辑 2 //生成 1
  onLoad: function (options) {
    var id = options.id;
    console.log(id)
    if (id == 1) {
      this.setData({
        isHiddenTop: false,
        isHidden: true,
      })
    } else {
      this.setData({
        isHiddenTop: true,
        isHidden: false,
      })
    }
  },
  //交期
  makeDateChange: function (e) {
    this.setData({
      makeData: e.detail.value
    })
  },
  //提交
  formSubmit: function (e) {
    var that = this;
    console.log(e)
    if (e.detail.target.dataset.id == 1) {
      that.getNumber(e);
    } else {//编辑
    }
    wx.switchTab({
      url: '../intent/intent',
    })
  },
  //添加表单
  addSurface: function () {
    var cb = this.data.list;
    cb.push(this.data.list.length);
    this.setData({
      list: cb
    });
  },
  texTarea:function(){
    
  },
  getNumber: function (e) {
    //表一
    console.log(e)
    var that = this;
    if (that.data.red.length > 0) {
      that.setData({
        'red': []
      })
    }
    that.data.red.length = that.data.list.length
    console.log(that.data.courseNamelist);

    for (let i = 0; i < that.data.list.length; i++) {
      var need = new Object();
      need.courseName = that.data.courseNamelist[i];
      need.brandNamelist = that.data.brandNamelist[i];
      need.priceNamelist = that.data.priceNamelist[i];
      need.sellNamelist = that.data.sellNamelist[i];
      need.numberNamelist = that.data.numberNamelist[i];
      need.dateNamelist = that.data.dateNamelist[i];
      that.data.red.push(need)
    }
    console.log(that.data.red);
  },
  //物料名称
  courseName: function (e) {
    this.data.courseNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.courseNamelist[id] = id;
    this.data.courseNamelist[id] = e.detail.value;

  },
  //品牌
  brandName: function (e) {
    this.data.brandNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.brandNamelist[id] = id;
    this.data.brandNamelist[id] = e.detail.value;
  },
  //采购单价
  priceName: function (e) {
    this.data.priceNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.priceNamelist[id] = id;
    this.data.priceNamelist[id] = e.detail.value;

  },
  //销售单价
  sellName: function (e) {
    this.data.sellNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.sellNamelist[id] = id;
    this.data.sellNamelist[id] = e.detail.value;

  },
  //销售数量
  numberName: function (e) {
    this.data.numberNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.numberNamelist[id] = id;
    this.data.numberNamelist[id] = e.detail.value;

  },
  //生产日期
  dateName: function (e) {
    this.data.dateNamelist.length = this.data.list.length;
    let id = e.currentTarget.dataset.id;
    this.data.dateNamelist[id] = id;
    this.data.dateNamelist[id] = e.detail.value;
  },
})