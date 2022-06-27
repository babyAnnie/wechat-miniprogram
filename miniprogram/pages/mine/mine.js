// pages/mine/mine.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    username: '',
    age: 0,
  },

  onChange(e) {
    console.log('e', e);
    this.setData({
      username: e.detail
    })
    wx.setStorage({
      key: "username",
      data: e.detail
    })
  },

  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail;
    this.setData({
      avatarUrl,
    })
    wx.setStorage({
      key: "avatarUrl",
      data: avatarUrl
    })
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
    const _this = this;
    wx.getStorage({
      key: "avatarUrl",
      success(res) {
        console.log(res)
        _this.setData({
          avatarUrl: res.data
        })
      }
    })
    wx.getStorage({
      key: "username",
      success(res) {
        console.log(res)
        _this.setData({
          username: res.data
        })
      }
    })
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