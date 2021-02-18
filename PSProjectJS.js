//gif이용하기
window.onload = function(){

    var findgif1 = document.querySelector('.GifImg1');
    var findgif2 = document.querySelector('.GifImg2');
    var findgif3 = document.querySelector('.GifImg3');
    var findgif4 = document.querySelector('.GifImg4');
    var findgif5 = document.querySelector('.GifImg5');
    var findgif6 = document.querySelector('.GifImg6');
    var findgif7 = document.querySelector('.GifImg7');
    var findgif8 = document.querySelector('.GifImg8');
    
    findgif1.onmouseover = function(){
        this.src = '19.04.20/19.04.20_gif.gif';
    }
    findgif1.onmouseout = function(){
        this.src = '19.04.20/19.04.20_1.jpg';
    }
    findgif2.onmouseover = function(){
        this.src = '19.06.05/19.06.05_gif.gif';
    }
    findgif2.onmouseout = function(){
        this.src = '19.06.05/19.06.05_1.jpg';
    }
    findgif3.onmouseover = function(){
        this.src = '19.07.17/19.07.17_gif.gif';
    }
    findgif3.onmouseout = function(){
        this.src = '19.07.17/19.07.17_1.jpg';
    }
    findgif4.onmouseover = function(){
        this.src = 'drink/drink_gif.gif';
    }
    findgif4.onmouseout = function(){
        this.src = 'drink/drink_1.jpg';
    }
    findgif5.onmouseover = function(){
        this.src = '20.04.27/20.04.27_gif.gif';
    }
    findgif5.onmouseout = function(){
        this.src = '20.04.27/20.04.27_1.JPG';
    }
    findgif6.onmouseover = function(){
        this.src = 'smile/smile_gif.gif';
    }
    findgif6.onmouseout = function(){
        this.src = 'smile/smile_1.JPG';
    }
    findgif7.onmouseover = function(){
        this.src = '20.08.17/20.08.17_gif.gif';
    }
    findgif7.onmouseout = function(){
        this.src = '20.08.17/20.08.17_1.JPG';
    }
    findgif8.onmouseover = function(){
        this.src = '20.09.17/20.09.17_gif.gif';
    }
    findgif8.onmouseout = function(){
        this.src = '20.09.17/20.09.17_1.JPG';
    }

    const fixLeft = document.querySelector('#left');
    const fixRight = document.querySelector('#right');
    const pos = document.getElementsByName("pos");
    const posLength = pos.length;
    function value_check_func() {
        console.log("b");
        var check_count = pos.length;
        for (var i=0; i<check_count; i++) {
            console.log(i)
            if (pos[i].checked === true) { 
                console.log(i);
                return i;
            }
        }
    }
    
    fixLeft.onmouseover = function() {
        console.log("a"); 
        let value_check = value_check_func();
        console.log("c");
        console.log(value_check);
        pos[value_check].checked = false;
        if(value_check === 0){
            pos[value_check].checked = true;
            console.log("true");
        }else{
        pos[value_check-1].checked = true;
        console.log("false");
        }
    }

    fixRight.onmouseover = function() {
        console.log("a"); 
        let value_check = value_check_func();
        console.log("c");
        console.log(value_check);
        console.log(posLength); 
        console.log(posLength -1);
        if(value_check === posLength -1){
            pos[value_check].checked = true;
            console.log("true"); 
        }else{
        pos[value_check + 1].checked = true;
        console.log("false");
        }
    }
    
  
}

 


 
