console.log('Loaded!');

//change the text of maint
var ele= document.getElementById('maint');
ele.innerHTML= 'new';

// move img
var marginLeft1=0;
var img=document.getElementById('img1');
function moveRight(){
    marginLeft1 = marginLeft1 + 5;
    img.style.marginLeft= marginLeft1 +'px';
}

img.onclick =function(){
    var interval = setInterval(moveRight,100);
};