const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");

sidebarToggle.addEventListener('click', ()=>{
    if(sidebar.style.left === "-250px"){
        sidebar.style.left = "0px";
    }
    else{
        sidebar.style.left  = "-250px";

    }
})
