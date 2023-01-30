window.onload = function () 
{
    document.querySelector("#tabContainer")
    document.addEventListener("click", TabClick);
    document.querySelectorAll(".tab")[0].click();
};


function TabClick(evt) 
{
    let tab = evt.target;
    deselectTab();
    tab.classList.add("active");

    let id = tab.innerHTML; 
    id = id.replace(" ", "_");
    hideSection();
    document.querySelector("#" + id).classList.remove("hidden");
}

function deselectTab() 
{
    let tabs = document.querySelectorAll(".tab");
    for (let i = 0; i < tabs.length; i++) 
    {
        tabs[i].classList.remove("active");
    }
}

function hideSection() 
{
    let sections = document.querySelectorAll(".tabContent");
    for (let i = 0; i < sections.length; i++) 
    {
        sections[i].classList.add("hidden");
    }
}
