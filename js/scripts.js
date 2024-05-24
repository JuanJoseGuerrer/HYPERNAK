window.addEventListener("scroll", function(){

    var header = document.getElementById("nav_main");
    var a = this.document.getElementById("subpages");
    var position = this.window.scrollY;

    header.classList.toggle("desplazar",position >0);
    a.classList.toggle("desplazar", position >0);

    if((position) > 705 ){
        header.classList.remove("desplazar");
        a.classList.remove("desplazar");
    }
})