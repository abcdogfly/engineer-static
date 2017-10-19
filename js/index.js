
//最上部购物车等 点击弹出下拉框
function topList(){
	var oUl=document.getElementById("b_tan");
	var oTan=getClass(oUl,"tan");
	var oDownL=getClass(oUl,"top_down_list");
	var oTopI=getClass(oUl,"top_i");
	var num=[];
	for(var i=0;i<oTan.length;i++){
		oTan[i].index=i;
		num[i]=0;
		oTan[i].onclick=function(ev){
			var ev=ev || window.event;
			var pp=num[this.index];
			
				for(var j=0;j<oTan.length;j++){
					oDownL[j].style.display="none";
					oTopI[j].style.backgroundPositionY="-90px";
					num[i]=0;
				}
				num[this.index]=pp+1;
				if(num[this.index]%2==1){
					oDownL[this.index].style.display="block";
					oTopI[this.index].style.backgroundPositionY="-65px";
				}
				//一般用在鼠标或键盘事件上
				if(ev.stopPropagation){
					//W3C取消冒泡事件
					ev.stopPropagation();
				}
				else{
					//IE取消冒泡事件
					ev.cancelBubble = true;
				}
		}
		document.onclick=function(){
			for(var j=0;j<oTan.length;j++){
				oDownL[j].style.display="none";
				oTopI[j].style.backgroundPositionY="-90px";
				num[j]=0;
			}
		}
	}
};

topList();




//左侧清单列表
function LeftList(){
	var oUl=document.getElementById("con_classify");
	var aLis=oUl.getElementsByTagName("li");
	var oCon=getClass(aLis[i],"con_classify_list");
	for(var i=0;i<aLis.length;i++){
		var oBao=getClass(oUl,"bao");
		aLis[i].index=i;
		aLis[i].onmouseover=function(){
			var oI=oBao[this.index].getElementsByTagName("i")[0];
			var oSpan=oBao[this.index].getElementsByTagName("span");
			var oH3=oBao[this.index].getElementsByTagName("h3")[0];
			this.style.background="#fff";
			this.style.borderLeft="1px solid #7DCFFF";
			this.style.borderRight="1px solid #fff";
			oH3.style.color="#000";
			oI.style.backgroundPositionY="-74px";
			for(var j=0;j<oSpan.length;j++){
				oSpan[j].style.color="#636363";
			}
			oCon[this.index].style.display="block";
		}
		aLis[i].onmouseout=function(){
			var oI=oBao[this.index].getElementsByTagName("i")[0];
			var oSpan=oBao[this.index].getElementsByTagName("span");
			var oH3=oBao[this.index].getElementsByTagName("h3")[0];
			this.style.background="";
			this.style.borderLeft="";
			this.style.borderRight="";
			oH3.style.color="#fff";
			oI.style.backgroundPositionY="-106px";
			for(var j=0;j<oSpan.length;j++){
				oSpan[j].style.color="#fff";
			}
			oCon[this.index].style.display="none";
		}
	}
};
LeftList();


//banner图
function Banner(){
	var oUl=document.getElementById("banner_ul");
	var aLis=oUl.getElementsByTagName("li");
	var oOl=document.getElementById("banner_ol");
	var oLis=oOl.getElementsByTagName("li");
	var oW= document.documentElement.clientWidth;
	
	//轮播图居中
	oUl.style.left = -(oUl.offsetWidth - oW)/2 +'px';
	oOl.style.left = -(oOl.offsetWidth - oW)/2+100 +'px';
	//宽度变化还居中
	window.onresize=function(){
		oW= document.documentElement.clientWidth;
		oUl.style.left = -(oUl.offsetWidth - oW)/2 +'px';
		oOl.style.left = -(oOl.offsetWidth - oW)/2+100 +'px';
	};
	
	var i=0;
	var timer=null;
	//点击轮播
	aLis[0].style.opacity="1";
	aLis[i].style.filter="alpha(opacity:100)";
	oLis[0].style.backgroundPositionY="-185px";
	for(var j=0;j<oLis.length;j++){
		oLis[j].index=j;
		oLis[j].onclick=function(){
			i=this.index;
			for(var m=0;m<oLis.length;m++){
				animate(aLis[m],{"opacity":0});
				oLis[m].style.backgroundPositionY="-150px";
			}
			this.style.backgroundPositionY="-185px";
			animate(aLis[this.index],{"opacity":100});
		}
		
	}
	//自动播放
	timeDo();
	function timeDo(){
		timer=setInterval(function(){
			var e=i;
			i<aLis.length-1?i++:i=0;
			animate(aLis[e],{"opacity":0});
			oLis[e].style.backgroundPositionY="-150px";
			animate(aLis[i],{"opacity":100});
			oLis[i].style.backgroundPositionY="-185px";
		},2000);
	}
};
Banner();





