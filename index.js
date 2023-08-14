document.onmousemove= (e) =>{
    let img = document.createElement("img");
    img.src ="goku.png";
    img.style.position="absolute";
    img.style.left=e.pageX +"px";
    img.style.top = e.pageY +"px";
    img.animate([{opacity:0}],{
        duration: 400
    }).onfinish=()=>img.remove();
    document.body.append(img);

}