const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');


//Select Tab Content item
function selectItem(){
    removeShow();
    removeBorder();
    //Add Border to current tab
    this.classList.add('tab-border');


    //Grab content item from the DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);


    //Add Show class
    tabContentItem.classList.add("show");
}

//Listen for Tab click
tabItems.forEach(item=>item.addEventListener("click", selectItem));


//removes all the border
function removeBorder(){
    tabItems.forEach(item=>item.classList.remove("tab-border"));
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove("show"));
}