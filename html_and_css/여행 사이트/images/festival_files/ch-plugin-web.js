!function(){var e;if(e=window.navigator.userAgent,!/(Opera\/.+Opera Mobi.+Version\/((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(Opera\/((10|11)\.0|11\.1|11\.5|12\.(0|1)).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(SamsungBrowser\/((4|5)\.0|5\.4))|(IEMobile[ /](10|11)\.0)|(Android Eclair)|(Android Froyo)|(Android Gingerbread)|(Android Honeycomb)|(PlayBook.+RIM Tablet OS (7\.0|10\.0)\.\d+)|((Black[bB]erry|BB10).+Version\/(7\.0|10\.0)\.\d+)|(Trident\/6\.0)|(Trident\/5\.0)|(Trident\/4\.0)|(([MS]?IE) (5\.5|([6-9]|10)\.0))/.test(e)&&window.navigator.cookieEnabled&&(!window.document.documentMode||(document.cookie="ch-session-test=1",document.cookie.split("ch-session-test=").length>=2&&(document.cookie="ch-session-test=; Max-Age=0",1)))){if(!document.getElementById("ch-plugin")){var i=document.createElement("div");i.id="ch-plugin",document.body.appendChild(i)}document.getElementById("ch-plugin").innerHTML+='<div id="ch-plugin-core"></div><div id="ch-plugin-script" style="display:none"><iframe id="ch-plugin-script-iframe" style="position:relative!important;height:100%;width:100%!important;border:none!important;"></iframe></div>';var t=document.getElementById("ch-plugin-script-iframe"),n=!1,o=function(){var e=t.contentDocument||t.contentWindow.document;e.open(),e.write('<script async type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-core.680791a6.vendor.js" charset="UTF-8"><\/script>'),e.write('<script async type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-core-20220106202832.js" charset="UTF-8"><\/script>'),e.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="main"></div></body></html>'),e.close(),n=!0};t.onload||o(),t.onload=function(){n||o()}}}();