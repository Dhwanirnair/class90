canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 100;
rover_height = 90;
nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg" ];
random_number = Math.floor(Math.random()*4);

background_image = nasa_mars_images_array[random_number];
console.log("background_image =" + background_image);

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 
	                                     //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}
//Create "uploadBackground()" function.
                              
                                         //Draw image of background
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
//Create "uploadrover()" function.

                                        //Draw image of rover

function uploadrover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if(keyPressed == '38'){
            up();
            console.log("up")
        }

        if(keyPressed == '40'){
           down();
        console.log("down")
        }

        if(keyPressed == '37'){
            left();
            console.log("left")
        }

        if(keyPressed == '39'){
            right();
            console.log("right")
        }
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log("When up arrow key is pressed, x =" + rover_x +" | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
	if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed, x =" + rover_x +" | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
	if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed, x =" + rover_x +" | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
	if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When upnarrow key is pressed, x =" + rover_x +" | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}



