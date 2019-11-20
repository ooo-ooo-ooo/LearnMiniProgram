Page({
  data : {
    name: "Coderwhy",
    age: 18,
    students: [
      { id: 110, name: "kobe", age: 30 },
      { id: 111, name: "james", age: 28 },
      { id: 112, name: "curry", age: 32 },
      { id: 113, name: "why", age: 18}
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

// 编程范式：
// 1.命令式编程： 原生操作DOM
// 2.声明式编程：Vue/React/Angular