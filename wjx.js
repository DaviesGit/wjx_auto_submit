// setInterval(()=>{
// $.ajax({
// 	method: 'POST',
// 	url: 'https://www.wjx.cn/joinnew/processjq.ashx?submittype=1',
// 	data: 'submitdata=' + encodeURI('1$'+Math.ceil(Math.random()*2)+
// 		'}2$'+Math.ceil(Math.random()*5)+
// 		'}3$'+Math.ceil(Math.random()*2)+
// 		'}4$'+(Math.random()<0.7?1:2)+
// 		'}5$'+(Math.random()<0.85?1:2)+
// 		'}6$'+(Math.random()<0.5?1:(1+Math.ceil(Math.random()*3)))+
// 		'}7$'+(Math.random()<0.85?1:2)+
// 		'}8$4}9$'+[Math.random()<0.5,Math.random()<0.5,Math.random()<0.5].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}10$'+[Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}11$'+[Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8,Math.random()<0.8].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}12$'+(Math.random()<0.9?1:2)+
// 		'}13$'),
// 	processData: false,
// });
// }, 30*1000);



// setInterval(()=>{
// $.ajax({
// 	method: 'POST',
// 	url: 'https://www.wjx.cn/joinnew/processjq.ashx?submittype=1',
// 	data: 'submitdata=' + encodeURI('1$'+(Math.random()<0.32?1:2)+
// 		'}2$'+((ran)=>{let frequent=[0.20,0.65,0.10,0.05];for(let i=0,acc=0;i<frequent.length;++i){acc+=frequent[i]; if(ran<=acc) return i+1;}})(Math.random())+
// 		'}3$'+Math.ceil(Math.random()*4)+
// 		'}4$'+[Math.random()<0.3,Math.random()<0.8,Math.random()<0.3,Math.random()<0.2,Math.random()<0.5].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}5$'+[Math.random()<0.6,Math.random()<0.4,Math.random()<0.65,Math.random()<0.8,Math.random()<0.3].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}6$'+((ran)=>{let frequent=[0.45,0.50,0.05];for(let i=0,acc=0;i<frequent.length;++i){acc+=frequent[i]; if(ran<=acc) return i+1;}})(Math.random())+
// 		'}7$'+((ran)=>{let frequent=[0.05,0.55,0.35,0.05];for(let i=0,acc=0;i<frequent.length;++i){acc+=frequent[i]; if(ran<=acc) return i+1;}})(Math.random())+
// 		'}8$'+[Math.random()<0.6,Math.random()<0.7,Math.random()<0.3,Math.random()<0.65,Math.random()<0.80,Math.random()<0.3].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}9$'+[Math.random()<0.6,Math.random()<0.7,Math.random()<0.3,Math.random()<0.25,Math.random()<0.35,Math.random()<0.20].reduce((acc,cur,idx,src)=>{if(cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')+
// 		'}10$'+(Math.random()<0.8?1:2)+
// 		'}11$'),
// 	processData: false,
// });
// }, 30*1000);





function post_form(possible,url){
	[0.3,0.8,0.3,0.2,0.5]
	let data=[];
	for(let i=0;i<possible.length;++i){
		data.push(
			i+1+'$'+
			('s'===possible[i][0]?
			((ran,frequent)=>{for(let i=0,acc=0;i<frequent.length;++i){acc+=frequent[i]; if(ran<=acc) return i+1;} return '';})(Math.random(),possible[i][1]):
			possible[i][1].reduce((acc,cur,idx,src)=>{if(Math.random()<cur)return acc+(1+idx)+'|'; if(idx+1===src.length&&!acc) return '1|'; return acc},'').replace(/\|$/,'')
		));
	}
	$.ajax({
		method: 'POST',
		url: url,
		data: 'submitdata=' + encodeURI(data.join('}')),
		processData: false,
	});
}

setInterval(() => {

	post_form([
		['s', [0.32, 0.68]],
		['s', [0.20, 0.65, 0.10, 0.05]],
		['s', [0.25, 0.25, 0.25, 0.25]],
		['m', [0.3, 0.8, 0.3, 0.2, 0.5]],
		['m', [0.6, 0.4, 0.65, 0.8, 0.3]],
		['s', [0.45, 0.50, 0.05]],
		['s', [0.05, 0.55, 0.35, 0.05]],
		['m', [0.6, 0.7, 0.3, 0.65, 0.80, 0.3]],
		['m', [0.6, 0.7, 0.3, 0.25, 0.35, 0.20]],
		['s', [0.80, 0.20]],
		['s', []],
	],'https://www.wjx.cn/joinnew/processjq.ashx?submittype=1');

}, 5 * 60 * 1000);

