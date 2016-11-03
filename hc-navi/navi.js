    var burgermenu = document.getElementsByClassName("burgermenu");
    burgermenu[0].addEventListener("click", myMove);
    var pos = 0;
    var ende = false;
    
    /*
    window.onresize=function()
    {
        if(window.innerWidth >= 1024 && ende == true) {
            myMove();
        }
    }
    */

    function myMove() {
        var elem = document.getElementById("move");
        var id = setInterval(frame, 1);
        
        function frame() {
            if(ende == false)
            {
                if (pos == 170) {
                clearInterval(id);
                ende = true;
                } 
                else 
                {
                    pos++;
                    elem.style.right = pos + 'px';
                }
            }
            else if(ende == true)
            {
                if (pos == 0) 
                {
                    clearInterval(id);
                    ende = false;
                } 
                else 
                {
                    pos--;
                    elem.style.right = pos + 'px';
                }
            }
        }
    }
    
    var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);