//搜索value不为空时隐藏后面的p
function search(){
	var oP=document.getElementById("hide_p");
	var oSearch=document.getElementById("search");
	oSearch.onfocus=function(){
		if(oSearch.value=="请输入关键字"){
			oSearch.value="";
		}
	}
	oSearch.onblur=function(){
		if(oSearch.value==""){
			oSearch.value="请输入关键字";
		}
	}
};
search();



//金牌服务的特效
function GoldServe(){
	var oUl=document.getElementById("rc_con_ul");
	var aLis=oUl.getElementsByTagName("li");
	var oPic=getClass(oUl,"rc_pic");
	var oImg=oUl.getElementsByTagName("img");
	var oH3=oUl.getElementsByTagName("h3");
	var oContact=getClass(oUl,"contact");
	var oHidden=getClass(oUl,"rc_hidden");
	for(var i=0;i<aLis.length;i++){
		
		aLis[i].index=i;
		aLis[i].onmouseover=function(){
			var oP=aLis[this.index].getElementsByTagName("p")
			animate(oPic[this.index],{"width":120,"height":120,"margin-left":25});
			animate(oImg[this.index],{"width":120,"height":120});
			animate(oH3[this.index],{"font-size":12,"margin-left":20});
			for(var j=0;j<oP.length;j++){
				animate(oP[j],{"font-size":10,"margin-left":20});
			}
			oContact[this.index].style.display="none";
			animate(oHidden[this.index],{"bottom":0});
		}
		
		aLis[i].onmouseleave=function(){
			var oP=aLis[this.index].getElementsByTagName("p")
			animate(oPic[this.index],{"width":182,"height":182,"margin-left":0});
			animate(oImg[this.index],{"width":182,"height":182});
			animate(oH3[this.index],{"font-size":14,"margin-left":0});
			for(var j=0;j<oP.length;j++){
				animate(oP[j],{"font-size":12,"margin-left":0});
			}
			oContact[this.index].style.display="block";
			animate(oHidden[this.index],{"bottom":-111});
		}
	}
};
GoldServe();


//施工团队
function Consteam(){
	var oConteam=document.getElementById("con_team");
	var oFirm=getClass(oConteam,"firm")[0];
	var aLis=oFirm.getElementsByTagName("a");
	var oUl=getClass(oConteam,"ct_con");
	for(var i=0;i<aLis.length;i++){
		aLis[i].index=i;
		aLis[i].onclick=function(){
			for(var j=0;j<aLis.length;j++){
				aLis[j].className="";
				oUl[j].style.display="none";
			}
			this.className="ct_active";
			oUl[this.index].style.display="block";
		}
	}
};
Consteam();



//返回顶部
function BackTop(){
	var oBtn=document.getElementById("back_button");
	var off=true;
	var timer=null;
	oBtn.onmouseover=function(){
		animate(this,{"opacity":100})
	}
	oBtn.onmouseleave=function(){
		animate(this,{"opacity":50})
	}
	var oScrollTop=0;
	window.onscroll=function(){
		 oScrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(oScrollTop<300){
			oBtn.style.display="none";
		}
		else{
			oBtn.style.display="block";
		}
		if(!off){
			clearInterval(timer);
		}
		off=false;
	}
	oBtn.onclick=function(){
//		if(document.documentElement&&document.documentElement.scrollTop){ 
//			var scroll=document.documentElement; 
//		}else if(document.body){ 
//			var scroll=doeument.body; 
//		} ;
		clearInterval(timer);
		timer=setInterval(function(){
		var backTop = Math.floor(oScrollTop/4);
			if(backTop == 0){
				clearInterval(timer)
			}else{
				if(document.documentElement.scrollTop){
					document.documentElement.scrollTop-=backTop;
				}else{
					document.body.scrollTop-=backTop;	
				}
				//document.documentElement.scrollTop = document.body.scrollTop-=backTop;			
				off=true;
			}

		},30)
		
	}
	
		
};
BackTop();

