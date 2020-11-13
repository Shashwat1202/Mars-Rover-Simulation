var canvas=document.getElementById("myCanvas");
var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","mars.jpg"];
var x= Math.floor(Math.random()*8)
ctx=canvas.getContext("2d");
var roverx=400;
var rovery=300;
var roverwidth=100;
var roverheight=100;
var rover_img="rover.png";
var canvas_background=images[x];

function add(){
    background= new Image()
    background.onload=uploadbackground
    background.src=canvas_background;

    rover= new Image()
    rover.onload=uploadrover
    rover.src=rover_img;
}
function uploadbackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover,roverx,rovery,roverwidth,roverheight)
}

window.addEventListener("keydown", key)
function key(e){
   code=e.keyCode
   console.log(code);

   if(code == 37){
       left()
       console.log("left is pressed")
   }

   if(code == 38){
       up()
       console.log("up is pressed")
   }
    
   if(code == 39){
       right()
       console.log("right is pressed")
   }

   if(code == 40){
       down()
       console.log("down is pressed")
   }
}

function up(){
    if (rovery >= 10){
      rovery=rovery-10;
      uploadbackground();
      uploadrover();
    }
}
function down(){
    if (rovery <= 490){
        rovery=rovery+10;
        uploadbackground()
        uploadrover();
    }
}

function left(){
    if (roverx >= 10){
        roverx=roverx-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (roverx <= 690){
        roverx=roverx+10;
        uploadbackground();
        uploadrover();
    }
}