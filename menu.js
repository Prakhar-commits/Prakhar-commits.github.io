document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById('Menu-button').addEventListener('click' , showMenu)
    document.getElementById('close-Menu').addEventListener('click', closeMenu)

     function showMenu(){
         const menu  =    document.querySelector("section.menu");
         menu.style.height = "100%";
            
     }

     function closeMenu(){
        const menu  =    document.querySelector("section.menu");
        menu.style.height = "0";
            
     }

     function addClickToMenuItems(){
       const menuitems =  document.querySelectorAll("section.menu nav ul>li");
       for(let menuitem of menuitems) {
           menuitem.addEventListener('click', closeMenu);
       }
     }
   addClickToMenuItems();
})