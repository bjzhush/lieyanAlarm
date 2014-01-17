            $(document).ready(function(){
            //change ring
            $('#selectRing').change(function(){
                var song = $('#media').get(0);
                song.src = $('#selectRing').val();
                song.play();
            });
                  // change backgound color odd and even
                  $('.position:odd').css("background-color", "#bbbbff");
                 //verify domain
                    var host = window.location.host;
                    if (host !== 'dev.lieyan.shuaizhu.com' && host !== 'lieyan.shuaizhu.com') {
                        window.location.href = 'http://lieyan.shuaizhu.com';
                        } else {
                            //reload confirm 
                            var inFormOrLink;
                            $('a').live('click', function() { inFormOrLink = true; });
                            $('form').bind('submit', function() { inFormOrLink = true; });
                            $(window).bind('beforeunload', function(eventObject) {
                                var returnValue = undefined;
                                if (! inFormOrLink) {
                                    returnValue = "刷新或者关闭当前页面将会丢失所有保存的数据,你真的要关闭吗?";
                                }
                                eventObject.returnValue = returnValue;
                                return returnValue;
                            });
                        }
              $(".set").click(function(){
                $(this).siblings(".leftSecond").attr('time',$(this).attr('time'));
                $(this).siblings(".leftMinute").show();
                $(this).siblings(".leftTips").show();
                $(this).siblings(".reset").show();
                $(this).parent().css("background", "white");
              });
              $(".reset").click(function(){
                $(this).siblings(".leftSecond").attr('time',0);
                $(this).siblings(".leftMinute").hide();
                $(this).siblings(".leftTips").hide();
                $(this).parent().css("background", "white");
                $(this).hide();
                var song = $('#media').get(0);
                song.pause();
                song.currentTime = 1;
              });
            });
             setInterval("checkRound()",1000);
            function checkRound() {
                $(".leftSecond").each(function(name,value){
                    if ($(this).attr('time') > 0) {
                        $(this).attr('time', $(this).attr('time')-1); 
                        $(this).siblings(".leftMinute").html(Math.floor($(this).attr('time')/60));
                        if ($(this).attr('time') == $("select[id=timeRound]").val()*60 ) {
                            if ($('#myonoffswitch').is(':checked') == true) {
                                var song = $('#media').get(0);
                                song.play();
                                } else {
                                    alert($(this).siblings("span").text());
                                }
                                } else if ($(this).attr('time') < $("select[id=timeRound]").val()*60 && $(this).attr('time') > 50) {
                                    $(this).parent().css("background", "yellow");
                                } else if ($(this).attr('time') == 50) {
                                    $(this).attr('time',0);
                                    $(this).siblings(".leftMinute").hide();
                                    $(this).siblings(".leftTips").hide();
                                    $(this).siblings(".reset").hide();
                                    $(this).parent().css("background", "white");
                                    $(this).hide();
                                    var d = new Date();
                                    $("#log").append("<p><font color='#ff0000'>" + d.getHours() + ":" + d.getMinutes() +"</font>" +$(this).parent().find("span:first-child").text() + "</p>");
                                    var song = $('#media').get(0);
                                    song.pause();
                                    song.currentTime = 1;
                        }
                   }
                });
            };


        $(document).ready(function() {
         
              setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              
              $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
                  
              }, 1000 );
              
         
              setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
                  
              }, 1000 );
        
              setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
                  
              }, 1000 );
         
        }); 
    
        
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-15889936-1']);
        _gaq.push(['_setDomainName', 'shuaizhu.com']);
        _gaq.push(['_trackPageview']);
        
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
