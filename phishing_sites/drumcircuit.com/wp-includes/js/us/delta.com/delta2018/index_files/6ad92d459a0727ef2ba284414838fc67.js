Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;(function(){function getQueryParams(str){var result={},params,param,counter,str=str||document.location.search||document.referrer;if(!str)return;params=str.replace("?","").split("\x26");for(counter=0;counter<params.length;counter++){param=params[counter].split("\x3d");try{result[param[0]]=window.decodeURIComponent(window.encodeURIComponent(param[1]||""))}catch(err){result[param[0]]=
""}}return result}var queryParams=getQueryParams();if(!Bootstrapper.Cookies||!queryParams||!queryParams.vendorID)return;var jsDateObj=new Date;jsDateObj.setDate(jsDateObj.getDate()+1);Bootstrapper.Cookies.set("metaVendorID",queryParams.vendorID,jsDateObj)})()},2461907,535333);
Bootstrapper.bindDependencyDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var delta=window.delta||{};delta.fssp=4;delta.fstsp=4;delta.fsisp=10;delta.fsomsp=15;delta.environment=""},2411463,[2329375],505931,[343086]);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){var dataLayer=delta.dataLayer.digitalData||"",pageName=dataLayer&&dataLayer.page&&dataLayer.page.pageInfo&&dataLayer.page.pageInfo.pageName||s&&s.pageName||"";return pageName},transform:function(val){return val?val:""},load:"page",trigger:Bootstrapper.data.whenValueExistsTrigger,
dataDefName:"pageName",collection:"global",source:"Manage",priv:"false"},{id:"52662"})},52662)},-1,-1);Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.insertScript("https://tkpi.delta.com/datacollectcode?id\x3d79992\x26cc\x3dctd")},1990745,463037);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){var value="; "+document.cookie;var parts=value.split("; pref\x3d");if(parts.length==2)return decodeURIComponent(parts.pop().split(";").shift())},transform:function(val){return val?val:""},load:"page",trigger:Bootstrapper.data.bottomOfBodyTrigger,dataDefName:"Country-Lang Pref Cookie",
collection:"Cookie Data",source:"Manage",priv:"false"},{id:"54164"})},54164)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){var dataLayer=delta.dataLayer.digitalData||"",skymilesNumberHashed=dataLayer&&dataLayer.attributes&&dataLayer.attributes.derived&&dataLayer.attributes.derived.skyMilesNumberHashed||"";return skymilesNumberHashed},transform:function(val){return val?val:""},load:"page",trigger:Bootstrapper.data.whenValueExistsTrigger,
dataDefName:"skymilesNumberHashed",collection:"global",source:"Manage",priv:"false"},{id:"52769"})},52769)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var pixelID="410621589144261";var locale="en_US"||"en_US";(function(n){if(window.fbq)return;n=window.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!window._fbq)window._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];Bootstrapper.insertScript("https://connect.facebook.net/"+locale+"/fbevents.js")})();fbq("init",pixelID);fbq("track",
"PageView")},1670030,438488);Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;window.ensPrivacy=false;(function(){var urlsToTest=["cartalacarte","assign","checkout","custlogin","mydelta","passengerinfo.action","reviewFlight.action","PCCOciweb","profile"];for(var i=0;i<urlsToTest.length;i+=1)if(document.location.href.indexOf(urlsToTest[i])>-1)ensPrivacy=true})()},2439435,538584);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){var dataLayer=delta.dataLayer.digitalData||"";var medallionStatus=dataLayer.user&&dataLayer.user.segment&&dataLayer.user.segment.medallionStatus||"";return medallionStatus},transform:function(val){return val?val:""},load:"page",trigger:Bootstrapper.data.whenValueExistsTrigger,dataDefName:"medallionStatus",
collection:"global",source:"Manage",priv:"false"},{id:"52614"})},52614)},-1,-1);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;(function(){function getQueryParams(str){var result={},params,param,counter,str=str||document.location.search||document.referrer;if(!str)return;params=str.replace("?","").split("\x26");for(counter=0;counter<params.length;counter++){param=params[counter].split("\x3d");try{result[param[0]]=window.decodeURIComponent(window.encodeURIComponent(param[1]||""))}catch(err){result[param[0]]=
""}}return result}var queryParams=getQueryParams();if(!Bootstrapper.Cookies||!queryParams||!queryParams.skyscanner_redirectid)return;var jsDateObj=new Date;jsDateObj.setDate(jsDateObj.getDate()+1);Bootstrapper.Cookies.set("skyscannerLinkID-Booking",queryParams.skyscanner_redirectid,jsDateObj)})()},2461905,534865);