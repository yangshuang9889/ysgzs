// JavaScript Document
//values菜单的值{name:菜单名,href:链接地址}
//height单个菜单的高度
//width单个菜单宽度
function menu(menuObj,obj,id){
		var html = "";
	    var width = menuObj.width;
	    var height = menuObj.height;
	    var values = menuObj.values;
	    var divTop = menuObj.divTop;
	    var divLeft = menuObj.divLeft;
		var top = $(obj).offset().top;
		var left = $(obj).offset().left;
		var objHeight = $(obj).height();
		top = parseInt(top)+parseInt(objHeight)
		left = parseInt(left)+parseInt(divLeft);
		$(values).each(function(index,value){
			html = html+"<div id=\""+id+"menuDiv_"+index+"\" style=\"width:"+width+"px;height:"+height+"px;line-height:"+height+"px;text-align:center;position:relative;float:left;clear:both;cursor:pointer;background-color:white;border-left:1px solid #cccccc;border-right:1px solid #cccccc;border-bottom:1px solid #cccccc;\" onmouseover=\""+id+"menuOnMouseOver"+index+"()\" onmouseout=\""+id+"menuOnMouseOut"+index+"()\"><a href=\""+value.href+"\" style=\"text-decoration:none;color:black\">"+value.name+"</a></div>";
			html = html + "<script type=\"text/javascript\">function "+id+"menuOnMouseOver"+index+"(){document.getElementById(\""+id+"menuDiv_"+index+"\").style.background=\"#cccccc\"}function "+id+"menuOnMouseOut"+index+"(){document.getElementById(\""+id+"menuDiv_"+index+"\").style.background=\"white\"}</script>";
		})
		html = "<div id =\""+id+"\" style=\"top:"+top+"px;left:"+left+"px;position:absolute;z-index=-1;padding-top:"+divTop+"px\">"+html+"</div>";
		$("body").append(html);
	}
	$.fn.extend({
		"menu":function(obj){
			var menuName = $(this).attr("id")+"_menu";
			$(this).mouseover(function(){
				$("#"+menuName).remove();
				menu(obj,this,menuName);
				$("#"+menuName).show();
			}).mouseout(function(){
				var flag = $("#"+menuName).mouseover(function(){
					$(this).show();
					return 1;
				}).mouseout(function(){
					$(this).hide();
					return 1;
				})
				if(flag = 1){
				   $("#"+menuName).hide();
				}
			})
			
		}
	})