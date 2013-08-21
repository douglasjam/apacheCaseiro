document.write('');
var DEBtclk = "http://bn.uol.com.br/event.ng/Type=click&FlightID=138692&AdID=334044&C=0&TargetID=12898&ASeg=&AMod=&AOpt=0&Segments=23,72,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,8464,10324,11033,11966,12217,12406,12640,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=12898,10981,16844&Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,382,402,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://www.fastshop.com.br/LAVADORA-E-SECADORA-DE-ROUPA-85KG--DISPLAY-DIGITAL-LED--SENSOR-AUTOMATICO-DE-CARGA--MOTOR-DIRECT-DRIVE--BRANCA---PRIME-LG---WD1403RD,product,LGWD1403RD,.aspx?par=arrobasuper&utm_source=uol&utm_medium=arroba_exp&utm_campaign=home&utm_content=ED_WD1403RD";
var DEBtgif = "http://bn.imguol.com/1106/fastshop/uol/09/uol_retangulo_expandable_300x250_450x375.jpg";
var DEBtswf = "http://bn.imguol.com/1106/fastshop/uol/09/uol_retangulo_expandable_300x250_450x375.swf";
DEfV = 8;		// Versao do flash
var DEswfH = 375;	// Altura final
var DEwdth = 450;	// Largura final
var DEgifWi= 300;	// Largura Inicial
var DEgifH = 250;	// Altura inicial
var clicktag = "clicktag";

var DEgifW = DEwdth - DEgifWi; DEd=document; var DEplg=false,DEfVr=0; DEBtclk1=escape(DEBtclk);
plugin = (navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;
if(plugin) { DEplg = true; DEfVr = parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)); }else { if(navigator.userAgent.indexOf("Mac")==-1) {
DEd.writeln('<scr'+'ipt language=VBScript>');
DEd.writeln('Dim hasPlayer, playerversion ');
DEd.writeln('hasPlayer = false ');
DEd.writeln('playerversion = 10 ');
DEd.writeln('Do While playerversion > 0 ');
DEd.writeln('On Error Resume Next ');
DEd.writeln('hasPlayer = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & playerversion))) ');
DEd.writeln('If hasPlayer = true Then Exit Do ');
DEd.writeln('playerversion = playerversion - 1');
DEd.writeln('Loop');
DEd.writeln('DEfVr = playerversion');
DEd.writeln('DEplg = hasPlayer');
DEd.writeln('</sc' + 'ript>'); }}
function DEhide334044(z,s) {s=(s == false)?"hidden":""; for (i = 0; i < DEd.all.tags('SELECT').length; i++){obj = DEd.all.tags('SELECT')[i]; if (! obj || ! obj.offsetParent) continue; if (i >= 0){obj.style.visibility = s;}}}
function DEobj334044(s){if(DEd.layers){return DEd.layers[s];}else if(DEd.all && !DEd.getElementById) {return DEd.all[s];}else {return DEd.getElementById(s);}}
function DEexpB334044(s,x,y,h,i){ obj = DEobj334044(s); obj.style.clip = 'rect(0px '+x+'px '+y+'px '+i+'px)'; DEhide334044('',h); if(h==false){ var IntPix = new Image(); IntPix.src= "http://bn.uol.com.br/event.ng/Type=mouseover&FlightID=138692&AdID=334044&C=0&TargetID=12898&Segments=23,72,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,8464,10324,11033,11966,12217,12406,12640,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=12898,10981,16844&Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,382,402,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.imguol.com/1x1.gif?cijvvaf,bgWfniAcaeexN";}}
var isIE = navigator.appVersion.indexOf("MSIE");
if(DEplg == true && DEfVr >= DEfV && (navigator.appVersion.indexOf("Windows")!= -1) && (((parseInt(navigator.appVersion.charAt(isIE+5))) >= 6) || navigator.userAgent.toLowerCase().indexOf("firefox/1"))){
DEd.write('<div id="DEBtDivExp2" style="position:relative; height:'+DEgifH+'px; width:'+DEgifWi+'px; z-index:1000;">');
DEd.write('<div id="DEBtDivExp1" style="position:absolute; height:'+DEswfH+'px; width:'+DEwdth+'px; top:0px; left:-'+DEgifW+'px; clip:rect(0px '+DEwdth+'px '+DEgifH+'px '+DEgifW+'px); z-index:1000;" onMouseOver=DEexpB334044("DEBtDivExp1",'+DEwdth+','+DEswfH+',false,0) onMouseOut=DEexpB334044("DEBtDivExp1",'+DEwdth+','+DEgifH+',true,'+DEgifW+')>');
DEd.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+DEfV+',0,0,0" width="'+DEwdth+'" height="'+DEswfH+'"><param name="movie" value="'+DEBtswf+'"><PARAM NAME="flashvars" VALUE="'+clicktag+'='+DEBtclk1+'"><param name="quality" value="high"><param name="wmode" value="transparent"><PARAM NAME="allowScriptAccess" VALUE="always"><embed src="'+DEBtswf+'" flashvars="'+clicktag+'='+DEBtclk1+'" quality="high" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+DEwdth+'" height="'+DEswfH+'" WMODE="transparent"></embed></object>');
DEd.write('</div></div>');}
else{DEd.write('<a href="'+DEBtclk+'" target="_blank"><img src="'+DEBtgif+'" width='+DEgifWi+' height='+DEgifH+' border=0></a>'); }
Expble = 0;
// v2.3
document.write('');