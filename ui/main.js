console.log('Loaded!');

//change the text of maint
var ele= document.getElementById('maint');
ele.innerHTML= 'new';

// move img
var marginLeft=0;
var img=document.getElementById('img1');
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft= marginLeft +'px';
}

img.onclick =function(){
    var interval = setInterval(moveRight,100);
};