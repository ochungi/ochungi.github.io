$(function(){
    /*gomestreet MAP 시작*/
    /*store의 첫번째부분*/
    $('.store_gome01').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome01').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em01').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em01').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    /*store의 두번째부분*/
    $('.store_gome02').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome02').css({
            'background-color':'#f8f8f8'
        });  
        $('.em02').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em02').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    /*store의 세번째부분*/
    $('.store_gome03').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome03').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em03').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em03').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome04').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome04').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em04').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em04').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });

    $('.store_gome05').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome05').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em05').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em05').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome06').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome06').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em06').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em06').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome07').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome07').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em07').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em07').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome08').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome08').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em08').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em08').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome09').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome09').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em09').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em09').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome10').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome10').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em10').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em10').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome11').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome11').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em11').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em11').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_gome12').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_gome').not('.store_gome12').css({
            'background-color':'#f8f8f8'
            }); 
        $('.em12').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_em').not('.em12').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });

    
    $('.store_gome').css('cursor','pointer');
    $('.store_gome').eq(0).on('click',function(){
        $('.f_group').css({
            'display':'none'            
        });
        $('.f_group_on').show();
    }); 
    
    /*지도 축소*/
    $('.map_box_on > .m_nav > a:nth-of-type(1)').on('click',function() {
        $('.map_box_on').css({
            'background-image':'url(img/map_g_pic1.png)',
            'background-size':'150%',
            'background-position':'right bottom'
        });
    });
    
    /*지도 확대*/
    $('.map_box_on > .m_nav > a:nth-of-type(2)').on('click',function() {
        $('.map_box_on').css({
            'background-image':'url(img/map_g_pic3.png)',
            'background-size':'230%',
            'background-position':'center center'
        });
    });  
    
    
    
    /*eatopia MAP 시작*/
    /*s_group_eatopia 부분 */
    $('.store_eatopia01').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia01').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat01').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat01').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia02').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia02').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat02').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat02').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia03').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia03').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat03').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat03').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia04').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia04').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat04').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat04').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia05').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia05').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat05').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat05').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia06').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia06').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat06').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat06').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia07').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia07').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat07').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat07').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia09').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia09').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat09').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat09').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia10').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia10').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat10').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat10').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });
    
    $('.store_eatopia11').on('click',function(){
        $(this).css({
        'background-color':'#eee',
    });
        $('.store_eatopia').not('.store_eatopia11').css({
            'background-color':'#f8f8f8'
            }); 
        $('.eat11').css({
            'background-color':'#c1a774',
            'color':'#fff'
            });
        $('.s_eat').not('.eat11').css({
            'background-color':'#f8f8f8',
            'color':''
        });
    });

    
    $('.store_eatopia').css('cursor','pointer');
    $('.store_eatopia').eq(0).on('click',function(){
        $('.f_group_eatopia').css({
            'display':'none'            
        });
        $('.f_group_on_eatopia').show();
    }); 
    
    /*지도 축소*/
    $('.map_box_on_eatopia > .m_nav_eatopia > a:nth-of-type(1)').on('click',function() {
        $('.map_box_on_eatopia').css({
            'background-image':'url(img/map_e_pic1.png)',
            'background-size':'150%',
            'background-position':'right bottom'
        });
    });
    
    /*지도 확대*/
    $('.map_box_on_eatopia > .m_nav_eatopia > a:nth-of-type(2)').on('click',function() {
        $('.map_box_on_eatopia').css({
            'background-image':'url(img/map_e_pic3.png)',
            'background-size':'230%',
            'background-position':'center center'
        });
    });
 
});





























