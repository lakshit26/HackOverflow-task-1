var correct_rgb = document.getElementById("RGB_value");
correct_rgb.innerHTML = random_rgb();

correct_box = Math.floor(Math.random()*6)+1;

//adding event listeners for click on each box
for(let i=1;i<=6;i++){
    let box_i = document.getElementById("b"+i);
    if(i==correct_box){
        box_i.style.backgroundColor = correct_rgb.innerHTML;
        box_i.addEventListener('click',function(){
            document.querySelector("nav ul li.text").innerHTML = "Correct!!";
            document.querySelector("nav ul li#new_colors_button").innerHTML = "PLAY AGAIN";
            box_i.style.borderWidth = "5px";
            box_i.style.borderColor = "gold";
            box_i.style.borderStyle = "solid";
            box_i.style.borderRadius = "10px";
            document.getElementsByTagName("header")[0].style.backgroundColor = correct_rgb.innerHTML;
        });
    }
    else{
        box_i.style.backgroundColor = random_rgb();
        box_i.addEventListener('click',function(){
            if(document.querySelector("nav ul li.text").innerHTML != "Correct!!"){
                document.querySelector("nav ul li.text").innerHTML = "Try Again";
                box_i.style.backgroundColor = "rgb(105, 104, 104)";
                box_i.style.borderWidth = "0";
            }
        });
    }
}

//adding event listener for click on newcolors/playagain button
var button = document.getElementById("new_colors_button");
button.addEventListener('click',function(){
    location.reload();
});

function random_rgb(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return("rgb(" + r + "," + g + "," + b + ")");
}

