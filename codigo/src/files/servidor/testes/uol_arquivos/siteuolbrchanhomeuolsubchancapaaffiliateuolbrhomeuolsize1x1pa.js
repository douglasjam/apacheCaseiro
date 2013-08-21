document.write('');
var DW = 288; // Largura 288 &eacute; o limite
var DH = 248; // Altura 364 &eacute; o limite
var swf_click = "http://bn.uol.com.br/event.ng/Type=click&FlightID=145455&AdID=334099&TargetID=219&ASeg=&AMod=&AOpt=0&Segments=23,51,138,211,221,386,500,753,864,2408,2881,3172,4040,4986,5300,5809,6329,6466,6736,6891,6925,6947,7412,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14411,14413,14421&Targets=219,9757,220,7281,874,7234,7994,8518,9376,22143&Values=51,60,85,100,133,150,204,237,286,321,342,350,356,375,381,394,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://www.magazineluiza.com.br/parceiro/visita_link.asp?parceiro=1973&link=/Linha_setores/selecao_produto_preco.asp%3Fselecao=7600*lst=32*tipoVitrine=vitrine_grande%26utm_source=uol%26utm_medium=dhtml-1%26utm_content=dhtml_namorados_288x248_tv_led_LG_imp_uol_20k%26utm_campaign=namorados";
var swf_file = "http://bn.imguol.com/1106/magazineluiza/uol/10/dhtml_namorados_288x248_tv_led_LG_imp_uol_20k.swf";
var clicktag = "clickTag";

// possivel na home 383_295
var DL = 482; var DT = 339; // Geral
var dcswf_click = escape(swf_click); var DEd = document; var DE_IE = navigator.appName.indexOf("Microsoft") != -1; 
DEd.write('<div ID="DEfly" Style="position:absolute;left:'+DL+'px;top:'+DT+'px;visibility:hidden; z-index:999999999;width:'+DW+'px;height:'+DH+'px;"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" WIDTH="'+ DW +'" HEIGHT="'+ DH +'" ALIGN=""><PARAM NAME=movie VALUE="'+swf_file+'"><PARAM NAME=FlashVars Value="'+clicktag+'='+dcswf_click +'"><PARAM NAME=loop VALUE=false><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><PARAM NAME=wmode VALUE=transparent><param name="allowScriptAccess" value="always"><embed src="'+swf_file+'?'+clicktag+'='+dcswf_click+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+DW+'" height="'+DH+'" WMODE="transparent" allowScriptAccess="always"></embed></OBJECT></div>');
function ac(){     ObjFly = DEobj("DEfly");  ObjFly.style.visibility = "visible"; hideObj();}
function ap(DEap){ ObjFly = DEobj("DEfly");	 ObjFly.style.visibility = "hidden";  showObj(); if(DEap != 0){ var IntPixAP = new Image(); IntPixAP.src= "http://bn.uol.com.br/event.ng/Type=close&FlightID=145455&AdID=334099&TargetID=219&Segments=23,51,138,211,221,386,500,753,864,2408,2881,3172,4040,4986,5300,5809,6329,6466,6736,6891,6925,6947,7412,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14411,14413,14421&Targets=219,9757,220,7281,874,7234,7994,8518,9376,22143&Values=51,60,85,100,133,150,204,237,286,321,342,350,356,375,381,394,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.imguol.com/1x1.gif?dgcsaKg,bgWfniIbWsweq" }}
function DEobj(s){if(DEd.layers){ return DEd.layers[s]; }else if(DEd.all && !DEd.getElementById){return DEd.all[s]; }else{ return DEd.getElementById(s); }}
var DEslct="homeuol"; DEslct = (DEslct=="bolhome" || DEslct=="biblioteca" || DEslct=="carros" || DEslct=="economia" || DEslct=="classificados" || DEslct=="educacao" || DEslct=="servicos" || DEslct=="cinema" || DEslct=="esporte")?1:0;
function hideObj() { 
if(DEslct == "1"){  for (i = 0; i < DEd.all.tags('SELECT').length; i++){obj = DEd.all.tags('SELECT')[i]; if (! obj || ! obj.offsetParent) continue; if (i >= 1){obj.style.visibility = "hidden";}}}}
function showObj() {
if(DEslct == "1"){  for (i = 0; i < DEd.all.tags('SELECT').length; i++){obj = DEd.all.tags('SELECT')[i]; if (! obj || ! obj.offsetParent) continue; obj.style.visibility = "";}}
}
function DE_startDH(){ setTimeout("ac()",100); setTimeout("ap('0')",12100); }
setTimeout("DE_startDH()",100);
// v2.5
document.write('');
DEd=document; var DEfVr="NaN"; plugin = (navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;
if(plugin) { 
	DEfVr = parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)); 
}else {
	 if(navigator.userAgent.indexOf("Mac")==-1) {
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
DEd.writeln('<\/sc' + 'ript>'); 
}}
var IntPix = new Image();
IntPix.src= "http://bn.uol.com.br/event.ng/Type=oferta"+DEfVr+"&FlightID=145455&AdID=334099&C=0&TargetID=219&Segments=23,51,138,211,221,386,500,753,864,2408,2881,3172,4040,4986,5300,5809,6329,6466,6736,6891,6925,6947,7412,8419,11033,12217,12406,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14411,14413,14421&Targets=219,9757,220,7281,874,7234,7994,8518,9376,22143&Values=51,60,85,100,133,150,204,237,286,321,342,350,356,375,381,394,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020&RawValues=&Redirect=http://bn.i.uol.com.br/1x1.gif?dgcsaKg,bgWfniIbWsweq";
document.write('');