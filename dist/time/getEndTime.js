var e=function(e){var t=new Date,o=new Date(e).getTime()-t.getTime(),r=0,a=0,f=0,n=0;return o>=0&&(r=Math.floor(o/1e3/3600/24),a=Math.floor(o/1e3/60/60%24),f=Math.floor(o/1e3/60%60),n=Math.floor(o/1e3%60)),"剩余时间 "+r+" 天 "+a+" 小时 "+f+" 分钟 "+n+" 秒"};export{e as getEndTime};