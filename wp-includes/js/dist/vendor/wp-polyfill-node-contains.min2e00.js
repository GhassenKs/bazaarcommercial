!function(){function t(t){if(!(0 in arguments))throw new TypeError("1 argument is required");do{if(this===t)return!0}while(t=t&&t.parentNode);return!1}if("HTMLElement"in this&&"contains"in HTMLElement.prototype)try{delete HTMLElement.prototype.contains}catch(t){}"Node"in this?Node.prototype.contains=t:document.contains=Element.prototype.contains=t}();;