window.onload=function(){
    var odiv=document.getElementById('div1');//获取div
    var btn=odiv.getElementsByTagName('input');//获取div下的input
    var div2=odiv.getElementsByTagName('div') ;//获取div下的div
  
   for(i=0;i<btn.length;i++)//循环每个按钮
    { 
      btn[i].index=i 
 //btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
      btn[i].onclick=function()//按钮的第i个点击事件
     {
     for(i=0;i<btn.length;i++)//循环去掉button的样式，把div隐藏
      { 
        btn[i].className='off' //清空按钮的样式
        div2[i].style.display='none'//隐藏div
       }
         this.className='on1'//自身添加on
         div2[this.index].style.display='block'//this.index是当前div 
     }
    }
 }
 