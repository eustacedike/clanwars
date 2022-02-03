function display (A) {
var DISPLAY = document.getElementById('display');
var B = document.createTextNode (RtrnNumber(A));
DISPLAY.appendChild(B);
}

function RtrnNumber (C) {
    var B=C.id;
    return B;
}


function Calculate () {
    var A = document.getElementById('display').textContent;
    var Equal = eval(A);
    console.log(Equal);
    var F = document.createTextNode(Equal);
    var G= document.getElementById('answerdisplay');
    G.appendChild(F);
    var JJ = document.getElementById('answerdisplay').textContent;
    mad(JJ);
    }

   
    
function Delete() 
{var Me = document.getElementById('display').lastChild.remove();
}

function mad (Mann) {
    if (Mann===true)
    {return document.getElementById('display').removeChild();}}
