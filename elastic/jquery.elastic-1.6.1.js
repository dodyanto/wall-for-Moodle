(function(f){f.fn.extend({elastic:function(){var d=['paddingTop','paddingRight','paddingBottom','paddingLeft','fontSize','lineHeight','fontFamily','width','fontWeight'];return this.each(function(){if(this.type!='textarea'){return false}var $textarea=f(this),$twin=f('<div />').css({'position':'absolute','display':'none'}),lineHeight=parseInt($textarea.css('line-height'),10)||parseInt($textarea.css('font-size'),'10'),minheight=parseInt($textarea.css('height'),10)||lineHeight*3,maxheight=parseInt($textarea.css('max-height'),10)||Number.MAX_VALUE,goalheight=0,i=0;$twin.appendTo($textarea.parent());var i=d.length;while(i--){$twin.css(d[i].toString(),$textarea.css(d[i].toString()))}function setHeightAndOverflow(a,b){curratedHeight=Math.floor(parseInt(a,10));if($textarea.height()!=curratedHeight){$textarea.css({'height':curratedHeight+'px','overflow':b})}}function update(){var a=$textarea.val().replace(/<|>/g,' ').replace(/\n/g,'<br />').replace(/&/g,"&amp;");var b=$twin.html();if(a+'&nbsp;'!=b){$twin.html(a+'&nbsp;');if(Math.abs($twin.height()+lineHeight-$textarea.height())>3){var c=$twin.height()+lineHeight;if(c>=maxheight){setHeightAndOverflow(maxheight,'auto')}else if(c<=minheight){setHeightAndOverflow(minheight,'hidden')}else{setHeightAndOverflow(c,'hidden')}}}}$textarea.css({'overflow':'hidden'});$textarea.keyup(function(){update()});$textarea.live('input paste',function(e){setTimeout(update,250)});update()})}})})(jQuery);
