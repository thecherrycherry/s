msOpMax=4;msOpHis=100;msOMx=new Array(msOpHis);msOMy=new Array(msOpHis);msOr=new Array(msOpMax);msOw=0;msOstart=true;var bw=0;if(document.getElementById){bw=1;}if((document.all)&&(bw==1)){bw=2;}for(var i=0;i<msOpMax;i++){document.write("<img src='option.gif' style='position:absolute;left:-200px;' name='msop"+i+"'>");}msOpInit();function msOpInit(){if(bw==0){alert("ブラウザバージョンが対応していません\n最新のブラウザに更新してください\n推奨バージョン(NN6〜,IE5〜)\n　　　　+1JavaScript");return;}for(var i=0;i<msOpMax;i++){msOr[i]=Math.floor(msOpHis/(msOpMax+1)*(i+1))-1;}document.onmousemove=msOpMove;}function msOpMove(e){var mx,my,msWx,msWy;if(bw==1){mx=e.pageX;my=e.pageY;msWx=window.innerWidth+window.pageXOffset;msWy=window.innerHeight+window.pageYOffset;}else{mx=document.body.scrollLeft+event.clientX;my=document.body.scrollTop+event.clientY;msWx=window.document.body.clientWidth+document.body.scrollLeft;msWy=window.document.body.clientHeight+document.body.scrollTop;}msOMx[msOw]=mx;msOMy[msOw]=my;msOw++;if(msOw>=msOpHis){msOw=0;}if(msOstart==true){for(var i=0;i<msOpHis;i++){msOMx[i]=mx;msOMy[i]=my;}msOstart=false;}for(var i=0;i<msOpMax;i++){mx=msOMx[msOr[i]];my=msOMy[msOr[i]];msOr[i]++;if(msOr[i]>=msOpHis){msOr[i]=0;}if(bw==1){if(mx>msWx-document.images["msop"+i].width-17){mx=-100;}}else{if(mx>msWx-document.images["msop"+i].width){mx=-100;}}if(my>msWy-document.images["msop"+i].height){my=-100;}document.images["msop"+i].style.left=mx;document.images["msop"+i].style.top=my;}}