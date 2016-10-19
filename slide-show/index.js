$(document).ready(function(){
	var $imgs=$("#imgPlay img");
	var $imgsMake=$("#imgPlay ul li");
	var $imgsArr=new Array();
	for(var i=0;i<$imgs.length;i++){
		$imgsArr[i]=[$imgs.eq(i),$imgsMake.eq(i)];
	}
	var timeId=setInterval(function(){
		imgPlay("true");
	},2000);
	$("#left").unbind('click').click(function(){
		imgPlay("false");
		clearInterval(timeId);
		timeId=setInterval(function(){
		imgPlay("true");
	},2000);
	});
	$("#right").unbind('click').click(function(){
		imgPlay("true");
		clearInterval(timeId);
		timeId=setInterval(function(){
		imgPlay("true");
	},2000);
	});


function imgPlay(string){
		if(string==="true"){
			// for(var i=0;i<$imgsArr.length;i++){
			// 	console.log($imgsArr[i].attr("src"));
			// }
			$imgsArr[0][1].removeClass("active");
			$imgsArr[1][1].addClass("active");
			$imgsArr[0][0].css({"position":"absolute", "top": "0px", "left": "0px"});
			$imgsArr[1][0].css({"position":"absolute", "top": "0px", "left": "250px"});
			

			 $imgsArr[0][0].animate({left:"-250px"},100);
			 $imgsArr[1][0].animate({left:"0px"},100);
			 $imgsArr[0][1].removeClass("active");
			 console.log($imgsArr[1][0].attr("src"));
			 $imgsArr.push($imgsArr.shift());
		}
		else{
			$imgsArr[0][1].removeClass("active");
			$imgsArr[$imgsArr.length-1][1].addClass("active");
			$imgsArr[0][0].css({"position":"absolute", "top": "0px", "left": "0px"});
			$imgsArr[$imgsArr.length-1][0].css({"position":"absolute", "top": "0px", "left": "-250px"});
			

			 $imgsArr[0][0].animate({left:"250px"},100);
			 $imgsArr[$imgsArr.length-1][0].animate({left:"0px"},100);
			 $imgsArr[0][1].removeClass("active");
			 console.log($imgsArr[$imgsArr.length-1][0].attr("src"));
			 $imgsArr.splice(0,0,$imgsArr.pop());
		}
		
	}

});


