
(function(){
 if(window.matchMedia("(hover:none),(pointer:coarse)").matches)return;
 const dot=document.createElement("div");dot.className="archive-cursor";document.body.appendChild(dot);
 let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
 document.addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY});
 function animate(){x+=(tx-x)*.22;y+=(ty-y)*.22;dot.style.transform="translate("+x+"px,"+y+"px) translate(-50%,-50%)";requestAnimationFrame(animate)}
 animate();
 document.addEventListener("mouseover",e=>{if(e.target.closest("a,button,input,[role='button']"))dot.classList.add("is-hovering")});
 document.addEventListener("mouseout",e=>{if(e.target.closest("a,button,input,[role='button']"))dot.classList.remove("is-hovering")});
})();
