var inputs = document.querySelectorAll(".input-field");
var toggle_btn = document.querySelectorAll(".toggle");
var main = document.querySelector("main");
var bullets = document.querySelectorAll(".bullets span");
var images = document.querySelectorAll(".image");


if (
true
) {


    // inputs.forEach((inp) => {
    //     inp.addEventListener("focus", () => {
    //         inp.classList.add("active");
    //     });
    //     inp.addEventListener("blur", () => {
    //         if (inp.value != "") return;
    //         inp.classList.remove("active");
    //     });
    //     });
        
        toggle_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            main.classList.toggle("sign-up-mode");
        });
        });
        
        function moveSlider() {
        let index = this.dataset.value;
        
        let currentImage = document.querySelector(`.img-${index}`);
        images.forEach((img) => img.classList.remove("show"));
        currentImage.classList.add("show");
        
        const textSlider = document.querySelector(".text-group");
        textSlider.style.transform = `translateY(${-(index - 1) * 3.7}rem)`;
        
        bullets.forEach((bull) => bull.classList.remove("active"));
        this.classList.add("active");
        }
        
        bullets.forEach((bullet) => {
        bullet.addEventListener("click", moveSlider);
        });


}



