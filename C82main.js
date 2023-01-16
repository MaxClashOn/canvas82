canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastpositionX,lastpositionY;
color="blue";
ctx.lineWidth=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
ancho_linea=document.getElementById("Ancho_Linea").value;
mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    position_actual_mouse_x=e.clientX-canvas.offsetLeft;
    position_actual_mouse_y=e.clientY-canvas.offsetTop;
      if(mouseEvent="mouseDown")
      {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=ancho_linea;
        ctx.moveTo(lastpositionX,lastpositionY);
        ctx.lineTo(position_actual_mouse_x,position_actual_mouse_y);
        ctx.stroke();
      }
      lastpositionX=position_actual_mouse_x;
      lastpositionY=position_actual_mouse_y; 
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave"
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}