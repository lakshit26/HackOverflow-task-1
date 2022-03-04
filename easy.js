var correct_rgb = document.getElementById("RGB_value");
correct_rgb.innerHTML = random_rgb();

correct_box = Math.floor(Math.random()*3)+1;

//adding event listeners for click on each box
for(let i=1;i<=3;i++){
    let box_i = document.getElementById("b"+i);
    if(i==correct_box){
        box_i.style.backgroundColor = correct_rgb.innerHTML;
        box_i.addEventListener('click',function(){
            document.querySelector("nav ul li.text").innerHTML = "Correct!!";
            document.querySelector("nav ul li#new_colors_button").innerHTML = "PLAY AGAIN";
            change_all_background();
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

function change_all_background(){
    document.getElementsByTagName("header")[0].style.backgroundColor = correct_rgb.innerHTML;
    for(let i=1;i<=3;i++){
        let box_i = document.getElementById("b"+i);
        box_i.style.backgroundColor = correct_rgb.innerHTML;
        box_i.style.borderColor = "rgb(105,104,104)";
    }

}