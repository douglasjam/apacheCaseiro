document.write('<!-- Sniffer Code for Flash version=100 -->\n');
<!--
var swf_click = "http://bn.uol.com.br/event.ng/Type=click&FlightID=144926&AdID=333954&C=0&TargetID=19088&ASeg=&AMod=&AOpt=0&Segments=23,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13056,13059,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14282,14374,14393,14413,14421&Targets=19088,21827,18868&Values=51,60,85,100,150,204,237,286,321,342,350,356,375,381,386,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,14750,15020&RawValues=&Redirect=http://www.submarino.com.br/portal/home-portais/23801102/23834027/?offset=0&limit=20&order=sellRankingQty&dir=desc&listid=sl10netnotefelipe&coup_num=17-GUS70-00001-0408279051&WT.mc_id=Uol_shop&WT.mc_ev=Click&utm_source=portais&utm_medium=uol&utm_campaign=shopping&franq=301570";
var dcswf_click = escape(swf_click);
var ShockMode = 0;
var flash_vars = "";
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;

flash_vars="clickTag="+dcswf_click+"&clickTag="+dcswf_click+"&clickTAG="+dcswf_click+"&clicktag="+dcswf_click;

if (plugin && parseInt(plugin.description.substring(plugin.description.indexOf(".")-2)) >= 10)
{
ShockMode = 1;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0
&& (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
document.write('<SCRIPT LANGUAGE=VBScript\> \n');
document.write('on error resume next \n');
document.write('ShockMode = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.10")))\n');
document.write('<\/SCRIPT\> \n');
}
if ( ShockMode ) {
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
document.write(' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"');
document.write(' ID=flashad WIDTH=200 HEIGHT=78>');
document.write(' <PARAM NAME=movie VALUE="http://bn.imguol.com/1106/submarino/uol/09/200x78_notesemp_23801102.swf"> ');
document.write(' <PARAM NAME="quality" VALUE="autohigh"> ');
document.write(' <PARAM NAME="FlashVars" VALUE="' + flash_vars + '"> ');
document.write(' <PARAM NAME="allowScriptAccess" VALUE="always"> ');
document.write(' <PARAM NAME="wmode" VALUE="opaque"> ');
document.write(' <EMBED SRC="http://bn.imguol.com/1106/submarino/uol/09/200x78_notesemp_23801102.swf" FlashVars="'+ flash_vars +'" quality="autohigh" allowScriptAccess="always"');
document.write(' NAME=flashad swLiveConnect=TRUE WIDTH=200 HEIGHT=78 WMODE="opaque"');
document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://get.adobe.com/flashplayer/">');
document.write('</EMBED>');
document.write('</OBJECT>');
} else {
document.write('<A HREF="http://bn.uol.com.br/event.ng/Type=click&FlightID=144926&AdID=333954&C=0&TargetID=19088&ASeg=&AMod=&AOpt=0&Segments=23,138,211,386,500,2408,2881,3172,4040,4986,5300,6466,6891,6925,6947,8419,11033,12217,12406,13056,13059,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14282,14374,14393,14413,14421&Targets=19088,21827,18868&Values=51,60,85,100,150,204,237,286,321,342,350,356,375,381,386,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,14750,15020&RawValues=&Redirect=http://www.submarino.com.br/portal/home-portais/23801102/23834027/?offset=0&limit=20&order=sellRankingQty&dir=desc&listid=sl10netnotefelipe&coup_num=17-GUS70-00001-0408279051&WT.mc_id=Uol_shop&WT.mc_ev=Click&utm_source=portais&utm_medium=uol&utm_campaign=shopping&franq=301570" target="_blank"><IMG SRC="http://bn.imguol.com/1106/submarino/uol/09/200x78_notesemp_23801102.gif" WIDTH=200 HEIGHT=78 BORDER=0></A>');
}
//-->
document.write('');