//console.log('1');

(function(){ // function to use the DOM

    'use strict';
    document.addEventListener ('DOMContentLoaded', function() {
        // code area
        //console.log('2');

        //var menu=document.getElementById('menu');

        //menu.style.display='none';

        //getElementsByClassName

        /* 
        
        var icon = document.getElementsByClassName ('icon');

        console.log(icon[0]);

        icon[0].style.display = 'none'; 

    */
        
        var
        links=document.getElementsByTagName('a');

        console.log(links.length);


    /*
    
    links[0].style.display="none";

    for(var i=0; i<links.length; i++)
    {
        links[i].setAttribute("target", "_blank");
    }
    
    var newLink = document.getElementById('menu').getElementsByTagName('a');

    newLink[0].setAttribute('href', 'http://www.google.com');
    
    logo=document.querySelectorAll('nav a');
    console.log(logo[0].innerText);
    
    
    */

    var navigator = document.querySelector('menu');
    var newElement = document.createElement('H1');
    var newText = document.createTextNode("Hello world");

    newElement.appendChild(newText);
    console.log(navigator);

    navigator.appendChild(newElement);

    var menuLinks = document.querySelectorAll("#menu a");

    var newLink = document.createElement("A");
    var textLink = document.createTextNode('New link');

    newLink.appendChild(textLink);
    menuLinks.appendChild(newLink);

    // creating a new list
    
    //var newList = document.createElement('LI');
    // newList.appendChild(newLink);
    
    //menuLinks[0].appendChild('newList');

    
    });
})();

//console.log('3');