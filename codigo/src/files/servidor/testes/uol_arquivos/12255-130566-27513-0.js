var mojopro2 = window.location.protocol;
if (mojopro2 == "https:") {
mojosrc = "https://secure.img-cdn.mediaplex.com/0/documentwrite.js";
}
else
  {
mojosrc = "http://img-cdn.mediaplex.com/0/documentwrite.js";
  };
var jssrc = '<scr' + 'ipt type="text/javascript" src="' + mojosrc + '"></scr' + 'ipt>';
if( window.DocumentWrite ){
    DocumentWrite( jssrc );
}
  else {
    document.write( jssrc );
};
//-->
 
(function(){
var mojopro = window.location.protocol;
if (mojopro == "https:") {
mojopro = "https://secure.img-cdn.mediaplex.com/0/";
}
else  {
mojopro = "http://img-cdn.mediaplex.com/0/";
  };  
var mpvce = '<mpvce/>';
if (mpvce == 1) {
mpvclick = encodeURIComponent("http://bn.uol.com.br/event.ng/Type=click%26FlightID=142847%26AdID=333960%26C=0%26TargetID=9764%26ASeg=%26AMod=%26AOpt=0%26Segments=13,23,138,211,386,500,2408,2881,3172,3233,4040,4786,4986,5047,5300,5779,5804,6466,6730,6891,6925,6947,7455,7457,8419,9197,10175,11033,11966,12217,12406,12473,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14409,14413,14421%26Targets=11,8665,3780,21165,21179,21619,21638,21798,21880,21910,21989,22061,22126,9764,9800,7229,8527,9428,9429,12129,13509,16844,21158,17705,22144%26Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,381,388,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020%26RawValues=%26Redirect=");
mpvc = mpvclick;
}
else if (mpvce == 2) {
mpvclick2 = encodeURIComponent("http://bn.uol.com.br/event.ng/Type=click%26FlightID=142847%26AdID=333960%26C=0%26TargetID=9764%26ASeg=%26AMod=%26AOpt=0%26Segments=13,23,138,211,386,500,2408,2881,3172,3233,4040,4786,4986,5047,5300,5779,5804,6466,6730,6891,6925,6947,7455,7457,8419,9197,10175,11033,11966,12217,12406,12473,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14409,14413,14421%26Targets=11,8665,3780,21165,21179,21619,21638,21798,21880,21910,21989,22061,22126,9764,9800,7229,8527,9428,9429,12129,13509,16844,21158,17705,22144%26Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,381,388,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020%26RawValues=%26Redirect=");
mpvc = encodeURIComponent(mpvclick2);
}
else
  {
mpvc = ("http://bn.uol.com.br/event.ng/Type=click%2526FlightID=142847%2526AdID=333960%2526C=0%2526TargetID=9764%2526ASeg=%2526AMod=%2526AOpt=0%2526Segments=13,23,138,211,386,500,2408,2881,3172,3233,4040,4786,4986,5047,5300,5779,5804,6466,6730,6891,6925,6947,7455,7457,8419,9197,10175,11033,11966,12217,12406,12473,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14409,14413,14421%2526Targets=11,8665,3780,21165,21179,21619,21638,21798,21880,21910,21989,22061,22126,9764,9800,7229,8527,9428,9429,12129,13509,16844,21158,17705,22144%2526Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,381,388,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020%2526RawValues=%2526Redirect=");
  }; 
var mpcke = '<mpcke/>';
if (mpcke == 1) {
mpcclick = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F12255-130566-27513-0%3Fmpt%3DccjwKbp%2CbgWfniwcaevzw");
mpck = "http://" + mpcclick;
}
else if (mpcke == 2) {
mpcclick2 = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F12255-130566-27513-0%3Fmpt%3DccjwKbp%2CbgWfniwcaevzw");
mpck = "http://" + encodeURIComponent(mpcclick2);
}
else
  {
mpck = ("http://altfarm.mediaplex.com%2Fad%2Fck%2F12255-130566-27513-0%3Fmpt%3DccjwKbp%2CbgWfniwcaevzw");
  };
var mp_swver = 0, mp_html = "";
if( navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ) {
  if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
    mp_swver = (navigator.plugins["Shockwave Flash"].description.split( " " ))[2];
  }
} else if ( navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && ( navigator.userAgent.indexOf("Windows") >= 0 ) ) {
var mp_axo,e;
  for( var mp_i = 11; mp_i > 6; mp_i-- ) {
    try {
    mp_axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + mp_i );
    mp_swver = mp_i;
    break;
    } catch (e) {}
  }
}
if( mp_swver >= 6 ) {
  mp_html =  '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
  mp_html += ' codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" id="7753225" name="movie7753225" width="300" height="250">';
  if( mp_swver > 5 ) {
    mp_html += '<param name="FlashVars" value="clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
    mp_html += '<param name="movie" value="' + mojopro + '12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250.swf">';
    mp_html += '<param name="wmode" value="opaque">';
    mp_html += '<param name="allowscriptaccess" value="always">';
  } 
  else {
    mp_html += '<param name="movie" value="' + mojopro + '12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250.swf?clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
  	mp_html += '<param name="wmode" value="opaque">';
  	mp_html += '<param name="allowscriptaccess" value="always">';
  }
  if( mp_swver > 5 ) {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" name="12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250." src="' + mojopro + '12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250.swf" FlashVars="clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  else {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" NAME="12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250." src="' + mojopro + '12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250.swf?clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  mp_html += ' swLiveConnect="false" width="300" height="250" type="application/x-shockwave-flash" pluginspage="">';
  mp_html += '</embed>';
  mp_html += '</object>';
  if( window.DocumentWrite )
    DocumentWrite( mp_html );
  else
    document.write( mp_html );
} else if( !( navigator.appName && navigator.appName.indexOf("Netscape") >= 0 && navigator.appVersion.indexOf("2.") >= 0 ) ) {
  document.write('<a href="http://bn.uol.com.br/event.ng/Type=click%26FlightID=142847%26AdID=333960%26C=0%26TargetID=9764%26ASeg=%26AMod=%26AOpt=0%26Segments=13,23,138,211,386,500,2408,2881,3172,3233,4040,4786,4986,5047,5300,5779,5804,6466,6730,6891,6925,6947,7455,7457,8419,9197,10175,11033,11966,12217,12406,12473,13328,13879,13934,13935,14135,14137,14138,14160,14163,14225,14229,14261,14374,14393,14409,14413,14421%26Targets=11,8665,3780,21165,21179,21619,21638,21798,21880,21910,21989,22061,22126,9764,9800,7229,8527,9428,9429,12129,13509,16844,21158,17705,22144%26Values=51,60,85,100,150,196,204,237,286,321,342,350,356,375,381,388,409,434,484,593,642,958,959,998,1039,12349,12358,12406,12575,15020%26RawValues=%26Redirect=http://altfarm.mediaplex.com/ad/ck/12255-130566-27513-0?mpt=ccjwKbp,bgWfniwcaevzw" target="_blank"><img src="http://img-cdn.mediaplex.com/0/12255/130566/br_consumer_i14_ci3_valentine_1599_FY12Q2W7_uol_home_arroba_JMP_300x250.jpg" width="300" height="250" border="0" alt=""></a>');
}
})();
//-->

