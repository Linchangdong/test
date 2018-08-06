

    var that;
    $('.delete_box').on('click',function(){
            $(this).children('.delete_up').css(
                {
                    transition :'all 1s',
                    'transformOrigin':'0 5px' ,
                    transform :'rotate(-30deg) translateY(2px)'
                }

            )
            $('.jd_win').show();
            that = $(this);
    })

    $('.cancle').on('click',function(){
        $('.jd_win').hide();
        $('.delete_up').css('transform','none')
    })
    $('.submit').on('click',function(){
        that.parent().parent().parent().parent().remove();
        $('.jd_win').hide();
    })
	
	$('.jd_check_box').click(function(){
		if($(this).attr('id')=='select_all')
		{
			if($('.jd_check_box').attr('style')=='background-position: 0 50;')
			{
				$('.jd_check_box').attr('style','background-position: 0 0;');
			}
			else
			{
				$('.jd_check_box').attr('style','background-position: 0 50;');
			}
		}
		else
		{
			if($(this).attr('style')=='background-position: 0 50;')
			{
				$(this).attr('style','background-position: 0 0;');
				$('#select_all').attr('style','background-position: 0 0;');
			}
			else
			{
				$(this).attr('style','background-position: 0 50;');
			}
		}
		
	});
	
	$('.p_opition .change_num span:first-child').on('click',function(){		
        var oldvalue=$(this).next().attr('value');
		if(parseInt(oldvalue)>0)
		{
			$(this).next().attr('value',oldvalue-1);
		}	
    })
	$('.p_opition .change_num span:last-child').on('click',function(){
        var oldvalue=$(this).prev().attr('value');
		$(this).prev().attr('value',parseInt(oldvalue)+1);
    })

