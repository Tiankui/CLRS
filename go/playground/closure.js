const a = {
  b: 1,
  func: function () {
    console.log(this)
    function closure () {
      console.log(1)
      console.log(this)
    }
    closure()
  },
  c: {
    d: 2,
    function2: function (cb) {
      console.log(2)
      console.log(this)
      function closure2 () {
        console.log(3)
        console.log(this)
      }
      closure2.bind(this)()
      console.log(this)
      cb.call(this)
      cb()
      closure2()
    }
  }
}

a.c.function2(function(){
  console.log(4)
  console.log(this)
})

//正名为闭包的this都是global,除非bind || call传进去
