/*
4.12.  
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
杀猪盘切勿投资！！！！

签到3天换大米
变量  dr_data
手动抓包https://yuasg.com任意一个里面的的body
 
*/
 
 
 
var _0xod5='jsjiami.com.v6',_0xod5_=['‮_0xod5'],_0x4e24=[_0xod5,'wrlMwq/DsUI=','UcODNhUX','NlDCsMOnFQ==','w7bDokM1','w6ZIw6rCu2Q=','MEk9YGY=','w7LDqMK5Ew==','w6bDulF0w5I=','wpgRwr5Wwok=','w4kPBQ==','TcKOEA3DoA==','w6omMcKKYw==','Sz3CuGg=','wo/CpsKzX8Os','MMKiJ37ChQ==','CsKOw5DDjsOz','RMKgDDY=','L8OQwoPCtMOR','LsOCwqfCoQ==','ScKvDDLDosO3R8Op','JsOMwrQ=','UMKyPhDDsw==','RSjClWIg','TsOrPkJS','NuOCueWEnuetuuWKuuOAmEHDnA==','w5R5cMKh','w57Cu0x3wqt9GMKz','w4tfw4k=','wpfDm8Okw7c+','w7XDpsKpFw==','w43Cu0Z6wqU=','EXjCicOeBcKXw7Y=','w6TDrMKzPSY=','w4JTSMKkTg==','X01fwpg=','w7bDpV8vGw==','wrHDlsO+woHDncKZAA==','w4EBFsKN','w5Iyw6zDsEEzw5fCiQ==','w4gTBQ==','w7zDiMK1LDE=','44GH6ISe5p2554qH5oCw44OI','DEoK','wo/CrMKuScO0wp8j','T8OsEjs=','w4pVw53CpEcaw7c=','5aSD6JySR2hNA+etseWItw==','wrvDt0rDlsKTw6E=','AXPCv2wBSMKjXhZoNCc=','w6wXXMOEMMOA','woXCrMKpTMO0wpQ=','H1jDszBDXsKMTMOuwqcawolf','w5VQw54cw64I','SjLCug==','woAsNR55w7FL','w5w5w6zDo0ct','w6EWTcOPNcOReT7Dsw==','w5hscMKwcMKVYTEowpd6EMOBJsOCw48Q','VsKzw6LCkMOkMMO6','w6MxJMKhUQ==','w4fCvwRYfTBLw4kFw47DhMKW','w4lMw7Ikw4Y=','w7pSQ8OScw==','w7AJM8K2YQ==','w4Njw6zChlE=','w7TDhloLGQ==','LWE6Zmg=','LMK7w43Dh8O+Ug==','w74IDsKF','MjgoE3PDrhs=','w6kYCcKbcXE=','wqZSVS3DqQ==','w4PCicOnw6fDvsKxwoE=','QMOtOE18J24=','wq3CjMOu','COODu+WAleWSpuaPiOelueOCre++h+S9nOazkOafhOWjq+WHrcKPwrzotJHkuZ/lmqc=','Fk/DnydDTcKI','MeOAvOWCkOWTs+aPkuelo+OAhe++seS+oOayvuadsuWhveWHmxco6LWp5LqX5Zig','eHBxWj/Ct1fDgz8qwo7DqsKY5YSx','5Lu16LSA5Y+VGE8DLsKHwp8Uw5TDu8OIw6Ubw7Ql','EsOMwqHCucO/','w4jCicO9w6TDq8Kt','OTI7','w5blvrPlpYbjg6LlppvonbNF6La55oqIwq4=','w43CgsO3w6bDpw==','RsOMAFPDkw==','Q2opwrNrPcOD','w4rCoz9ZZAtM','wqTCjcO/','woM7Hh55w7FL','Ji0wHmY=','wpVHwoc=','wpduwoA=','wrtUfVEDWmI=','w7rDosKkBQ==','WsOGHUHDq2oT','w4jCg8O0','dOODuOWDsOWQpOaMmeennuOAqu++vOS9suaymuach+WjpOWHv8KDw4jotIjkuJDlmaQ=','b8KOw53Dn3kkw5k=','AnHDoSRCAcOAHE8sf3NI5Yej','V8Kzw7/ChMOxPw==','5Lm/6LW75Y6rWj/Ct1fDgz8qwo7DqsKYbXRMwrA=','wosmJg==','wqvCoB1sUwRaI1xuw5UEw4vlhbY=','w4kFDMKLfsKx','w7vCoilFRg==','OTgyEGbDsg==','wrvChcKxcMOy','D0LDjjZo','wroAwoRMwq4=','w6bDjHJTw6c=','wonCiMKNccOP','SMOwAA==','wozlvo3lp7vjgZHlpZnonqRX6LSo5omGYw==','csKyMcKVGQ==','UcO4DDY=','wqZYTwLDoMOJw6k=','w6oPIsKJcWlJ','DQbDmsOVw7c=','wrlPTFQOQno=','6ISY5p+H54iY5oKt77yC','w55QeMONSQ==','wq/jgbDnrJzli5zjgJvDo8O0','w7HCq8OJw6/Diw==','asK4w43Dn28=','wr/DvMOFw5k/','QcKwOMK6LQ==','w6hfw6TCh1U=','w7zDtMK6','w6gBYcOYNcOCfQ==','f8K9IcKR','wr/Dt2M=','w40UFsKcecOjw7tawqbCpsKqw7HCoENTNznDv0/Cv8OIw6syAsKJwpPDvcOew5LCjkMWKm3DnsKKw5BYw49PVsKPQMO7YMO8w6rCjMKBw4csHDUAwr/DtMOGwrPDlxvDsjcrwoJqw5dvHQAGwroMbzZEwrjDvsOcJVfCng==','YSIg','HgbDnMOFw7o=','KcKnw6Q=','JcOkwqHCisOq','wojCisOzBlM=','SmsRwr4=','wrbCgsOgPQ==','IGU8RQ==','wr9uwok7wos=','w58WVcOSMw==','w604w7/DvVw=','UcKYw4LChsOs','wrDDnMOq','T0EXwodn','w6MOGg==','wrJDUUYDSWY=','w61Hw6vCpn8=','LcKRw6LDuMO3','w51rYw==','woHDosO3w7cSKsOS','WsKiaMOBcX0=','woLDlUDDssKZ','wo0fNC9R','ccOGFW3DpmUaw5NSTXPClUQtw50AbnDDrcKdw7DCuGjDqDEgV3/CsnlaHsOIaMOYa8K+wr1OM2kbw7U+wrEkwowAK8KMX8Kjw6pSw6HCvsO6BsKRwprChsKzB8KIPBPDiAxlfUvDs8K7w71gw7fCrMOgwrPDksOgFV/Dsx9VXzUGwpM0w7I2W2fDpMOtVXfDk8KBRloCw7vCgjnCh0XCu8OWwr40EMKOwqvDq8Kzw5EaVjjDjsKHwrM4wrTCqcO6wp5dw4/DocKmOEDDvMOMCsOCDEdjA3gRFXwqFW/CtMK3Jh8RbsK8wqTDrHQgfy/Dh2bDjcOIw7DDnsOwcsOgMUJiw6TCulzCt8OTIFjCq8KqJBdtU8OAw6RowrsQw6MuMA==','wpfCssOnC3c=','VsOMH31r','VsO8EEJu','w59Ow6o0w7o=','R8OEMwQG','wodZXSDDsw==','BsOiwrvClMOK','w6kuLsKDfQ==','U2jCicOIFsOfw6BTw6MX','T8K4bsO3ZCExwpPDvA==','w5osw6jDuU8iw5fCkU1Mw4/DmwteesO2wrrDgCDDosKXKiJwdcO6KsK7H8KMw5zCuBo=','wrVMciwI','wrjDksO5wpM=','X8OGC2E=','L3I0fkk=','H1bCsMOvEw==','w5x3Yw==','ZcO+GTov','wqnjg53nrKXliIzjgI1+Cg==','TcKyHw==','OmEmQlDCvsKV','wq8SwrRbwpU=','w4FzasKIYg==','J8OoMA==','SXkbwrI=','f8K9w5/CksOW','wprDgMOUwqbDvw==','dyw6wrAC','LsO6I8K+','w5Y5w6vDpkcmw5M=','bsOmDmdo','VnMYwp9r','M2UhUA==','w5bjgqPlgLblk7jmjaznp4TjgbTvvoXkv5/msK/mn4blo57lhJUDw77ot7bkuJjlmJA=','wphIXAnDmw==','EsKHLA==','w5FGw6MAw6sKwqY=','wozjgp3lgovlkYvmjq7npJPjgabvvJTkvJHms6Lmn7HloYLlhb9kZOi1nOS5heWbjw==','w7TDv1MOPw==','w7jjgJDkvq/poLvjgL16woA=','w6HjgbHinrbvuLDjg6zCinE=','K+OCneWEjuesoOWJt+OBnW5r','GhIQIn8=','YsKpNMKDBntBd8Kf','K8OrJ8KzIwIEwrXCi8OfA8K1wobCncKywqUiExg8D8KYehfDgMODw7DDjMKXPwzCumE=','w6bDnsKoNAQ=','WsKLNwfDiQ==','OXQDfHY=','f8OnZ8KjeR1Xwr3DlMOMXMOmw4rDjMOy','KMOBMMKIBg==','AiXDmMOAw4c=','w4vjgK3otJ3ljpHjgpDCh8Ko','wo/CjcKlUsOm','AsOXJcK5Hw==','w5czw78=','w6wQFkvCrMKQwqXCpcKADcKhw4pl5YWL','5Lqa6LS+5Y+zw60uwoJjM3zDjzZOwoslwozCjXc=','AVrCtU9g','jBsQjuwiaGmGi.VcJLXofmM.vdl6JV=='];if(function(_0x392cb3,_0x48a7e9,_0xa6d6cb){function _0x41556a(_0x1146dd,_0x432f4a,_0x5ab8ac,_0x3d4978,_0x1235cd,_0x1bb8ac){_0x432f4a=_0x432f4a>>0x8,_0x1235cd='po';var _0x21708c='shift',_0x26ac90='push',_0x1bb8ac='‮';if(_0x432f4a<_0x1146dd){while(--_0x1146dd){_0x3d4978=_0x392cb3[_0x21708c]();if(_0x432f4a===_0x1146dd&&_0x1bb8ac==='‮'&&_0x1bb8ac['length']===0x1){_0x432f4a=_0x3d4978,_0x5ab8ac=_0x392cb3[_0x1235cd+'p']();}else if(_0x432f4a&&_0x5ab8ac['replace'](/[BQuwGGVJLXfMdlJV=]/g,'')===_0x432f4a){_0x392cb3[_0x26ac90](_0x3d4978);}}_0x392cb3[_0x26ac90](_0x392cb3[_0x21708c]());}return 0xde305;};return _0x41556a(++_0x48a7e9,_0xa6d6cb)>>_0x48a7e9^_0xa6d6cb;}(_0x4e24,0x1dc,0x1dc00),_0x4e24){_0xod5_=_0x4e24['length']^0x1dc;};function _0x3874(_0x2a48c5,_0x2272e6){_0x2a48c5=~~'0x'['concat'](_0x2a48c5['slice'](0x1));var _0x4b6498=_0x4e24[_0x2a48c5];if(_0x3874['kLdzqD']===undefined){(function(){var _0x58e670=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x356066='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x58e670['atob']||(_0x58e670['atob']=function(_0x2b38af){var _0x264be1=String(_0x2b38af)['replace'](/=+$/,'');for(var _0x1bfb8d=0x0,_0x1bed11,_0x4dd1fb,_0x3f594c=0x0,_0x5480d2='';_0x4dd1fb=_0x264be1['charAt'](_0x3f594c++);~_0x4dd1fb&&(_0x1bed11=_0x1bfb8d%0x4?_0x1bed11*0x40+_0x4dd1fb:_0x4dd1fb,_0x1bfb8d++%0x4)?_0x5480d2+=String['fromCharCode'](0xff&_0x1bed11>>(-0x2*_0x1bfb8d&0x6)):0x0){_0x4dd1fb=_0x356066['indexOf'](_0x4dd1fb);}return _0x5480d2;});}());function _0x30482e(_0x1022b3,_0x2272e6){var _0x1ef5c1=[],_0x2095b5=0x0,_0x163bfb,_0x5e7e82='',_0x3676c1='';_0x1022b3=atob(_0x1022b3);for(var _0xe9aefb=0x0,_0xf03459=_0x1022b3['length'];_0xe9aefb<_0xf03459;_0xe9aefb++){_0x3676c1+='%'+('00'+_0x1022b3['charCodeAt'](_0xe9aefb)['toString'](0x10))['slice'](-0x2);}_0x1022b3=decodeURIComponent(_0x3676c1);for(var _0x1f6da3=0x0;_0x1f6da3<0x100;_0x1f6da3++){_0x1ef5c1[_0x1f6da3]=_0x1f6da3;}for(_0x1f6da3=0x0;_0x1f6da3<0x100;_0x1f6da3++){_0x2095b5=(_0x2095b5+_0x1ef5c1[_0x1f6da3]+_0x2272e6['charCodeAt'](_0x1f6da3%_0x2272e6['length']))%0x100;_0x163bfb=_0x1ef5c1[_0x1f6da3];_0x1ef5c1[_0x1f6da3]=_0x1ef5c1[_0x2095b5];_0x1ef5c1[_0x2095b5]=_0x163bfb;}_0x1f6da3=0x0;_0x2095b5=0x0;for(var _0x300c32=0x0;_0x300c32<_0x1022b3['length'];_0x300c32++){_0x1f6da3=(_0x1f6da3+0x1)%0x100;_0x2095b5=(_0x2095b5+_0x1ef5c1[_0x1f6da3])%0x100;_0x163bfb=_0x1ef5c1[_0x1f6da3];_0x1ef5c1[_0x1f6da3]=_0x1ef5c1[_0x2095b5];_0x1ef5c1[_0x2095b5]=_0x163bfb;_0x5e7e82+=String['fromCharCode'](_0x1022b3['charCodeAt'](_0x300c32)^_0x1ef5c1[(_0x1ef5c1[_0x1f6da3]+_0x1ef5c1[_0x2095b5])%0x100]);}return _0x5e7e82;}_0x3874['xXGikP']=_0x30482e;_0x3874['saVHnq']={};_0x3874['kLdzqD']=!![];}var _0x1474ff=_0x3874['saVHnq'][_0x2a48c5];if(_0x1474ff===undefined){if(_0x3874['cjFjEd']===undefined){_0x3874['cjFjEd']=!![];}_0x4b6498=_0x3874['xXGikP'](_0x4b6498,_0x2272e6);_0x3874['saVHnq'][_0x2a48c5]=_0x4b6498;}else{_0x4b6498=_0x1474ff;}return _0x4b6498;};const $=new Env(_0x3874('‮0','&nYH'));const notify=$[_0x3874('‫1','TG#h')]()?require(_0x3874('‫2','$#*e')):'';const qs=$[_0x3874('‮3','WNjz')]()?require('qs'):'';const debug=0x1;let status;let result='';status=(status=$[_0x3874('‫4','Yx31')](_0x3874('‮5','Cc]4'))||'1')>0x1?''+status:'';let dr_dataArr=[];let dr_data=$[_0x3874('‮6','n3o#')]()?process[_0x3874('‫7','$#*e')]['dr_data']?process['env']['dr_data']:'':$['getdata']('dr_data')?$[_0x3874('‫8','!xIo')]('dr_data'):'';let dr_datas='';let tz=$[_0x3874('‫9','vbsU')](_0x3874('‮a','WNjz'))||'1';let host=_0x3874('‫b','2Cd&');$[_0x3874('‮c','Xm!b')]='';!(async()=>{var _0xda54b9={'zeoWY':function(_0x58f8d9){return _0x58f8d9();},'NLhzS':function(_0x1e2e67,_0x331462){return _0x1e2e67!==_0x331462;},'UiQZk':'undefined','dSBQw':function(_0x193f49,_0x397f4a){return _0x193f49===_0x397f4a;},'rKjJg':_0x3874('‫d','bydb'),'ewVew':'dr_data','gonKh':_0x3874('‮e','CkTZ'),'XoryZ':function(_0x57f845,_0xb096af){return _0x57f845<_0xb096af;},'kAPKZ':function(_0x31807f,_0x114a1b){return _0x31807f+_0x114a1b;},'PtfEN':_0x3874('‮f','n3o#'),'YLlJg':function(_0x5ea1a4,_0xb6145e){return _0x5ea1a4!==_0xb6145e;},'thbbJ':'aCSkh','gHxbV':function(_0x2522ea){return _0x2522ea();}};if(_0xda54b9[_0x3874('‮10','Fa&z')](typeof $request,_0xda54b9[_0x3874('‫11','f)PT')])){}else{if(_0xda54b9[_0x3874('‫12','BSOf')](_0xda54b9[_0x3874('‮13','va0S')],'deAsc')){_0xda54b9[_0x3874('‮14','#mRq')](resolve);}else{if(!$[_0x3874('‮15','kp@H')]()){dr_dataArr[_0x3874('‮16','bydb')]($[_0x3874('‮17','!XAR')](_0xda54b9['ewVew']));let _0x18c337=$[_0x3874('‮18','bydb')](_0xda54b9[_0x3874('‮19','u2*Z')])||'1';for(let _0x542310=0x2;_0x542310<=_0x18c337;_0x542310++){dr_dataArr['push']($[_0x3874('‮1a','Ti03')](_0x3874('‫1b','&nYH')+_0x542310));}if(!dr_dataArr[0x0]){$[_0x3874('‫1c','JMs8')](_0x3874('‫1d','jQzN'));$[_0x3874('‮1e','Cc]4')]+=_0x3874('‮1f','Tl**');}else{console['log'](_0x3874('‮20','!XAR')+dr_dataArr['length']+_0x3874('‫21','Tbh6'));}for(let _0x3d84b5=0x0;_0xda54b9[_0x3874('‮22','F]Jy')](_0x3d84b5,dr_dataArr[_0x3874('‫23','Ti03')]);_0x3d84b5++){if(dr_dataArr[_0x3d84b5]){dr_data=dr_dataArr[_0x3d84b5];$['index']=_0xda54b9['kAPKZ'](_0x3d84b5,0x1);console[_0x3874('‮24','!XAR')](_0x3874('‮25','RcV3')+$[_0x3874('‫26','Ti03')]+'】');await _0xda54b9[_0x3874('‮27','ciC6')](kzjb);}}}else{if(process['env'][_0x3874('‮28','T309')]&&process['env']['dr_data'][_0x3874('‮29','CkTZ')]('@')>-0x1){dr_dataArr=process[_0x3874('‮2a','JMs8')][_0x3874('‮2b','!xIo')][_0x3874('‫2c','!XAR')]('@');console[_0x3874('‮2d','H5De')]('您选择的是用\x22@\x22隔开\x0a');}else{dr_datas=[process[_0x3874('‫2e','G&on')][_0x3874('‫2f','Tbh6')]];}Object[_0x3874('‮30','##4!')](dr_datas)[_0x3874('‫31','ciC6')](_0x301226=>{if(dr_datas[_0x301226]){dr_dataArr['push'](dr_datas[_0x301226]);}});if(!dr_dataArr[0x0]){if(_0xda54b9['PtfEN']!=='HBAfw'){$[_0x3874('‮32','Ti03')](_0x3874('‮33',']Xns'));$[_0x3874('‮34','jQzN')]+='\x0a【傻吊提示】：你没有填写ck跑个嘚';}else{console['log'](_0x3874('‫35','$#*e')+dr_dataArr[_0x3874('‫36','Xm!b')]+_0x3874('‫37','!XAR'));}}else{console[_0x3874('‫38','!xIo')](_0x3874('‫39','va0S')+dr_dataArr[_0x3874('‮3a','f)PT')]+'个账号-------------\x0a');}for(let _0x46210e=0x0;_0xda54b9[_0x3874('‮3b','CkTZ')](_0x46210e,dr_dataArr[_0x3874('‫3c','!XAR')]);_0x46210e++){if(_0xda54b9[_0x3874('‫3d','Yx31')](_0xda54b9[_0x3874('‮3e','Cc]4')],_0x3874('‮3f','guNF'))){dr_data=dr_dataArr[_0x46210e];$[_0x3874('‮40','pPOw')]=_0xda54b9[_0x3874('‫41','Yx31')](_0x46210e,0x1);console[_0x3874('‮42','&nYH')](_0x3874('‫43','va0S')+$[_0x3874('‮44','bBeW')]+'】');await kzjb();}else{dr_dataArr[_0x3874('‫45','6mBA')]($[_0x3874('‫46','u2*Z')](_0x3874('‮47','bydb')+_0x3d84b5));}}}}}_0xda54b9['gHxbV'](message);})()[_0x3874('‮48','NzT@')](_0x94a8c5=>$['logErr'](_0x94a8c5))[_0x3874('‫49','Tbh6')](()=>$['done']());function kzjb(_0x15030a=0x0){var _0x4a0ac3={'oGrJO':function(_0x176a56,_0x1a0e76){return _0x176a56+_0x1a0e76;},'IizOn':_0x3874('‮4a','jQzN'),'IPTYW':function(_0x16b8ac){return _0x16b8ac();},'FFiuN':function(_0x297824){return _0x297824();},'ZrGyg':function(_0xe30a22,_0x6e0540){return _0xe30a22===_0x6e0540;},'Vdghz':_0x3874('‮4b','Fa&z'),'hYaPm':'【脚本状态】','JwEqY':function(_0xdf414c,_0x374661){return _0xdf414c+_0x374661;},'PQDKn':function(_0x1e23c4){return _0x1e23c4();},'WYCnC':_0x3874('‫4c','f)PT'),'hScsw':function(_0x3bf187,_0x5c9600){return _0x3bf187!==_0x5c9600;},'ZlmJL':_0x3874('‫4d','Ti03')};return new Promise(_0x1d8afd=>{var _0x32fb6e={'pZfaT':function(_0x28f91c,_0x497192){return _0x28f91c+_0x497192;},'OoJPs':_0x4a0ac3['WYCnC']};if(_0x4a0ac3[_0x3874('‫4e','jQzN')](_0x4a0ac3[_0x3874('‮4f','TRSG')],_0x4a0ac3[_0x3874('‮50','bBeW')])){console['log'](_0x32fb6e['pZfaT'](_0x32fb6e[_0x3874('‮51','BSOf')],data['data'][_0x3874('‫52','##4!')]));$[_0x3874('‮53','WNjz')]+='\x0a【签到】:\x20'+data[_0x3874('‫54','bBeW')][_0x3874('‫55','TG#h')];}else{let _0x3c8c2e={'url':_0x3874('‮56','f)PT'),'headers':''};$[_0x3874('‮57','YWtq')](_0x3c8c2e,async(_0x30018f,_0x461d9f,_0x4cc4d1)=>{try{_0x4cc4d1=JSON[_0x3874('‮58','NzT@')](_0x4cc4d1);if(_0x4cc4d1['dr']==0x1){console[_0x3874('‫59','kp@H')](_0x4a0ac3[_0x3874('‫5a','F]Jy')](_0x4a0ac3[_0x3874('‫5b','JMs8')],_0x4cc4d1[_0x3874('‫5c','T309')]));await $[_0x3874('‮5d','JMs8')](0x7d0);await _0x4a0ac3['IPTYW'](signin);await $[_0x3874('‮5e','#mRq')](0xbb8);await _0x4a0ac3[_0x3874('‮5f','H5De')](person);}else{if(_0x4a0ac3[_0x3874('‮60','WNjz')](_0x4a0ac3[_0x3874('‮61','vbsU')],_0x3874('‫62','Xm!b'))){console[_0x3874('‮63','RcV3')](_0x4a0ac3[_0x3874('‫64','T309')]+_0x4cc4d1[_0x3874('‮65','bydb')]);$[_0x3874('‮66','Tbh6')]+=_0x4a0ac3[_0x3874('‫67','BSOf')](_0x4a0ac3[_0x3874('‮68','kp@H')],_0x4cc4d1[_0x3874('‮69','2Cd&')]);}else{dr_dataArr=process[_0x3874('‮2a','JMs8')][_0x3874('‮6a','TRSG')]['split']('@');console['log']('您选择的是用\x22@\x22隔开\x0a');}}}catch(_0x104c8d){$[_0x3874('‫6b','hhU9')](_0x104c8d,_0x461d9f);}finally{_0x4a0ac3[_0x3874('‫6c','TG#h')](_0x1d8afd);}},0x0);}});}function signin(_0x168297=0x0){var _0x31ae61={'VQnBJ':function(_0x50a5ef,_0x4dda6a){return _0x50a5ef==_0x4dda6a;},'rSxTv':'FgwQa','fILZA':function(_0x37e55d,_0x32137a){return _0x37e55d+_0x32137a;},'srMSb':'\x0a【签到】:\x20','rcwks':function(_0x3e068d,_0x18de25){return _0x3e068d===_0x18de25;},'cmzGp':_0x3874('‫6d','!xIo'),'FdfFr':function(_0x51153e,_0x1f216b){return _0x51153e!==_0x1f216b;},'gSSnm':'agUjI','dnNEV':_0x3874('‮6e','ciC6')};return new Promise(_0x394a6f=>{var _0x386f9a={'lBCSA':function(_0x3a5e81,_0x484065){return _0x31ae61[_0x3874('‫6f','JMs8')](_0x3a5e81,_0x484065);},'cKJBw':_0x31ae61[_0x3874('‮70','&nYH')],'Dsfdh':function(_0x4226a0,_0x36928d){return _0x31ae61['fILZA'](_0x4226a0,_0x36928d);},'qknHa':_0x31ae61['srMSb'],'DkNqS':function(_0x19bf61,_0x4d09ea){return _0x31ae61[_0x3874('‮71','&nYH')](_0x19bf61,_0x4d09ea);},'FsYTC':_0x31ae61[_0x3874('‮72','n3o#')],'JyiNu':function(_0x35ffc5,_0x508f61){return _0x31ae61[_0x3874('‮73','6mBA')](_0x35ffc5,_0x508f61);},'YugoZ':function(_0x50d80a){return _0x50d80a();}};if(_0x31ae61[_0x3874('‮74','u2*Z')](_0x3874('‫75','F]Jy'),_0x31ae61[_0x3874('‮76','bydb')])){let _0x423305={'url':host+_0x3874('‮77','&nxm'),'headers':{'Host':_0x3874('‫78','hhU9'),'user-agent':_0x31ae61['dnNEV'],'content-type':_0x3874('‮79','vbsU'),'referer':'https://nlnlan.com/'},'body':dr_data};$['post'](_0x423305,async(_0x2e77a7,_0x2c2733,_0x4651f0)=>{try{_0x4651f0=JSON[_0x3874('‮7a',')FJ4')](_0x4651f0);if(_0x386f9a['lBCSA'](_0x4651f0[_0x3874('‫7b','RcV3')][_0x3874('‫7c','ciC6')],0x1)){if(_0x3874('‫7d','#mRq')!==_0x386f9a[_0x3874('‮7e','&nxm')]){console[_0x3874('‮7f','2Cd&')](_0x386f9a[_0x3874('‫80','6mBA')](_0x3874('‮81','CkTZ'),_0x4651f0['data'][_0x3874('‫82','*7(&')]));$[_0x3874('‫83','#mRq')]+=_0x386f9a[_0x3874('‮84','guNF')](_0x386f9a[_0x3874('‮85','2Cd&')],_0x4651f0[_0x3874('‫7b','RcV3')][_0x3874('‮86','j2]8')]);}else{$[_0x3874('‮69','2Cd&')]($[_0x3874('‮87','T309')],'',$['message']);}}else{if(_0x386f9a[_0x3874('‮88','Xm!b')](_0x386f9a['FsYTC'],_0x386f9a[_0x3874('‮89','RcV3')])){console['log'](_0x386f9a['Dsfdh'](_0x386f9a[_0x3874('‫8a','YWtq')],_0x4651f0[_0x3874('‮8b','j2]8')]['msg']));$[_0x3874('‮8c','vbsU')]+=_0x386f9a[_0x3874('‮8d','&nYH')](_0x386f9a[_0x3874('‮8e','T309')],_0x4651f0[_0x3874('‫8f','#mRq')]['msg']);}else{$[_0x3874('‫38','!xIo')]('\x0a【傻吊提示】：你没有填写ck跑个嘚');$['message']+=_0x3874('‫90','RcV3');}}}catch(_0x2e7455){}finally{_0x386f9a[_0x3874('‫91','u2*Z')](_0x394a6f);}});}else{$[_0x3874('‮92',']Xns')]('\x0a【傻吊提示】：你没有填写ck跑个嘚');$[_0x3874('‫93','n3o#')]+=_0x3874('‮94','va0S');}});}function person(_0x58f26f=0x0){var _0x29ae2d={'jPfCN':function(_0x3c3e49,_0x4859ff){return _0x3c3e49+_0x4859ff;},'zJOPL':_0x3874('‮95','va0S'),'npVMG':function(_0x2776e8,_0x5b897e){return _0x2776e8==_0x5b897e;},'bZgWL':_0x3874('‫96','G&on'),'pdsap':_0x3874('‫97','guNF'),'lBvvX':_0x3874('‫98','6mBA'),'OVaXB':function(_0x45445b,_0x490059){return _0x45445b+_0x490059;},'mDxhs':function(_0x3095cb,_0x1f7e0d){return _0x3095cb===_0x1f7e0d;},'iuIJh':_0x3874('‫99','!XAR'),'uZikZ':_0x3874('‫9a','bBeW'),'KLYWn':'Mozilla/5.0\x20(Linux;\x20Android\x209;\x20Mi\x20Note\x203\x20Build/PKQ1.181007.001;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/80.0.3987.99\x20Mobile\x20Safari/537.36\x20uni-app\x20Html5Plus/1.0\x20(Immersed/24.0)','pNIKP':_0x3874('‮9b','j2]8'),'JMJJq':'https://nlnlan.com/'};return new Promise(_0x824338=>{var _0x2f02c3={'JvZlV':'【脚本状态】','mOhZe':function(_0xe45c21,_0x598498){return _0x29ae2d['jPfCN'](_0xe45c21,_0x598498);},'jKpfg':_0x3874('‮9c','##4!'),'AxDlB':_0x29ae2d[_0x3874('‮9d','*7(&')],'gMhQW':function(_0x2b73b3,_0x5c3be1){return _0x29ae2d[_0x3874('‫9e','#mRq')](_0x2b73b3,_0x5c3be1);},'iXGBM':_0x3874('‮9f','j2]8'),'OFSfi':_0x29ae2d[_0x3874('‫a0','j2]8')],'NJlPL':function(_0x53ee83,_0x397a4a){return _0x29ae2d['jPfCN'](_0x53ee83,_0x397a4a);},'esPtt':_0x29ae2d['pdsap'],'psFGv':_0x29ae2d[_0x3874('‮a1','NzT@')],'jtYkO':function(_0x12e8b9,_0x5b384a){return _0x12e8b9+_0x5b384a;},'rKLdM':_0x3874('‮a2','u2*Z'),'uknKr':function(_0x4805f2,_0x46ed1d){return _0x29ae2d['OVaXB'](_0x4805f2,_0x46ed1d);}};if(_0x29ae2d[_0x3874('‫a3','Yx31')](_0x29ae2d['iuIJh'],_0x3874('‮a4','j2]8'))){console[_0x3874('‫a5','vbsU')](_0x3874('‮a6','u2*Z')+dr_dataArr['length']+_0x3874('‫a7','2Cd&'));}else{let _0x1a287c={'url':host+'/user/person','headers':{'Host':_0x29ae2d[_0x3874('‮a8','!2b!')],'user-agent':_0x29ae2d[_0x3874('‮a9','G&on')],'content-type':_0x29ae2d[_0x3874('‮aa','6mBA')],'referer':_0x29ae2d[_0x3874('‫ab','&nxm')]},'body':dr_data};$[_0x3874('‫ac','va0S')](_0x1a287c,async(_0x4422a9,_0x1025dd,_0x5aac27)=>{if(_0x2f02c3['jKpfg']!==_0x2f02c3[_0x3874('‮ad','BSOf')]){try{_0x5aac27=JSON['parse'](_0x5aac27);if(_0x2f02c3[_0x3874('‫ae','#mRq')](_0x5aac27[_0x3874('‮af','##4!')],0x1)){var _0x266777=_0x2f02c3[_0x3874('‮b0','pPOw')][_0x3874('‮b1','guNF')]('|'),_0x2a0851=0x0;while(!![]){switch(_0x266777[_0x2a0851++]){case'0':console[_0x3874('‮b2','f)PT')](_0x2f02c3[_0x3874('‫b3','*7(&')](_0x2f02c3[_0x3874('‮b4','f)PT')],_0x5aac27[_0x3874('‮b5','$#*e')][_0x3874('‮b6','Yx31')]));continue;case'1':$[_0x3874('‮34','jQzN')]+=_0x2f02c3[_0x3874('‫b7',']Xns')](_0x2f02c3[_0x3874('‮b8','kp@H')],_0x5aac27[_0x3874('‮b9','*7(&')]['money']);continue;case'2':console[_0x3874('‮24','!XAR')](_0x2f02c3[_0x3874('‮ba','F]Jy')]+_0x5aac27[_0x3874('‫bb','F]Jy')][_0x3874('‫bc','*7(&')]);continue;case'3':console[_0x3874('‮bd','F]Jy')](_0x2f02c3[_0x3874('‫be','*7(&')]+_0x5aac27['data']['checknum']+'天');continue;case'4':$['message']+=$['message']+=_0x2f02c3[_0x3874('‮bf','$#*e')](_0x2f02c3[_0x3874('‮c0','&nYH')](_0x3874('‫c1','ciC6'),_0x5aac27[_0x3874('‮c2','2Cd&')][_0x3874('‫c3','w5hl')]),'天');continue;case'5':console[_0x3874('‮c4','BSOf')](_0x2f02c3['jtYkO'](_0x2f02c3[_0x3874('‮c5','TRSG')],_0x5aac27[_0x3874('‮c6','##4!')][_0x3874('‫c7','w5hl')]));continue;case'6':$[_0x3874('‮c8','&nxm')]+=_0x2f02c3[_0x3874('‫c9','##4!')](_0x2f02c3[_0x3874('‫ca','2Cd&')],_0x5aac27[_0x3874('‫cb','Tl**')][_0x3874('‫cc','va0S')]);continue;case'7':$[_0x3874('‮cd','RcV3')]+=_0x2f02c3['uknKr'](_0x2f02c3['esPtt'],_0x5aac27[_0x3874('‫ce','f)PT')][_0x3874('‫cf','vbsU')]);continue;}break;}}else{}}catch(_0x42ea13){}finally{_0x824338();}}else{console[_0x3874('‮bd','F]Jy')](_0x2f02c3['JvZlV']+_0x5aac27[_0x3874('‫d0','f)PT')]);$['message']+=_0x2f02c3[_0x3874('‮d1','##4!')](_0x3874('‮d2','#mRq'),_0x5aac27['msg']);}},_0x58f26f);}});}async function message(){var _0x5f36d3={'dcAov':function(_0x596542,_0x38c51b){return _0x596542==_0x38c51b;}};if(_0x5f36d3['dcAov'](tz,0x1)){$[_0x3874('‫d3','ZZ6M')]($['name'],'',$[_0x3874('‮d4','Yx31')]);}if($['isNode']()){await notify['sendNotify']($[_0x3874('‫d5','6mBA')],$[_0x3874('‫d6','BSOf')]);}};_0xod5='jsjiami.com.v6';
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: i, statusCode: r, headers: o, rawBody: h }, s.decode(h, this.encoding)) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: s, statusCode: r, headers: o, rawBody: h }, i.decode(h, this.encoding)) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }