var t=function(t,r){var e=0,n=0;try{e=t.toString().split(".")[1].length}catch(t){}try{n=r.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/Number(r.toString().replace(".",""))*Math.pow(10,n-e)};export{t as numDiv};
