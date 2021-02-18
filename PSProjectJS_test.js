// 이미지 슬라이드
    // var onandoff = null;
    // var imgArray = new Array();

    //     imgArray[0] = new Image();
    //     imgArray[0].src = 'drink/drink_1.jpg';

    //     imgArray[1] = new Image();
    //     imgArray[1].src = 'drink/drink_2.jpg';

    //     imgArray[2] = new Image();
    //     imgArray[2].src = 'drink/drink_3.jpg';

    //     imgArray[3] = new Image();
    //     imgArray[3].src = 'drink/drink_4.jpg';

    //     imgArray[4] = new Image();
    //     imgArray[4].src = 'drink/drink_5.jpg';
    
    // var einterval = null;
    // var i = 0;
    // function imgchg() {
    //     var next = (++i%imgArray.length);
    //     // document.getElementById("test").src = imgArray[next].src;
    //     // var x = document.getElementsByClassName("MainImg")[0];
    //     // x.childNodes[0].src = imgArray[next].src;
    //     // document.getElementsByClassName("MainImg")[0].childNodes[0].src = imgArray[next].src;
    //     document.querySelector('.MainImg img').src = imgArray[next].src;
    //     if(onandoff=== false){
    //         clearInterval(einterval);
    //         document.querySelector('.MainImg img').src = 'drink/drink_1.jpg';
    //         console.log(typeof einterval);
    //     }
    //     }
    // if(onandoff === true){var einterval= setInterval(imgchg,500);
    //     console.log(typeof einterval);
    // }else{
    //     clearInterval(einterval);
    //         document.querySelector('.MainImg img').src = 'drink/drink_1.jpg';
    //         console.log(typeof einterval);
    // }
    //     // setTimeout(function(){clearInterval(einterval);},5001);

//gif이용하기
window.onload = function(){
    var findgif = document.getElementById('GifImg');
    findgif.onmouseover = function(){
        this.src = 'drink/drink_gif.gif';
    }
    findgif.onmouseout = function(){
        this.src = 'drink/drink_1.jpg';
    }
}

    
    
 
