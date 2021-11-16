

window.onload=function(){
	let boxs=[]
	function $(name){
		return document.querySelector(name)
	}
	boxs.push($("#mys-wrapper"))
	boxs.push($("#recommendAdBox"))
	boxs.push($("#bottomAd"))
	boxs.push($("#csdn-toolbar"))
	boxs.push($("#footerRightAds"))
	boxs.push($(".mys-adsbygoogle"))
	boxs.push($(".toolbar-advert"))
	console.log(boxs[0])
	for(let item of boxs){
		if (undefined != item){
			item.style.display="none"
		}
	}

}

