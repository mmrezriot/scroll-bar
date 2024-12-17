const progress= document.querySelector('.progress-bar');

// take Scroll
window.addEventListener('scroll' , function(){
    
    //Distance from above page
    const winScroll = window.pageYOffset;

    //Distance from the bottom page
    const height = document.documentElement.scrollHeight-this.innerHeight;


    const scrolled= (winScroll/height ) * 100;
    console.log(scrolled);

    //add width progress-bar
    progress.style.width=`${scrolled}%`

})