
window.onload = function () 
{
    document.querySelector("#tabContainer").addEventListener("click", TabClick);

    document.querySelectorAll(".tab")[0].click();

    let btnT2 = document.querySelector("#btnT2");
    btnT2.addEventListener("click", T2Calc);

    let btn4 = document.querySelector("#btnT4");
    btnT4.addEventListener("click", T4Calc);
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

    let sum = 0;

    //for loop to add values together
    for( let i= 0; i < values.length; i++)
    {
        values[i] = Number(values[i]);

        sum+= values[i];
    }

    let avg = sum / count;

    let min = Infinity;
    let max = 0;

    //for loop to set min and max values
    for(let i=0; i < values.length; i++)
    {
        min = Math.min(min, values[i]);
        max = Math.max(max, values[i]);
    }

    let result = "";
    result += "<p>Number of Values: " + count +"<br>" + "Total: " 
    + sum + "<br>"+ "Average: " + avg + "<br>" + "Smallest: " + min + "<br>"
    + "Largest: " + max;
    let out = document.querySelector("#T2OutText");
    out.innerHTML = result;

}

/*Ask the user for a number of stars, numStars, and display that number of stars 
on a single line. (A star is the '*' character.)Show an error message if the value
 entered is less than 1.*/
function T4Calc()
{
    let value = document.querySelector("#T4Input").value;
    
    let output ="";

    //if else to check value is 1 or more, and if it isn't to display an error
    if(value < 1)
    {
        output += "ERROR: NUMBER MUST BE 1 OR MORE";
    }
    else
    {
        //for loop to add an * equal to the number entered
        for(let i = 0; i < value; i++)
        {
            output+= "* ";
        }
    }

    let out = document.querySelector("#T4OutText");
    out.innerHTML = output;
}
