        // Initialize tooltip component
        $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        })

        // Initialize popover component
        $(function () {
        $('[data-toggle="popover"]').popover()
        })
                    if(screen.width == 1440)
            {
 
               document.getElementById("fa-icones").style.display='none';
               document.getElementById("go-icones").style.display='none';
            }
            if(screen.width == 1024)
            {
 
               document.getElementById("fa-icones").style.display='none';
               document.getElementById("go-icones").style.display='none';
            }
            if(screen.width == 1536)
            {
 
               document.getElementById("fa-icones").style.display='none';
               document.getElementById("go-icones").style.display='none';
            }
            if(screen.width == 768)
            {
  			   document.getElementById(".sticky-container").style.padding='0px';
 			   document.getElementById(".sticky-container").style.margin='0px';
 			   document.getElementById(".sticky-container").style.position='fixed';
               document.getElementById(".sticky-container").style.right='537px';
               document.getElementById(".sticky-container").style.top='230px';
               document.getElementById(".sticky-container").style.width='210px';
               document.getElementById(".sticky-container").style.z-index='1100';
            }
            if(screen.width == 425)
            {
 			   document.getElementById(".sticky-container").style.padding='0px';
 			   document.getElementById(".sticky-container").style.margin='0px';
 			   document.getElementById(".sticky-container").style.position='fixed';
               document.getElementById(".sticky-container").style.right='210px';
               document.getElementById(".sticky-container").style.top='230px';
               document.getElementById(".sticky-container").style.width='210px';
               document.getElementById(".sticky-container").style.z-index='1100';
            }
