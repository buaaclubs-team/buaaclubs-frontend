/*1.社员管理*/
  function getMemberList()
  {
  	var xmlhttp;
  		if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
  	xmlhttp.open("GET","http://www.buaaclubs.com/api/clubs/members/all");
  	xmlhttp.setRequestHeader("uid",sessionStorage.uid);
	  xmlhttp.setRequestHeader("token",sessionStorage.token);
    xmlhttp.send();
	  xmlhttp.onreadystatechange = function()
		{
			var data = xmlhttp.response;
			dataObj = eval("(" + data + ")");
			/*
			dataObj.txt.uid
			dataObj.txt.name
			dataObj.txt.phone_num
			dataObj.txt.email
			dataObj.txt.time
			*/
		}
  }

  function sendInform()
  {
      var xmlhttp;
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST","http://www.buaaclubs.com/api/clubs/inform");
      /*请求中body json格式 uids 发送的学生学号 content 通知内容
        type 数字 0表示站内信 1表示信息 2表示email*/
      var row = {uids:sessionStorage.uids,content:,type:};
      var jsonObj = JSON.stringify(row);
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send(jsonObj);
       xmlhttp.onreadystatechange = function()
    {
      var data = xmlhttp.response;
      dataObj = eval("(" + data + ")");
      /*
      dataObj.users.name
      dataObj.users.stu_num
      */
    }
  }

  function exportNameList()
  {
     var xmlhttp;
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST","http://www.buaaclubs.com/api/clubs/export");
      var row = {uids:sessionStorage.uids};
      var jsonObj = JSON.stringify(row);
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send(jsonObj);
       xmlhttp.onreadystatechange = function()
    {
      /*
      返回方式待定
      */
    }
  }

  function forceQuit()
  {
    var xmlhttp;
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST","http://www.buaaclubs.com/api/clubs/members/forcequit");
      var row = {uids:sessionStorage.uids,reason:};//reason获取方式待定
      var jsonObj = JSON.stringify(row);
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send(jsonObj);
       xmlhttp.onreadystatechange = function()
    {
      /*
      返回方式待定
      */
    }
  }
  /*2.社员审批*/
  function apply()
  {
     var xmlhttp;
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("GET","http://www.buaaclubs.com/api/clubs/members/apply");
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send();
       xmlhttp.onreadystatechange = function()
    {
      
    }
  }

  function accept()
  {
    var xmlhttp;
    var user_id = ;// 获取方式待定
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("GET","http://www.buaaclubs.com/api/clubs/members/apply/accept"+user_id.toString());
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send();
       xmlhttp.onreadystatechange = function()
    {
      
    }
  }

    function refuse()
  {
    var xmlhttp;
    var user_id = ;// 获取方式待定
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
         }
       else
       {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST","http://www.buaaclubs.com/api/clubs/members/refuse"+user_id.toString()));
      var row = {reason:};//reason获取方式待定
      var jsonObj = JSON.stringify(row);
      xmlhttp.setRequestHeader("uid",sessionStorage.uid);
      xmlhttp.setRequestHeader("token",sessionStorage.token);
      xmlhttp.send(jsonObj);
       xmlhttp.onreadystatechange = function()
    {
      /*
      返回方式待定
      */
    }
  }
