---
title: 掘金抽奖脚本
date: 2021-09-13
updated: 2021-09-13
categories: 
  - 编程技术
tags: 
  - 脚本
---

复制到 console 即可运行。

```js
stime = Date.parse(new Date());
result = {}
count = 0
flag = true

while (flag) {
  obj = await fetch('https://api.juejin.cn/growth_api/v1/lottery/draw', {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => {
    obj = res.json()
    return obj
  
  })
  
  if (obj.err_no === 0) {
          
    if (obj.data.lottery_name in result) {
      result[obj.data.lottery_name] += 1
    } else {
      result[obj.data.lottery_name] = 1
    }
      
    count ++

  } else {
    flag = false
  }
 
}
etime = Date.parse(new Date())
console.log("抽奖次数为：" + count)
console.log("抽奖花费时间为：", (etime - stime)/1000 +  " 秒" )
console.log("抽奖奖品明细")
Object.keys(result).forEach(key => console.log("奖品：" + key + "--数量：" + result[key] ))

```