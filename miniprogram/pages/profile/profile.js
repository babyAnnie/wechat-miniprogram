// pages/profile/profile.js
// path/to/@vant/weapp/dist/toast/toast
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isToast: false,
    steps: [{
        text: '步骤一',
        desc: '描述信息',
      },
      {
        text: '步骤二',
        desc: '描述信息',
      },
      {
        text: '步骤三',
        desc: '描述信息',
      },
      {
        text: '步骤四',
        desc: '描述信息',
      },
    ],
    imageURL: 'cloud://ddy-4ghz32qe19075aad.6464-ddy-4ghz32qe19075aad-1310896436/gem.png',
    showShare: false,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  },

  onShareClick(event) {
    this.setData({ showShare: true });
  },

  onShareClose() {
    this.setData({ showShare: false });
  },

  onShareSelect(event) {
    wx.showToast({
      title: event.detail.name,
    })
    this.onShareClose();
  },

  onClickIcon() {
    wx.showToast({
      title: '点击图标',
    })
  },

  onClickButton() {
    wx.showToast({
      title: '点击按钮',
    })
  },

  toggleToast() {
    const temp = !this.isToast;
    if (temp) {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
    this.setData({
      isToast: temp
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