window.onload=function(){
	waterfall("main","box");
	// console.log("运行中");
	window.onresize=function(){
		waterfall("main","box");
	};
	window.onscroll=function(){
		var waterfallElement={
		"arr":[
			{"src":"1.jpg"},
			{"src":"2.jpg"},
			{"src":"3.jpeg"},
			{"src":"4.jpg"},
			{"src":"5.jpg"},
			{"src":"6.jpg"}
		]
	};
		checkScroll(waterfallElement);
	};
};

//实现瀑布流布局的函数
function waterfall(parent,div){
	var mParent=document.getElementById(parent);
	var mDivs=getByClass(parent,div);
	var mDivWidth=mDivs[0].offsetWidth;
	var mClientWidth=document.documentElement.clientWidth;
	var num=Math.floor(mClientWidth/mDivWidth);
	mParent.style.width=num*mDivWidth+"px";
	var arr=new Array();
	var index;				//数组索引变量
	for(var i=0;i<mDivs.length;i++){
		if(i<num){
			mDivs[i].style.position="absolute";
			mDivs[i].style.top="0px";
			mDivs[i].style.left=i*mDivWidth+"px";
			arr[i]=mDivs[i].offsetHeight;
		}
		else{
			index=arr.indexOf(Math.min.apply(null,arr));
			mDivs[i].style.position="absolute";
			mDivs[i].style.top=arr[index]+"px";
			mDivs[i].style.left=index*mDivWidth+"px";
			arr[index]+=mDivs[i].offsetHeight;
		}
	}
}

//获取指定id下的class的元素
function getByClass(parent,className){
	var arr=new Array();
	var	parentElement=document.getElementById(parent);
	var	mElements=parentElement.getElementsByTagName("*");
		for(var i=0;i<mElements.length;i++){
			if(mElements[i].className==className){
				arr.push(mElements[i]);
			}
		}
	return arr;
}

//追加新box元素显示
function checkScroll(Elements){
	var mScrollTop=getScrollTop();
	var mHeight=mScrollTop+document.documentElement.clientHeight;
	var lastBox=getByClass("main","box")[getByClass("main","box").length-1];
	var mElementTop=parseInt(lastBox.style.top)+Math.floor((lastBox.offsetHeight/2));
	console.log(mElementTop+"和"+mHeight);
	if(mElementTop<mHeight){
		var len=Elements.arr.length;
		for(var i=0;i<len;i++){
			var box=document.createElement("div");
			box.className="box";
			var div=document.createElement("div");
			var img=document.createElement("img");
			img.src=Elements.arr[i].src;
			div.appendChild(img);
			box.appendChild(div);
			document.getElementById("main").appendChild(box);
		}
	}
	waterfall("main","box");
}

//能力检测获取滚动条到页面顶部的距离
function getScrollTop(){
	if("pageYOffset" in window){
		return window.pageYOffset;
	}
	else if(document.compatMode==="BackCompat"){
			return document.body.scrollTop;
		 }
		 else{
		 	return document.documentElement.scrollTop;
		 }
}