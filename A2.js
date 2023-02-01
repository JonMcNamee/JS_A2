
window.onload = function () 
{
    document.querySelector("#tabContainer");

    document.addEventListener("click", TabClick);

    document.querySelectorAll(".tab")[0].click();
}

//function to trigger class changes on click of new tab
function TabClick(evt) 
{

    //sets clicked tab as active 
    let tab = evt.target;

    //deselect before adding active, else nothing shows up
    deselectTab();
    tab.classList.add("active");

   // process for swapping active and hidden tabs
    let id = tab.innerHTML; 
    id = id.replace(" ", "_"); 

    hideSection();

    document.querySelector("#" + id).classList.remove("hidden"); 
}

//function to add hidden class to inactive tabs, so that only selected tab content will appear
function hideSection() 
{
    let sections = document.querySelectorAll(".tabContent");

    for (let i = 0; i < sections.length; i++) 
    {
        sections[i].classList.add("hidden");
    }
}

// function to remove active class from tab 
function deselectTab() 
{
    let tabs = document.querySelectorAll(".tab");
    
    for (let i = 0; i < tabs.length; i++) 
    {
        tabs[i].classList.remove("active");
    }
}

