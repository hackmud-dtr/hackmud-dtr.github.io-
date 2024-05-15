function fixRisk() { // add spooky shadow effect to risk text
	if(localStorage.getItem("highlight-risk") === "true"){
		[...document.all].forEach(x=>{
			if(x.style.color=='rgb(0, 0, 0)')
				x.style.textShadow='0px 0px 5px white'
		});
	} else {
		console.log("fuck");
		[...document.all].forEach(x=>{
			if(x.style.color=='rgb(0, 0, 0)')
				x.style.removeProperty("text-shadow")
		});
	}
}

function createFooter(){ // create page footer
	let footer_txt = `<hr>
<p>Created by <a style="color:#FF96E0" href="https://github.com/hackmud-dtr">dtr</a>, maintained by <a style="color:#0073A6" href="https://github.com/matr1x-hackmud">matr1x</a>

<a style="color:#FFFFFF" href="https://hackmud.com">hackmud.com</a> | <a style="color:#FFFFFF" href="https://discord.gg/3wegMtb">discord</a>

<p><input type="checkbox" id="highlight-risk"> highlight risk text</p>
</p>`

console.log("footing")
let footer = document.getElementById("global-footer")
if(footer){
	console.log("footered")
	footer.innerHTML = footer_txt;
	footer.className = "global-footer-filled";

	let hlcheck = document.getElementById("highlight-risk");
	hlcheck.onchange = e => {
		localStorage.setItem("highlight-risk", JSON.stringify(e.target.checked));
		fixRisk();
	}
	hlcheck.checked = JSON.parse(localStorage.getItem("highlight-risk") || "false");
}


}
