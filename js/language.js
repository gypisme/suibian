function Link(obj){
	var href = obj.href;
	var yuyan = GetQueryString('lg');
	var aaa = obj.getAttribute('aaa');
	if( yuyan == 'EN'){
		if( aaa == null ){
			window.location.href = href + '?lg=EN';
		}else{
			window.location.href = href + '?lg=EN' + aaa;
		};
		
	}else if( yuyan == 'CH' ){
		if( aaa == null ){
			window.location.href = href + '?lg=CH';
		}else{
			window.location.href = href + '?lg=CH' + aaa;
		};
	}else if(( yuyan == 'FR' )){
        if( aaa == null ){
			window.location.href = href + '?lg=FR';
		}else{
			window.location.href = href + '?lg=FR' + aaa;
		};
    };
	
};

function GetQueryString(name){
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if(r!=null)return  unescape(r[2]); return null;
};

	$(function(){
		function GetQueryString(name){
			 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			 var r = window.location.search.substr(1).match(reg);
			 if(r!=null)return  unescape(r[2]); return null;
		};
		
		
		var yuyan = GetQueryString('lg');
		if( yuyan == 'EN' || !yuyan ){
			english();
			$('#page').show();
		}else if( yuyan == 'CH' ){
			chinese();
			$('#page').show();
		}else if( yuyan == 'FR' ){
            French();
			$('#page').show();
        };
		
		
		
		//英文
		function english(){
			$('.ch').hide();
            $('.fr').hide();
            $('.english').hide();
            $('.chinese').show();
            $('.French').show();
			$('.en').show();
		};
		//中文
		function chinese(){
			$('.en').hide();
            $('.fr').hide();
            $('.chinese').hide();
            $('.english').show();
            $('.French').show();
			$('.ch').show();
		};
        function French(){
            $('.en').hide();
            $('.ch').hide();
            $('.French').hide();
            $('.chinese').show();
            $('.english').show();
			$('.fr').show();
        }
		
		
		//英文
		$('.english').click(function(){
			english();
			var str = window.location.href;
//            alert(str);
			/*if( str.indexOf('?lg') != -1 ){
				var trueStr = str.substring(0,str.length-6);	
				window.location.href = trueStr + '?lg=EN';
			}else{	
				window.location.href = str + '?lg=EN';
			};*/
            //newStr html截取问题
			var newStr = str.indexOf('?');
            if(newStr != -1){
                //如果=-1 就从字符地址的尾部到最后一个加'?lg=EN'
                var nowStr = str.substring(0,newStr);
//                alert(nowStr);newStr不需要+4
			    window.location.href = nowStr + '?lg=EN';
            }else{
                //如果!=-1直接在地址后边加
                window.location.href = str + '?lg=EN';
            }
			
		});
		//中文
		$('.chinese').click(function(){
			chinese();            
//            $('#video').play();
			var str = window.location.href;
			/*if( str.indexOf('?lg') != -1 ){
				var trueStr = str.substring(0,str.length-6);	
				window.location.href = trueStr + '?lg=CH';
			}else{	
				window.location.href = str + '?lg=CH';
			};*/
			var newStr = str.indexOf('?');
            if(newStr != -1){
                var nowStr = str.substring(0,newStr);
			    window.location.href = nowStr + '?lg=CH';
            }else{
                window.location.href = str + '?lg=CH';
            }
		});
        //法语
        $('.French').click(function(){
			French();
//            $('#video').play();
			var str = window.location.href;
			/*if( str.indexOf('?lg') != -1 ){
				var trueStr = str.substring(0,str.length-6);	
				window.location.href = trueStr + '?lg=CH';
			}else{	
				window.location.href = str + '?lg=CH';
			};*/
			var newStr = str.indexOf('?');
            if(newStr != -1){
                var nowStr = str.substring(0,newStr);
			    window.location.href = nowStr + '?lg=FR';
            }else{
                window.location.href = str + '?lg=FR';
            }
			
		});
	});
    var handler = function () {
        event.preventDefault();
        event.stopPropagation();
    };
    var OpenMask = function(){
        document.body.addEventListener('touchmove',handler,false);
        document.body.addEventListener('wheel',handler,false);
    };
    var CloseMask = function(){
        document.body.removeEventListener('touchmove',handler,false);
        document.body.removeEventListener('wheel',handler,false);
    };

















