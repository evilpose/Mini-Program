// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'',
    swiperList:[
      { 'imgSrc': '../../icon/test1.jpg' },
      { 'imgSrc': '../../icon/test2.jpg' }
    ],
    identity:'家长',    // 身份
    ParentOrder:{
      'state':'0',     //默认我0 为空
      'order':'',
      'subject':{
        'type':'小学',
        'sub':''
      },
      'university':{
        'name':'',
        'abbreviation':''
      },
      'gender':''
    },
    order:[
      '综合排序','最新发布'
    ],
    subject:{
      '小学': ['小学数学', '小学英语', '小学语文'],
      '初中': ['初中数学', '初中英语', '初中语文', '初中物理', '初中生物', '初中化学', '初中政治', '初中历史', '初中地理'],
      '高中': ['高中数学', '高中英语', '高中语文', '高中物理', '高中生物', '高中化学', '高中政治', '高中历史', '高中地理'],
      '语言': ['日语', '英语', '西班牙语', '德语', '雅思', '托福', '法语', '韩语', '意大利语'],
      '音乐': ['小提琴', '钢琴', '电子其', '长笛', '琵琶', '手风琴', '古筝', '视唱练耳', '大号', '声乐', '萨克斯', '单簧管', '吉他', '小号', '古琴', '二胡', '大提琴', '打击乐', '圆号', '中提琴', '竹笛', '架子鼓', '舞蹈', '扬琴'],
      '编程': ['Python', 'Java', 'Php', '前端', 'Go', 'C', 'C++', 'C#'],
      '其他': ['羽毛球', '跆拳道', '游泳', '乒乓球', '网球', '美术', '书法', '卡通画', '中国象棋', '高等数学', '国际象棋', '中国画', '围棋', '素描', '油画', '篮球', '水彩', '漫画', '空手道']
    },
    university:[
      { 'name': '全部', 'abbreviation': '全部' },
      { 'name': '中国海洋大学', 'abbreviation': '海大' },
      { 'name': '中国石油大学', 'abbreviation': '中石油'},
      { 'name': '青岛大学', 'abbreviation': '青大' },
      { 'name': '青岛理工大学', 'abbreviation': '青理工' },
      { 'name': '青岛科技大学', 'abbreviation': '青科' },
      { 'name': '山东科技大学', 'abbreviation': '山科' },
      { 'name': '山东大学', 'abbreviation': '山大' },
    ],
    gender:[
      '男女不限','只要女生','只要男生'
    ],
    TeacherOrder: {
      'state': '0',     //默认我0 为空
      'order': '',
      'subject': {
        'type': '小学',
        'sub': ''
      },
      'region': '',
      'gender': ''
    },
    TOrder: [
      '综合排序', '最新发布','距离远近','价格高低'
    ],
    region:[
      '全部', '市南区', '市北区', '黄岛区', '崂山区', '李沧区', '城阳区', '即墨区', '胶州市', '平度市', '莱西市'
    ],
    testData: [
      {
        "img": "hadfadfadfadf",
        "name": "王五",
        "sex": "男",
        "grade": "本科大二学生",
        "school": "中国石油大学",
        "major": "管理科学与工程类",
        "subject": [
          "小学数学",
          "初中物理"
        ]
      },
      {
        "img": "hadfadfadfadf",
        "name": "张三",
        "sex": "女",
        "grade": "本科大二学生",
        "school": "中国石油大学",
        "major": "管理科学与工程类",
        "subject": [
          "小学数学",
          "初中物理"
        ]
      },
      {
        "img": "hadfadfadfadf",
        "name": "张三",
        "sex": "女",
        "grade": "本科大二学生",
        "school": "中国石油大学",
        "major": "管理科学与工程类",
        "subject": [
          "小学数学",
          "初中物理"
        ]
      }
    ]
  },

  // 切换老师页面
  selectTecher(){
    this.setData({
      identity:'老师'
    })
  },

  // 切换成家长页面
  selectParent(){
    this.setData({
      identity: '家长'
    })
  },

  // 家长的页面切换选项
  ParentSelec(e){
    let i = 'state'
    if (e.currentTarget.dataset.id == this.data.ParentOrder.state){
      this.setData({
        [`ParentOrder.${i}`]: '0'
      })
    } else{
      this.setData({
        [`ParentOrder.${i}`]: e.currentTarget.dataset.id
      })
    }
    // console.log(this.data.ParentOrder.state)
  },

  // 家长的页面排序选项
  ParentSelecOrder(e){
    let i = 'order'
    this.setData({
      [`ParentOrder.${i}`]: e.currentTarget.dataset.order
    })
    // console.log(this.data.ParentOrder.order)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`ParentOrder.${j}`]: '0'
    })
  },

  //家长选着科目的种类
  selectType(e){
    // console.log(e)
    let i = 'subject.type'
    this.setData({
      [`ParentOrder.${i}`]: e.currentTarget.dataset.item
    })
    // console.log(this.data.ParentOrder.subject.type)
  },
  
  // 家长选择科目
  selectSub(e){
    // console.log(e)
    let i = 'subject.sub'
    this.setData({
      [`ParentOrder.${i}`]: e.currentTarget.dataset.item
    })
    // console.log(this.data.ParentOrder.subject.sub)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`ParentOrder.${j}`]: '0'
    })
  },

  // 家长选择大学
  selectUniversity(e){
    // console.log(e)
    let i = 'university.abbreviation'
    let k = 'university.name'
    this.setData({
      [`ParentOrder.${i}`]: e.currentTarget.dataset.abbreviation,
      [`ParentOrder.${k}`]: e.currentTarget.dataset.name
    })
    // console.log(this.data.ParentOrder.university)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`ParentOrder.${j}`]: '0'
    })
  },

  //家长选择老师的性别
  ParentSelecGender(e){
    let i = 'gender'
    this.setData({
      [`ParentOrder.${i}`]: e.currentTarget.dataset.gender
    })
    // console.log(this.data.ParentOrder.gender)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`ParentOrder.${j}`]: '0'
    })
  },

  //老师选项切换
  TeacherSelec(e){
    let i = 'state'
    if (e.currentTarget.dataset.id == this.data.TeacherOrder.state) {
      this.setData({
        [`TeacherOrder.${i}`]: '0'
      })
    } else {
      this.setData({
        [`TeacherOrder.${i}`]: e.currentTarget.dataset.id
      })
    }
    // console.log(this.data.TeacherOrder.state)
  },

  // 老师的页面排序选项
  TeacherSelecOrder(e) {
    // console.log(e)
    let i = 'order'
    this.setData({
      [`TeacherOrder.${i}`]: e.currentTarget.dataset.order
    })
    // console.log(this.data.TeacherOrder.order)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`TeacherOrder.${j}`]: '0'
    })
  },

  //老师选着科目的种类
  TeacherSelectType(e) {
    // console.log(e)
    let i = 'subject.type'
    this.setData({
      [`TeacherOrder.${i}`]: e.currentTarget.dataset.item
    })
    // console.log(this.data.ParentOrder.subject.type)
  },

  // 老师选择科目
  TeacherSelectSub(e) {
    // console.log(e)
    let i = 'subject.sub'
    this.setData({
      [`TeacherOrder.${i}`]: e.currentTarget.dataset.item
    })
    // console.log(this.data.ParentOrder.subject.sub)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`TeacherOrder.${j}`]: '0'
    })
  },

  //老师选装区域
  selectRegion(e){
    let i = 'region'
    this.setData({
      [`TeacherOrder.${i}`]:e.currentTarget.dataset.item
    })
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`TeacherOrder.${j}`]: '0'
    })
    // console.log(this.data.TeacherOrder.region)
  },

  TeacherSelecGender(e){
    let i = 'gender'
    this.setData({
      [`TeacherOrder.${i}`]: e.currentTarget.dataset.gender
    })
    // console.log(this.data.TeacherOrder.gender)
    // 选好之后就关闭下拉框
    let j = 'state'
    this.setData({
      [`TeacherOrder.${j}`]: '0'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})