let count =0;
function slider(){
    setInterval(runslide,3000);

    function runslide(){
        if(count === 0){
            let selectarticle = document.querySelector('#sliderart');
            selectarticle.style.marginLeft = "0px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
        else if(count === 1){
            let selectarticle = document.querySelector('#sliderart');
            selectarticle.style.marginLeft = "-1000px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
        else if(count === 2){
            let selectarticle = document.querySelector('#sliderart');
            selectarticle.style.marginLeft = "-2000px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
        else if(count === 3){
            let selectarticle = document.querySelector('#sliderart');
            selectarticle.style.marginLeft = "-1000px";
            selectarticle.style.transition = "margin-left .5s";
            count ++;
        }
        else if(count === 4){
            let selectarticle = document.querySelector('#sliderart');
            selectarticle.style.marginLeft = "0px";
            selectarticle.style.transition = "margin-left .5s";
            count =0;
        }
    
    }
}