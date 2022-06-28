var text;

function display(){
     text = document.getElementById('box').value;
}


function buttonClick(){
    if ( text == 'Open'){
        document.getElementById('para').innerHTML = "We are " + text; 
    }
    else if( text == 'Close'){
        document.getElementById('para').innerHTML = "We are " + text; 
    }
    else{
        document.getElementById('para').innerHTML = "Please Choose Any One";
    }
}