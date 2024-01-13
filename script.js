// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var elemcontainer = document.querySelector("#elemcontainer");
var fixedImageContainer = document.querySelector("#fixed-image");

elemcontainer.addEventListener("mouseenter",function(){
    fixedImageContainer.style.display = "block"
})
elemcontainer.addEventListener("mouseleave",function(){
    fixedImageContainer.style.display = "none"
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var image = elem.getAttribute("data-image");
        fixedImageContainer.style.backgroundImage = `url(${image})`
    })
})