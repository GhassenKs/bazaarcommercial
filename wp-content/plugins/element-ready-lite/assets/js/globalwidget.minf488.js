!function(e){var t=function(e,t){var o=e,n=null;Boolean(elementorFrontend.isEditMode());(n=new Element_Ready_Widget_Plugin(o)).init(n)};Element_Ready_Widget_Plugin=function(t){var o=this,n=(t.data("id"),Boolean(elementorFrontend.isEditMode()));e(window),e("body"),navigator.platform;o.init=function(){return"undefined"!=t.data("tooltip_data")&&t.data("tooltip_data")&&o.tooltip_service(t),!1},o.tooltip_service=function(e){let t=e.data("tooltip_data");var o="yes"==t.enable_tooltip,n="yes"==t.default_open,i=t.tooltip_position?t.tooltip_position:"top",a=t.tooltip_target?t.tooltip_target:"element",l=(t.tooltip_enable_title,t.tooltip_title?t.tooltip_title:""),r=t.tooltip_content?t.tooltip_content:"",_=t.tooltip_behavior?t.tooltip_behavior:"hide",d="yes"==t.tooltip_cache,s="yes"==t.tooltip_close_btn,c=(t.tooltip_hide_false,t.tooltip_skin?t.tooltip_skin:"top"),m="yes"==t.tooltip_detach,y=t.tooltip_fadein_dealy?parseInt(t.tooltip_fadein_dealy):200,p=t.tooltip_fadeout_dealy?parseInt(t.tooltip_fadeout_dealy):200,u="yes"==t.hide_on_outside_click,k=t.tooltip_max_width?parseInt(t.tooltip_max_width):300,f=e.find(".elementor-widget-container"),w={title:l,behavior:_,cache:d,close:s,detach:m,fadeIn:y,fadeOut:p,position:i,skin:c,target:a,hideOnClickOutside:u,maxWidth:k};s&&(w.hideOn=!1),o&&(Tipped.create(f,r,w),n&&Tipped.show(f))},o.getSettings=function(t,o){var i=null,a={};return n?!!window.elementor.hasOwnProperty("elements")&&(!!(i=window.elementor.elements).models&&(e.each(i.models,function(e,o){t==o.id&&(a=o.attributes.settings.attributes)}),!!a.hasOwnProperty(o)&&a[o])):(t="section"+t,!(!window.element_ready_tooltip_data||!window.element_ready_tooltip_data.hasOwnProperty(t))&&(!!window.element_ready_tooltip_data[t].hasOwnProperty(o)&&window.element_ready_tooltip_data[t][o]))}};var o=!1,n=function(t){o||(o=!0,void 0!==window.elementor&&(elementor.settings.page.addChangeCallback("eready_cookie_consent_enable",_),elementor.settings.page.addChangeCallback("eready_cookie_consent_title",l),elementor.settings.page.addChangeCallback("eready_cookie_consent_message",r)),document.cookie.split(";").forEach(function(e){document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}),"yes"==element_ready_cookie_consent.enable&&($cookie_obj={onAccept:function(){d(0)},moreInfoLabel:element_ready_cookie_consent.more_info_lavel,acceptBtnLabel:element_ready_cookie_consent.accept_cookie_lavel,advancedBtnLabel:element_ready_cookie_consent.advanced_cookie_lavel,expires:element_ready_cookie_consent.expire,link:element_ready_cookie_consent.more_info_link.url,delay:parseInt(element_ready_cookie_consent.delay),uncheckBoxes:"yes"==element_ready_cookie_consent.cookie_unchecked,element_ready_cookie_consent:element_ready_cookie_consent,title:element_ready_cookie_consent.title||"Cookies & Privacy",message:element_ready_cookie_consent.message||"This website uses cookies to ensure you get the best experience on our website."},function(e){for(var t=e+"=",o=decodeURIComponent(document.cookie).split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}("element_ready_global")||e("body").ihavecookies($cookie_obj)))},i=function(e){var t=e,o=null;Boolean(elementorFrontend.isEditMode());(o=new Element_ready_Sticky_Menu_Plugin(t)).init(o)};Element_ready_Sticky_Menu_Plugin=function(t){var o=this,n=t.data("id"),i=Boolean(elementorFrontend.isEditMode()),a=e(window);e("body"),navigator.platform;o.init=function(){return o.element_ready_sticky(n),!1},o.element_ready_sticky=function(e){var n,i,l=110;n=o.getSettings(e,"element_ready_global_sticky"),i=o.getSettings(e,"element_ready_sticky_type"),(l=parseInt(o.getSettings(e,"element_ready_sticky_offset")))<5&&(l=110),"yes"==n?(t.addClass("element-ready-sticky-container"),"top"==i&&(t.addClass("top"),t.removeClass("bottom")),"bottom"==i&&(t.addClass("bottom"),t.removeClass("top")),""==i&&(t.removeClass("top"),t.removeClass("bottom")),a.on("scroll",function(e){a.scrollTop()<l?t.removeClass("element-ready-sticky"):t.addClass("element-ready-sticky")})):t.removeClass("element-ready-sticky-container")},o.getSettings=function(t,o){var n=null,a={};return i?!!window.elementor.hasOwnProperty("elements")&&(!!(n=window.elementor.elements).models&&(e.each(n.models,function(e,o){t==o.id&&(a=o.attributes.settings.attributes)}),!!a.hasOwnProperty(o)&&a[o])):(t="section"+t,!(!window.element_ready_section_sticky_data||!window.element_ready_section_sticky_data.hasOwnProperty(t))&&(!!window.element_ready_section_sticky_data[t].hasOwnProperty(o)&&window.element_ready_section_sticky_data[t][o]))}},Element_ready_Live_Button_Module=function(t){var o=this,n=t.data("id"),i=Boolean(elementorFrontend.isEditMode());e(window),e("body"),navigator.platform;o.init=function(){return o.element_ready_live_btn(n),!1},o.element_ready_live_btn=function(e){let n=wp.template("element-ready-live-btn"),i=!1,a="#",l="live copy";i=o.getSettings(e,"element_ready_pro_live_btn_enable"),l=o.getSettings(e,"element_ready_pro_live_btn_text"),a=o.getSettings(e,"element_ready_pro_live_link"),"yes"==i?(t.addClass("element-ready-pro-live-btn"),setTimeout(function(){t.append(n({text:l,link:a}))},2e3)):t.removeClass("element-ready-pro-live-btn")},o.getSettings=function(t,o){var n=null,a={};return i?!!window.elementor.hasOwnProperty("elements")&&(!!(n=window.elementor.elements).models&&(e.each(n.models,function(e,o){t==o.id&&(a=o.attributes.settings.attributes)}),!!a.hasOwnProperty(o)&&a[o])):(t="section"+t,!(!window.element_ready_pro_section_live_button_data||!window.element_ready_pro_section_live_button_data.hasOwnProperty(t))&&(!!window.element_ready_pro_section_live_button_data[t].hasOwnProperty(o)&&window.element_ready_pro_section_live_button_data[t][o]))}};var a=function(e){var t=e,o=null;Boolean(elementorFrontend.isEditMode());(o=new Element_ready_Live_Button_Module(t)).init(o)};function l(t){e("#gdpr-cookie-message > h4").html(t),elementor.saver.update({onSuccess:function(){element_ready_cookie_consent.title=t,elementor.reloadPreview(),elementor.once("preview:loaded",function(){elementor.getPanelView().setPage("page_settings")})}})}function r(t){e("#gdpr-cookie-message > p").html(t)}function _(t){$cookie__obj={onAccept:function(){d(0)},moreInfoLabel:element_ready_cookie_consent.more_info_lavel,acceptBtnLabel:element_ready_cookie_consent.accept_cookie_lavel,advancedBtnLabel:element_ready_cookie_consent.advanced_cookie_lavel,expires:element_ready_cookie_consent.expire,link:element_ready_cookie_consent.more_info_link.url,delay:parseInt(element_ready_cookie_consent.delay),uncheckBoxes:"yes"==element_ready_cookie_consent.cookie_unchecked,element_ready_cookie_consent:element_ready_cookie_consent,title:element_ready_cookie_consent.title||"Cookies & Privacy",message:element_ready_cookie_consent.message||"This website uses cookies to ensure you get the best experience on our website."},"yes"==t&&e("body").ihavecookies($cookie__obj),elementor.reloadPreview()}function d(e=!1,t="element_ready_global",o="Q"){var n=parseInt(element_ready_cookie_consent.expire);if(void 0!==n){var i=new Date;"day"==element_ready_cookie_consent.expire_type&&i.setTime(i.getTime()+24*n*60*60*1e3),"sec"==element_ready_cookie_consent.expire_type&&i.setTime(i.getTime()+1e3*n),"min"==element_ready_cookie_consent.expire_type&&i.setTime(i.getTime()+60*n*1e3),"hour"==element_ready_cookie_consent.expire_type&&i.setTime(i.getTime()+60*n*60*1e3);var a="; expires="+i.toGMTString()}else a="";document.cookie=e?t+"="+o+a+"; path=/":t+"="+o+a+";"}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/widget",t),"undefined"!=typeof element_ready_cookie_consent&&elementorFrontend.hooks.addAction("frontend/element_ready/global",n),elementorFrontend.hooks.addAction("frontend/element_ready/section",i),"undefined"!=typeof ercp&&elementorFrontend.hooks.addAction("frontend/element_ready/section",a)}),e(document).on("click",".element-ready-live-btn-wrp a",function(t){let o=e(this),n=o.text(),i=o.parent().parent().get(0),a=e(i).data("id");var l={action:"element_ready_fetch_live_copy_data",type:e(i).data("element_type"),section_id:a,post_id:elementorFrontend.config.post.id};fetch(ercp.ajaxurl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:e.param(l)}).then(e=>e.json()).then(e=>{let t=e.data;localStorage.clear(),xdLocalStorage.setItem("element-ready-ercp-element",JSON.stringify(t),function(e){o.html("<span>&#10003;</span> Copied section").css({"font-style":"italic"})}),setTimeout(function(){o.text(n).css({"font-style":"normal"})},1e3)}).catch(function(e){o.text("Copy error").css({"font-style":"italic"})})}),"undefined"!=typeof ercp&&xdLocalStorage.init({iframeUrl:ercp.script_url,initCallback:function(){}})}(jQuery);