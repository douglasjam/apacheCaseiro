document.write('');
var DEclk = "http://bn.uol.com.br/event.ng/Type=click&FlightID=144247&AdID=331480&TargetID=341&ASeg=&AMod=&AOpt=0&Segments=19,23,47,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=1,341&Values=51,60,85,100,150,199,204,237,286,321,342,350,356,375,381,389,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://nspmotion.com/LinkMultiSP.aspx?m=127404";
var DEgif = "http://bn.imguol.com/1104/itau/uol/27/relogio_120x36.gif";
var DEswf = "http://bn.imguol.com/1104/itau/uol/27/relogio_120x36.swf";
DEfV = 7;		// Versao do flash
var DEswfH = 60;	// Altura final
var DEwdth = 120;	// Largura
var DEgifH = 36;	// Altura inicial
var clicktag = "clickTag";

DEd=document; var DEplg=false,DEfVr=0; DEclk1=escape(DEclk); 
var plugin = (navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;
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
DEd.writeln('<\/script>'); }}
function DEhide(z,s) {s=(s == false)?"hidden":""; for (i = 0; i < DEd.all.tags('SELECT').length; i++){obj = DEd.all.tags('SELECT')[i]; if (! obj || ! obj.offsetParent) continue; if (i > 0){obj.style.visibility = s;}}}
function DEobj(s){if(DEd.layers){return DEd.layers[s];}else if(DEd.all && !DEd.getElementById) {return DEd.all[s];}else {return DEd.getElementById(s);}}
function DEexp(s,x,y,h){ obj = DEobj(s); obj.style.clip = 'rect(0px '+x+'px '+y+'px 0px)';
	// DEhide('',h);
	if(h==false){ var IntPix = new Image(); IntPix.src= "http://bn.uol.com.br/event.ng/Type=mouseover&FlightID=144247&AdID=331480&TargetID=341&Segments=19,23,47,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=1,341&Values=51,60,85,100,150,199,204,237,286,321,342,350,356,375,381,389,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.imguol.com/1x1.gif?dpvsKii,bgWfniwbWsuny";}}
var isIE = navigator.appVersion.indexOf("MSIE");
if(DEplg == true && DEfVr >= DEfV && (navigator.appVersion.indexOf("Windows")!= -1) && (((parseInt(navigator.appVersion.charAt(isIE+5))) >= 6) || navigator.userAgent.toLowerCase().indexOf("firefox/1"))){
DEd.write('<div id="DEDivItau2" style="position:relative; height:'+DEgifH+'px; width:'+DEwdth+'px; z-index:999999999;">');
DEd.write('<div id="DEDivItau1" style="position:absolute; height:'+DEswfH+'px; width:'+DEwdth+'px; top:0px; left:0px; clip:rect(0px '+DEwdth+'px '+DEgifH+'px 0px); z-index:1000;" onMouseOver=DEexp("DEDivItau1",'+DEwdth+','+DEswfH+',false) onMouseOut=DEexp("DEDivItau1",'+DEwdth+','+DEgifH+',true)>');
DEd.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+DEfV+',0,0,0" width="'+DEwdth+'" height="'+DEswfH+'"><param name="movie" value="'+DEswf+'"><PARAM NAME="flashvars" VALUE="'+clicktag+'='+DEclk1+'"><param name="quality" value="high"><param name="wmode" value="transparent"><PARAM NAME="allowScriptAccess" VALUE="always"><embed src="'+DEswf+'" flashvars="'+clicktag+'='+DEclk1+'" quality="high" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+DEwdth+'" height="'+DEswfH+'" WMODE="transparent"></embed></object>');
DEd.write('</div></div>');}
else{DEd.write('<a href="'+DEclk+'" target="_blank"><img src="'+DEgif+'" width='+DEwdth+' height='+DEgifH+' border=0></a>'); }
// v2.3 especial itau
document.write('<iframe id=\"DEprvwIfrm\" height=\"0\" width=\"0\" MARGINWIDTH=0 MARGINHEIGHT=0 FRAMEBORDER=0 SCROLLING=no src=\"http://nspmotion.com/AdvCounter.aspx?a=68664!127404!1\"></iframe>\n');
DEGMT = "2011.6.11.0.21.42.0"; 
DEGMT = DEGMT.split(".");DEGMTmes  = parseFloat(DEGMT[1]);DEGMTdia  = parseFloat(DEGMT[2]);DEGMThora = parseFloat(DEGMT[3]);DEGMTmin  = parseFloat(DEGMT[4]);
if(DEGMThora == 0 || DEGMThora == 1 || DEGMThora == 2){
	DEGMTdia = DEGMTdia - 1;
 	DEGMThora = DEGMThora + 21;
}else{
  DEGMThora = DEGMThora - 3;
}

function ReachCookie(tipo){
 ExpHou = 23 - DEGMThora;
 ExpMin = 59 - DEGMTmin;
ExpTotalMin = ExpMin + (ExpHou * 60);
DEevent = "";
if(tipo == "Mes"){
if(DEGMTmes == 1 || DEGMTmes == 3 || DEGMTmes == 5 || DEGMTmes == 7 || DEGMTmes == 8 || DEGMTmes == 10 || DEGMTmes == 12){
	DEmxMes = 31;
} else if(DEGMTmes == 4 || DEGMTmes == 6 || DEGMTmes == 9 || DEGMTmes == 11){
	DEmxMes = 30;
}else if(DEGMTmes == 2){
	DEmxMes = 28;
}
 ExpDay = DEmxMes - DEGMTdia;
 ExpTotalMin += (ExpDay * 24 * 60);
 DEevent = "Mes";
	}
if(tipo == "Vita"){
	ExpTotalMin = 1000000;
}
var expdate = new Date(); 
expdate.setTime(expdate.getTime() + (1000 * 60 * ExpTotalMin));
expdate=expdate.toGMTString(); 
document.cookie="Reach"+tipo+"=0;expires="+expdate+";path=/;domain=.uol.com.br";
var IntPix = new Image();
IntPix.src= "http://bn.uol.com.br/event.ng/Type=reach"+DEevent+"&FlightID=144247&AdID=331480&C=0&TargetID=341&Segments=19,23,47,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=1,341&Values=51,60,85,100,150,199,204,237,286,321,342,350,356,375,381,389,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.i.uol.com.br/1x1.gif?dpvsKii,bgWfniwbWsuny";
if(document.cookie.indexOf("Reach"+tipo)==-1) { 
	var IntPix = new Image();
  IntPix.src= "http://bn.uol.com.br/event.ng/Type=NoCookie"+DEevent+"&FlightID=144247&AdID=331480&C=0&TargetID=341&Segments=19,23,47,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14413,14421&Targets=1,341&Values=51,60,85,100,150,199,204,237,286,321,342,350,356,375,381,389,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.i.uol.com.br/1x1.gif?dpvsKii,bgWfniwbWsuny";
}
}
if(document.cookie.indexOf("ReachDia")==-1) { 
ReachCookie('Dia');
}
if(document.cookie.indexOf("ReachMes")==-1) { 
ReachCookie('Mes');
}
if(document.cookie.indexOf("ReachVita")==-1) { 
ReachCookie('Vita');
}
document.write('');