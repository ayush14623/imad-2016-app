console.log('Loaded!');

//change the text of maint
var ele= document.getElementById('maint');
ele.innerHTML= 'new';

// move img
var img=document.getElementById('img1');
img.onclick =function(){
    img.style.marginLeft= '100px';
}