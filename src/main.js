// Loading
let loading = document.querySelector('main div.div_logo');

setInterval(remove, 5300);

    function remove(){
        loading.classList.add("div_logo--hidden");
        home.classList.add("div_project-one--open");
    };
//

let about = document.querySelector('main .first header .about_text');
let open = document.querySelector('section.about');
let close = document.querySelector('.close');

about.addEventListener("click", function(){
    open.classList.toggle("about--open");
});

close.addEventListener("click", function(){
    open.classList.remove("about--open");
});

let home = document.querySelector('.div_project-one');

setInterval(homedelete, 100);

function homedelete() {
    home.classList.add("div_project-one--hidden");
};