// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello WeChat miniprogram!',
    arr: [
      "a", 'b', 'c', 'd'
    ],
    list: [{
        name: 'marry',
        age: 28
      },
      {
        name: 'jerry',
        age: 3
      },
      {
        name: 'david',
        age: 20
      }
    ],
    isLogin: true,
    count: 1,
  },


  onTapHandler: function (e) {
    console.log(e);
    this.setData({
      count: this.data.count + 1
    })
  },

  // 页面跳转
  handleJump: function () {
    this.pageRouter.navigateTo({
      url: "../profile/profile"
    })
    // wx.navigateTo({
    //   url: '../profile/profile',
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})