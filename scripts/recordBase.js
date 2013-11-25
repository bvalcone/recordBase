
var projectArray = new Array();
    
projectArray[0] = "Five By Seven";
projectArray[1] = "Artisan";
projectArray[2] = "Crucial P";
projectArray[3] = "Fats Lewis";
projectArray[4] = "Feral Swine Experiment";
projectArray[5] = "The Galen Kipar Project";
projectArray[6] = "Tornado Rider";
projectArray[7] = "Tom Nealy";
projectArray[8] = "The Mystery Band";
projectArray[9] = "The Mighty Black Hand"; 
projectArray[10] = "Rob Marley"; 
projectArray[11] = "S.P.O.R.E."; 
projectArray[12] = "Yankee Slickers"; 

function buildProjectMenu() {
    
    var container = document.getElementById("container");
    var menuContainer = document.createElement("div");
    
    menuContainer.setAttribute("id", "menuContainer");
    
    container.removeChild(document.getElementById("homePng"));
    container.appendChild(menuContainer);
    
    //window.alert("wtf");
    
    for (var i=0; i<projectArray.length; i++)
    {
        var newProjectDiv = document.createElement("fieldset");
        var fieldsetId = i;
            
        newProjectDiv.setAttribute("id", fieldsetId);
        newProjectDiv.setAttribute("class", "projectDiv");
        newProjectDiv.innerHTML = projectArray[i];
        menuContainer.appendChild(newProjectDiv);
        newProjectDiv.onclick = function() { openProject(this.id); };
    }//end for
    
} //end buildProjectMenu()

function openProject(id)
{
    var container = document.getElementById("container");
    var thisProject = document.getElementById(id);
    
    //window.alert(thisProject.id);
    
    clearProjectMenu();
    
    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menu");
    menuDiv.innerHTML = projectArray[id];
    
    container.appendChild(menuDiv);
    
    //var newSongDiv = document.createElement("fieldset");
    //thisProject.appendChild(newSongDiv);
}


function clearProjectMenu()
{
    var container = document.getElementById("container");
    var menuContainer = document.getElementById("menuContainer");
    
    container.removeChild(menuContainer);
}

function start() {
    document.getElementById("homePng").addEventListener("click", function () { buildProjectMenu(); }, false);
} // end function start()

window.addEventListener("load", start, false);