// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// https://github.com/jaz303/tipsy
// released under the MIT license
(function(e){function t(e,t){return typeof e=="function"?e.call(t):e}function n(e){while(e=e.parentNode){if(e==document)return true}return false}function r(t,n){this.$element=e(t);this.options=n;this.enabled=true;this.fixTitle()}r.prototype={show:function(){var n=this.getTitle();if(n&&this.enabled){var r=this.tip();r.find(".tipsy-inner")[this.options.html?"html":"text"](n);r[0].className="tipsy";r.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var i=e.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var s=r[0].offsetWidth,o=r[0].offsetHeight,u=t(this.options.gravity,this.$element[0]);var a;switch(u.charAt(0)){case"n":a={top:i.top+i.height+this.options.offset,left:i.left+i.width/2-s/2};break;case"s":a={top:i.top-o-this.options.offset,left:i.left+i.width/2-s/2};break;case"e":a={top:i.top+i.height/2-o/2,left:i.left-s-this.options.offset};break;case"w":a={top:i.top+i.height/2-o/2,left:i.left+i.width+this.options.offset};break}if(u.length==2){if(u.charAt(1)=="w"){a.left=i.left+i.width/2-15}else{a.left=i.left+i.width/2-s+15}}r.css(a).addClass("tipsy-"+u);r.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+u.charAt(0);if(this.options.className){r.addClass(t(this.options.className,this.$element[0]))}if(this.options.fade){r.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{r.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){e(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var e=this.$element;if(e.attr("title")||typeof e.attr("original-title")!="string"){e.attr("original-title",e.attr("title")||"").removeAttr("title")}},getTitle:function(){var e,t=this.$element,n=this.options;this.fixTitle();var e,n=this.options;if(typeof n.title=="string"){e=t.attr(n.title=="title"?"original-title":n.title)}else if(typeof n.title=="function"){e=n.title.call(t[0])}e=(""+e).replace(/(^\s*|\s*$)/,"");return e||n.fallback},tip:function(){if(!this.$tip){this.$tip=e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};e.fn.tipsy=function(t){function i(n){var i=e.data(n,"tipsy");if(!i){i=new r(n,e.fn.tipsy.elementOptions(n,t));e.data(n,"tipsy",i)}return i}function s(){var e=i(this);e.hoverState="in";if(t.delayIn==0){e.show()}else{e.fixTitle();setTimeout(function(){if(e.hoverState=="in")e.show()},t.delayIn)}}function o(){var e=i(this);e.hoverState="out";if(t.delayOut==0){e.hide()}else{setTimeout(function(){if(e.hoverState=="out")e.hide()},t.delayOut)}}if(t===true){return this.data("tipsy")}else if(typeof t=="string"){var n=this.data("tipsy");if(n)n[t]();return this}t=e.extend({},e.fn.tipsy.defaults,t);if(!t.live)this.each(function(){i(this)});if(t.trigger!="manual"){var u=t.live?"live":"bind",a=t.trigger=="hover"?"mouseenter":"focus",f=t.trigger=="hover"?"mouseleave":"blur";this[u](a,s)[u](f,o)}return this};e.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};e.fn.tipsy.revalidate=function(){e(".tipsy").each(function(){var t=e.data(this,"tipsy-pointee");if(!t||!n(t)){e(this).remove()}})};e.fn.tipsy.elementOptions=function(t,n){return e.metadata?e.extend({},n,e(t).metadata()):n};e.fn.tipsy.autoNS=function(){return e(this).offset().top>e(document).scrollTop()+e(window).height()/2?"s":"n"};e.fn.tipsy.autoWE=function(){return e(this).offset().left>e(document).scrollLeft()+e(window).width()/2?"e":"w"};e.fn.tipsy.autoBounds=function(t,n){return function(){var r={ns:n[0],ew:n.length>1?n[1]:false},i=e(document).scrollTop()+t,s=e(document).scrollLeft()+t,o=e(this);if(o.offset().top<i)r.ns="n";if(o.offset().left<s)r.ew="w";if(e(window).width()+e(document).scrollLeft()-o.offset().left<t)r.ew="e";if(e(window).height()+e(document).scrollTop()-o.offset().top<t)r.ns="s";return r.ns+(r.ew?r.ew:"")}}})(jQuery)


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(function () {
    // Choose
    $('.concern-wrap').on('click', '.concern-btn', function () {
        var _data = $(this).parents('.concern').find('.concern-info').html().replace('<br>', ' ');
        $('.concern-id').val(_data);
        if (_data === 'Benim derdim başka...') {
            $('.mail-form').addClass('else-open').removeClass('open');
            $('#sth-else').prop('disabled', false);
            $('#add-text').prop('disabled', true)
        } else {
            $('.mail-form').addClass('open').removeClass('else-open');
            $('#sth-else').prop('disabled', true);
            $('#add-text').prop('disabled', false)
        }
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        $('.concern').removeClass('selected');
        $(this).parents('.concern').addClass('selected');
    });

    // Form Submit
    $('.mail-form .send-btn').on('click', function (event) {
        event.preventDefault();
        var $mail = $('#mail'),
            $sthElse = $('#sth-else'),
            hasError = false;
        $mail.tipsy('hide');
        $sthElse.tipsy('hide');
        if ($mail.val() === '' || !validateEmail($mail.val())) {
            $mail.tipsy('show');
            hasError = true;
        }
        if (!$sthElse.prop('disabled') && $sthElse.val() === '') {
            $sthElse.tipsy('show');
            hasError = true;
        }
        //send form
        if (!hasError) {
            $('.mail-form').submit();
        } else {
            return false;
        }
    });

    // Tipsy
    $('.mail-form [rel=tipsy]').tipsy({
        trigger: 'manual',
        title: 'data-tooltip'
    });
});
