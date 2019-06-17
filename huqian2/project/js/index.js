$(function () {
  var data = [
    {
      "name": "刘子怡爸爸",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D091A297D0A3D3619C6D828C681F305F/100",
      "money": "23.36"
    },
    {
      "name": "我是你的情人",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/685AA36438DDD7E0EB55D0C18097CA1C/100",
      "money": "28.79"
    },
    {
      "name": "花花公子",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/DDA36344FDAF8DF2BFDD8F3DAEDE5B74/100",
      "money": "19.39"
    },
    {
      "name": "潇了个洒",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/E2348DFF85AE861D17451BDDC0432809/100",
      "money": "23.90"
    },
    {
      "name": "天天向上",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/1656EDDA7E648DD32E862460EE92E1C5/100",
      "money": "22.04"
    },
    {
      "name": "一刘阿姨",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/29DBC6217FA0B06ABC25C70FE260221F/100",
      "money": "25.56"
    },
    {
      "name": "孔海西",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/72763DE05338B738EEA4D9FBEFD8DBBF/100",
      "money": "13.67"
    },
    {
      "name": "IF YOU",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/9CFD84D74ABF5141EA8F6B73BD06C3E1/100",
      "money": "26.47"
    },
    {
      "name": "快来调侃",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/BA6DA5237D4175DDC750553561F219B7/100",
      "money": "23.34"
    },
    {
      "name": "。大哥哥",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/772D04D9EB8E70A961A1D5CABBCF293A/100",
      "money": "26.05"
    },
    {
      "name": "小布丁555",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/25217BFE51A1B8A16160A9F43837A86F/100",
      "money": "18.03"
    },
    {
      "name": "似懂非懂",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/198FD85BC7EFBCCB5C73AE4FEB633560/100",
      "money": "27.47"
    },
    {
      "name": " 二叔",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/02305E433C97C724931A79F8FB04FE50/100",
      "money": "15.68"
    },
    {
      "name": "快乐每一天_",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/48BE3B50C3E9847242626FF9A07C3317/100",
      "money": "27.07"
    },
    {
      "name": "好8不好8",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/5283BB3808A16D227AC03DC4374F77C6/100",
      "money": "14.87"
    },
    {
      "name": "小甜甜",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/BE2BFD6D743F815AC7A8FA974E40D4FC/100",
      "money": "17.18"
    },
    {
      "name": "最佳搭档，",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/C54D6E68485F84A86822CF7E473A93EC/100",
      "money": "15.06"
    },
    {
      "name": "二分^_^睡眠",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/2316567F52712C775048DB02BF5C261C/100",
      "money": "12.44"
    },
    {
      "name": "孙粒子",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D1A596E47C0AA279BA8BB9BAAC02CC44/100",
      "money": "15.56"
    },
    {
      "name": "Mr. Xue",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/189955F05F482DE956480DB66B07E4DC/100",
      "money": "29.26"
    },
    {
      "name": "、dacy",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/5CD9B7ACD34332B8DA145BE3DE4C44FB/100",
      "money": "26.52"
    },
    {
      "name": "已婚少年",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/B7CDFAA5FD54A0FD2904A30B6A29D660/100",
      "money": "25.99"
    },
    {
      "name": "叫我冰冰",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D3875B44A8DB4ABE135059C7362B4094/100",
      "money": "29.80"
    },
    {
      "name": "卢正英",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D6AEE11866CCEC092B82C532218F6B20/100",
      "money": "15.64"
    },
    {
      "name": "Jkz.",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/9ADBAEBE292B4FA0737F9DB142336157/100",
      "money": "10.55"
    },
    {
      "name": "雷乐天",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/71E4837B7B1F0A12D5F8D90234DDB95C/100",
      "money": "21.76"
    },
    {
      "name": "有你每一天",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/E0FB2E95D84068B944789BF6569B3A7F/100",
      "money": "26.57"
    },
    {
      "name": "毕竟我们还年轻",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/A6F3CA4B97E59BB9AE5495984ACF3090/100",
      "money": "24.57"
    },
    {
      "name": "世界杯看客",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/0DE079B903E44F96AB9BAD85D706A61F/100",
      "money": "22.61"
    },
    {
      "name": "频繁的我",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/94B9F8421330A7B82F019492C822BF42/100",
      "money": "25.81"
    },
    {
      "name": "妙不可言",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D56EE4D71422A112CDA6B7B44D48B044/100",
      "money": "29.18"
    },
    {
      "name": "春天般～温暖",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/FF4E560E4F11C2EBAAFFFC4625CD3122/100",
      "money": "21.65"
    },
    {
      "name": "小猫咪回忆",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/F6213667E85E205FF363B3947D218D38/100",
      "money": "14.02"
    },
    {
      "name": "10G流量不够用",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D42066DE19EBB82D30A351185956DB41/100",
      "money": "26.11"
    },
    {
      "name": "梅西王子",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/5DA508A1616E732B0EB92A1ADAF28456/100",
      "money": "24.74"
    },
    {
      "name": "中国队必胜",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/9DE656A9B0C0384FCCF7D02BD02CFCB5/100",
      "money": "25.25"
    },
    {
      "name": "刘子怡爸爸",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/D091A297D0A3D3619C6D828C681F305F/100",
      "money": "23.36"
    },
    {
      "name": "我是你的情人",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/685AA36438DDD7E0EB55D0C18097CA1C/100",
      "money": "28.79"
    },
    {
      "name": "花花公子",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/DDA36344FDAF8DF2BFDD8F3DAEDE5B74/100",
      "money": "19.39"
    },
    {
      "name": "潇了个洒",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/E2348DFF85AE861D17451BDDC0432809/100",
      "money": "23.90"
    },
    {
      "name": "天天向上",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/1656EDDA7E648DD32E862460EE92E1C5/100",
      "money": "22.04"
    },
    {
      "name": "一刘阿姨",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/29DBC6217FA0B06ABC25C70FE260221F/100",
      "money": "25.56"
    },
    {
      "name": "孔海西",
      "avatar": "https://q.qlogo.cn/qqapp/1104718115/72763DE05338B738EEA4D9FBEFD8DBBF/100",
      "money": "13.67"
    },
  ]
  var html = '', num = 7;
  //随机获取时间
  function time() {
    //随机数
    let randomNum = Math.floor((Math.random() * 30) + 1)
    //获取当前分钟
    const date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    if (randomNum > m) {
      h = h < 10 ? '0' + h : h--
      m = 60 - (randomNum - m)
      return `${h}:${m < 10 ? '0' + m : m}`
    } else {
      return `${h}:${randomNum < 10 ? '0' + randomNum : randomNum}`
    }
  };
  //遍历生成HTML字符串
  for (var i = 0; i < data.length; i++) {
    html += ` <li>
    <div class="money_user_wrap">
      <span class="user_icon">
        <img src="${data[i].avatar}" alt=""/>
      </span>
      <div class="user_info">
        <div class="user_name">${data[i].name}</div>
        <div class="user_time">${time()}</div>
      </div>
    </div>
    <div class="recive_money_wrap">
      <span class="recive_money_text">领取</span>
      <span class="recive_money_nums">${data[i].money}元</span>
    </div>
  </li>`
  }
  //渲染页面
  $('.hiBox ul').html(html)
  var height = Math.floor($('.hiBox ul>li').height());
  // 重置前7个和后7个的时间
  var timeTexts = $('.hiBox ul>li .user_time')
  for (let i = 0; i < timeTexts.length; i++) {
    if (i < num) {
      timeTexts[i].innerText = timeTexts[timeTexts.length + i - num].innerText
    }
  }
  //设置每个li的高度
  $('.hiBox ul>li').css({
    height: height * 1.5,
  })
  //动态设置容器高度
  $('.hiBox').css({
    height: (height * 1.5) * num,
  })
  //设置初始化位置
  $('.footer ul').css({
    top: `-${(data.length - num) * (height * 1.5)}px`
  })
  //定时器实现切换
  // var timer = setInterval(() => {
  //   num++
  //   $('.footer ul').css({
  //     top: `-${(data.length - num) * (height*1.5)}px`,
  //     transition: "all .5s"
  //   })
  //     if (data.length - num == -1) {
  //       num = 7
  //       $('.footer ul').css({
  //         transition: "none",
  //         top: `-${(data.length - num) * (height*1.5)}px`,
  //       })
  //     } 
  // }, 2000);
 
  var timer = setInterval(() => {
    num++
    $('.footer ul').css({
      top: `-${(data.length - num) * (height*1.5)}px`,
      transition: "all .5s"
    })
    if (data.length - num == -1) {
      num = 7
      $('.footer ul').css({
        transition: "none",
        top: `-${(data.length - num) * (height*1.5)}px`,
      })
    }

    // start animate loading
    AnimateTimer();
    // end animate loading

  }, 2000);

  // start AnimateTimer code
  var randomNumber,node;
  function AnimateTimer(){
    randomNumber = Math.round(Math.random()*30);
    node = data[randomNumber];
    if(node != null){
      $("#changeLi img").attr("src",node.avatar);
      $("#changeLi .user_name").html(node.name);
      // $("#changeLi user_time").html();
      $("#changeLi .recive_money_nums").html(node.money + "元");
    }
  }
  $("#changeLi").addClass("animated infinite fadeInUp delay-3s");
  /**
   * 1.时间需要加到data中。
   * 2.时间需要调试，应该先加载后再按照搞定的时间重新渲染。
   * 3.index.html页面中样式<style><style>需要合并到index.css中
   */
  // start AnimateTimer code

})




