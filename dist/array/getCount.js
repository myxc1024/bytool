var r=function(r,n,t){for(var e,o=[],u=[],c=0,v=r.length;c<v;c++)o[e=r[c]]?o[e]++:o[e]=1;for(var a in o)u.push({el:a,count:o[a]});u.sort((function(r,n){return n.count-r.count})),1===t&&(u=u.reverse());var f=n||u.length;return u.slice(0,f)};export{r as getCount};
