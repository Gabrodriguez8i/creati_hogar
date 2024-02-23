var items = document.querySelectorAll('.hero .hero_slider .item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var thumbnails = document.querySelectorAll('.thumbnail .item');

// console.log("items: ", items);
// if (
//     typeof items === 'undefined' &&
//     typeof next === 'undefined' &&
//     typeof prev === 'undefined' &&
//     typeof thumbnails === 'undefined'
//      ) {

    if (true){


// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.hero .hero_slider .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    // console.log("itemActive: ",itemActiveOld );
    if (itemActiveOld !== null && thumbnailActiveOld != null) {
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');
    }

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 8000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

}
