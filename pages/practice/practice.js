Page({
  data: {
    name: "Coderwhy",
    students: [
      { id: 110, name: "kobe", age: 30 },
      { id: 111, name: "james", age: 22 },
      { id: 112, name: "why", age: 29 },
      {id: 113, name: "curry", age: 18}
    ],
    counter: 0
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})