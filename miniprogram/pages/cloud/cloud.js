// pages/cloud/cloud.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },

  // 插入
  insert: function () {
    db.collection('user').add({
      data: {
        name: 'jack',
        age: 18
      },
      success: res => console.log(res),
      fail: err => console.log("err", err)
    })
  },

  // 更新
  update: function () {
    db.collection('user').doc('6d85a2b962709b3e015fa68a529af8d5')
      .update({
        data: {
          age: 100
        }
      }).then(res => console.log(res))
      .catch(err => console.log("err", err))
  },

  // 查找
  search: function () {
    // db.collection('user').doc('6d85a2b962709b3e015fa68a529af8d5').get()
    //   .then(res => console.log(res))
    //   .catch(err => console.log("err",err))
    db.collection('user').where({
        name: 'marry'
      }).get().then(res => console.log(res))
      .catch(err => console.log("err", err))
  },

  // 删除
  delete: function () {
    db.collection('image').doc('b69f67c06270d26f00f3ddc011f49c69')
      .remove()
      .then(res => console.log(res))
      .catch(err => console.log("err", err))
  },


  // 调用云函数sum
  cloudSum: function () {
    wx.cloud.callFunction({
        name: 'sum',
        data: {
          a: 1,
          b: 3
        }
      }).then(res => console.log(res))
      .catch(err => console.log("err", err))
  },


  // 获取当前用户openID
  getOpenID: function () {
    wx.cloud.callFunction({
        name: 'login'
      }).then(res => console.log(res))
      .catch(err => console.log("err", err))
  },


  // 批量删除数据
  cloudBatchDelete: function () {
    wx.cloud.callFunction({
        name: 'batchDelete',
        data: {
          name: 'jack'
        }
      }).then(res => console.log(res))
      .catch(err => console.log("err", err))
  },


  upload: function () {
    wx.chooseImage({
      //上传图片数量
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log('res', res);
        const tempFilePaths = res.tempFilePaths;
        console.log('tempFilePaths', tempFilePaths);
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + '.png',
          filePath: tempFilePaths[0],
          success: res => {
            console.log(res.fileID);
            db.collection('image').add({
                data: {
                  fileID: res.fileID
                }
              }).then(res => console.log(res))
              .catch(err => console.log(err))
          }
        })
      }
    })
  },


  // 文件展示
  getFile: function () {
    db.collection('image').get().then(res => {
        console.log(res);
        this.setData({
          images: res.data
        })
      })
      .catch(err => console.log(err))
  },


  // 文件下载
  downloadFile: function (event) {
    wx.cloud.downloadFile({
      // 文件ID
      fileID: event.target.dataset.fileid,
      success: res => {
        // 保存图片到手机相册
        wx.saveImageToPhotosAlbum({
          // 临时文件路径 res.tempFilePath
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      },
      fail: err => console.log(err)
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