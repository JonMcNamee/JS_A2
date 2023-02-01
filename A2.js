
window.onload = function () 
{
    document.querySelector("#tabContainer").addEventListener("click", TabClick);

    document.querySelectorAll(".tab")[0].click();

    let btnT2 = document.querySelector("#btnT2");
    btnT2.addEventListener("click", T2Calc);
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

/*Ask the user for a comma-separated set of numeric values. 
Display the number of values entered, the total, the average, 
the smallest value, and the largest value. */
function T2Calc()
{
    let values = document.querySelector("#T2Input").value.split(',');
    

    let count = values.length;

    let sum = values.sum;

    let avg = sum / count;

    let min = Math.min(values);
    let max = Math.max(values);

    let result = "";
    result += "<p>Number of Values: " + count +"<br>" + "Total: " 
    + sum + "<br>"+ "Average: " + avg + "<br>" + "Smallest: " + min + "<br>"
    + "Largest: " + max;
    let out = document.querySelector("#T2OutText");
    out.innerHTML = result;

}
