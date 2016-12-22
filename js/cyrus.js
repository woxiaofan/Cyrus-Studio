/**
 * Created by Administrator on 2016/11/25.
 */
$(function(){
	/*图片变换函数*/
	function pic(){
		for(var i=0;i<$('.pic_row .col-sm-4' ).length;i++){
			var pic_row_h =$(window ).height()- $('.pic_row .col-sm-4' ).eq(i).offset().top+$(window).scrollTop()-$('.pic_row .col-sm-4' ).height();
		//	console.log(pic_row_h);
		//	console.log(pic_row_h01);
			if(pic_row_h<-$('.pic_row .col-sm-4' ).height()/2){
				$('.pic_row .col-sm-4' ).eq(i ).stop().fadeOut(500);
			}else{
				$('.pic_row .col-sm-4' ).eq(i ).stop().fadeIn(500);
			}
		}
	}
	/*图片层下的文字层效果*/
	function txt(){
		var h_1_h = $(window ).height()- $('#h_1' ).offset().top+$(window).scrollTop()-$('#h_1' ).height();
		var left_h = $('.left_txt' ).offset().top - $(window).scrollTop();
		var h = $('.left_txt' ).offset().top-$('.left_txt' ).height()-200;
		//	console.log(left_h);
		//	console.log(h_1_h);
		if(left_h<700 && left_h > 0){
			$('.left_txt' ).stop().animate({
				'margin-left':0
			},300);
			$('.right_txt' ).stop().animate({
				'margin-left':0
			},300);

		}else{
			$('.left_txt' ).stop().animate({
				'margin-left':-360
			},300);
			$('.right_txt' ).stop().animate({
				'margin-left':600
			},300)
		}
		if(h_1_h>50){
			$('.h_1' ).addClass('h_2');
		}else{
			$('.h_1' ).removeClass('h_2');
		}
	}
	/*返回顶部函数*/
	function goTop(){
		$('.go_top' ).click(function(){
			$("html,body").animate({
				scrollTop: 0
			}, 500);
		})
	}
	goTop();
	/*5圈特效层*/
	function pro_box(){
		var pro_box_bottom =$(window ).height()- $('#pro_box' ).offset().top+$(window).scrollTop()-$('#pro_box' ).height();//距离可视区域底部距离
		var pro_box_top = $('#pro_box' ).offset().top - $(window).scrollTop();//距离可视区域顶部距离
	//	console.log(pro_box_top+'----'+pro_box_bottom);
		if(pro_box_bottom>150&&pro_box_top>-30){
			$('.process_col_bor' ).stop().addClass('pro_box_scale');
		}else{
			$('.process_col_bor' ).stop().removeClass('pro_box_scale');
		}
	}

	/*透明层小图标*/
	function transparent(){
		var transparent_bottom = $(window ).height()- $('#transparent' ).offset().top+$(window).scrollTop()-$('#transparent' ).height();//距离可视区域底部距离
		var transparent_top = $('#transparent' ).offset().top - $(window).scrollTop();//距离可视区域顶部距离
	//	console.log(transparent_top + '--' +transparent_bottom)
		if(transparent_bottom>-10&&transparent_top>-100){
			$('.transparent_mark_txt' ).stop().addClass('transparent_mark_scale');
		}else{
			$('.transparent_mark_txt' ).stop().removeClass('transparent_mark_scale');
		}
	}

	/*轮播图出现效果*/
	function slide(){
		var slide_top = $('#pics' ).offset().top - $(window).scrollTop();//距离可视区域顶部距离
		var slide_bottom = $(window ).height()- $('#pics' ).offset().top+$(window).scrollTop()-$('#pics' ).height();//距离可视区域底部距离
	//	console.log(slide_top + '****' + slide_bottom)
		if(slide_top>0&&slide_bottom>30){
			$('.pics' ).stop().addClass('pics_change');
			$('.mySlide' ).stop().addClass('pics_change');
		}else{
			$('.pics' ).stop().removeClass('pics_change');
			$('.mySlide' ).stop().removeClass('pics_change');
		}
	}

	/*联系我们scale效果*/
	function contact(){
		var contact_ipt_top = $('#contact_ipt' ).offset().top - $(window).scrollTop();//距离可视区域顶部距离
		var contact_ipt_bottom =$(window ).height()- $('#contact_ipt' ).offset().top+$(window).scrollTop()-$('#contact_ipt' ).height();//距离可视区域底部距离
	//	console.log(contact_ipt_top+'***'+contact_ipt_bottom);
		if(contact_ipt_bottom>-60&&contact_ipt_top>-100){
			$('.contact_ipt' ).stop().addClass('contact_ipt_scale');
		}else{
			$('.contact_ipt' ).stop().removeClass('contact_ipt_scale');
		}
	}

	/*滚动监听*/
	function goto(){
		$('#myNav ul li:contains(About)').click(function(){
			var top = $(".creative").offset().top-65;
			$("html,body").animate({
				scrollTop: top
			}, 500);
		});
		$('#myNav ul li:contains(Partners)').click(function(){
			var top = $(".partners").offset().top-65;
			$("html,body").animate({
				scrollTop: top
			}, 500);
		});
		$('#myNav ul li:contains(Contact)').click(function(){
			var top = $(".contact").offset().top-65;
			$("html,body").animate({
				scrollTop: top
			}, 500);
		});
	}
	$(window ).ready(function(){
		pic();
		txt();
		pro_box();
		transparent();
		slide();
		contact();
		goto();
	});
	$(window ).scroll(function(){
		pic();
		txt();
		pro_box();
		transparent();
		slide();
		contact();

		if($(window).scrollTop()==0){
			$('.go_top' ).fadeOut();
		}else{
			$('.go_top' ).fadeIn();
		}
	})
});