//adv广告滚动
function ad(){
	var oAd=document.getElementById("adv")
	var oBox=document.getElementById("ad_box");
	var oImg=oBox.getElementsByTagName("img");
	var timer=null;
	oBox.innerHTML+=oBox.innerHTML;
	oBox.style.height=oImg[0].offsetHeight*oImg.length+"px";
	var num=0;
	function play(){
		timer=setInterval(function(){
			num++;
			if(num>oImg.length/2){
				oBox.style.top="0";
				num=1;
			}
			animate(oBox,{"top":-oImg[0].offsetHeight*num});
		},2500)
	}
	play();
	
	oAd.onmouseover=function(){
		clearInterval(timer);
	}
	oAd.onmouseout=function(){
		play();
	}
};
ad();


//点击弹出弹窗
function PopW(){
	var oUl=document.getElementById("rc_con_ul");
	var aLis=oUl.getElementsByTagName("li");
	var oGo=getClass(oUl,"rc_hidden");
	var oBg=getClass(oUl,"pop_w_bg");
	var oPopW=getClass(oUl,"pop_w");
	var oX=getClass(oUl,"X");
	
	for(var i=0;i<oGo.length;i++){
		oGo[i].index=i;
		oGo[i].onclick=function(){
			var m=this.index;
			oBg[this.index].style.display="block";
			oPopW[this.index].style.display="block";
			animate(oPopW[this.index],{"opacity":100});
			oX[m].onclick=function(){
				oBg[m].style.display="none";
				oPopW[m].style.display="none";
				oPopW[m].style.opacity="0";
				oPopW[m].style.filter="alpha(opacity:0)";
			}
		}
		
	}
	
};
PopW();



//登录 注册选项卡
function change(){
	var oLogin=document.getElementById("login");
	var oLoginV=oLogin.getElementsByTagName("a")[0];
	var oLbtn=document.getElementById("login_btn");
	var oLbg=document.getElementById("login_bg");
	var oU1=document.getElementById("box_top");
	var aLis1=oU1.getElementsByTagName("li");
	var oU2=document.getElementById("box_bottom");
	var aLis2=oU2.getElementsByTagName("li");
	var oLoginU=document.getElementById("login_user");
	var oTxtU=document.getElementById("username_user");
	
	
	var oRes=document.getElementById("regis");
	var oRbtn=document.getElementById("res_btn");
	var oResCard=document.getElementById("card_res");
	var aLis3=oResCard.getElementsByTagName("li");
	var oResCon=document.getElementById("res_bottom");
	var aLis4=oResCon.getElementsByTagName("li");
	var oResU=document.getElementById("res_user");
	//登录界面
	oLogin.onclick=function(){
		oLbtn.style.display="block";
		oLbg.style.display="block";
		for(var i=0;i<aLis1.length;i++){
			aLis1[i].index=i;
			aLis1[i].onclick=function(){
				for(var j=0;j<aLis1.length;j++){
					aLis2[j].style.display="none";
					aLis1[j].className="";
				}
				aLis2[this.index].style.display="block";
				this.className="box_topAdd";
			}
		}
	}
	oLoginU.onclick=function(){
		oLbtn.style.display="none";
		oLbg.style.display="none";
		if(oTxtU.value==""){
			oLoginV.innerText="登录"
		}
		else{
			oLoginV.innerText=oTxtU.value;
			oLogin.onclick=null;
		}
	}
	
	
	
	//注册界面
	oRes.onclick=function(){
		oRbtn.style.display="block";
		oLbg.style.display="block";
		for(var i=0;i<aLis3.length;i++){
			aLis3[i].index=i;
			aLis3[i].onclick=function(){
				for(var j=0;j<aLis1.length;j++){
					aLis4[j].style.display="none";
					aLis3[j].className="";
				}
				aLis4[this.index].style.display="block";
				this.className="box_topAdd";
			}
		}
	}
	oResU.onclick=function(){
		oRbtn.style.display="none";
		oLbg.style.display="none";
	}
};
change();

