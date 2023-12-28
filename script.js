const dragdrop = document.getElementById("widgets_container");

new Sortable(dragdrop, {
    animation: 350, 
    chosenClass: "widgets_chosen", 
    dragClass: "widgets_drag",
});



