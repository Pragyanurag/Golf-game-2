var canvas = new fabric.Canvas('myCanvas');
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.fromURL("golf-h.png", function(Img) {
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
top:hole_y,
left:hole_x
});
canvas.add(hole_obj);
});
new_image();
}

function new_image()
{
fabric.Image.fromURL("ball.png", function(Img) {
ball_obj = Img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
top:ball_y,
left:ball_x
});
canvas.add(ball_obj);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if((ball_x==hole_x)&&(ball_y==hole_y)){
canvas.remove(ball_obj);
console.log("You have Hit the Goal!!!");
document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
   document.getElementById("myCanvas").style.borderColor="red";
}
else{
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
}

function up()
{
if(ball_y >=5)
{
ball_y = ball_y - block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Up arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
canvas.remove(ball_obj);
new_image();
}
}

function down()
{
if(ball_y <=450)
{
ball_y = ball_y + block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
canvas.remove(ball_obj);
new_image();
}
}

function left()
{
if(ball_x >5)
{
ball_x = ball_x - block_image_width;
console.log("block image width = " + block_image_width);
console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
canvas.remove(ball_obj);
new_image();
}
}

function right()
{
if(ball_x <=1050)
{
ball_x = ball_x + block_image_width;
console.log("block image width = " + block_image_width);
console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
canvas.remove(ball_obj);
new_image();
}
}

}


