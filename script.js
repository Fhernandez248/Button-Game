//Try to solve all the challenges below--
//Challenge 1: Fix the game so that the buttons reappear. 
//Challenge 2: Make a new button that uses jQuery to add the following text to the screen: "The solution is 4,2,6,7,3,5,1."
//Challenge 3: Use jQuery to make the buttons bigger. 
//Challenge 4: Make all the buttons different colors using CSS.
//Challenge 5: Use jQuery to change the background color of the screen every time you click a new button. 
//Challenge 6: Center the instructions on the page. 
//Challenge 7: Make a new button that refreshes all the buttons.

//Export your code as a gist before doing the last challenge!

//Challenge 8: Look at the HTML section of the code and find the secret hidden link. Use jQuery to make it visible, then follow the link to the secret challenge page!


        $("#one").click(function(){
            $("#five").toggle();
        });
        $("#two").click(function(){
            $("#four").toggle();
        });
        $("#three").click(function(){
            $("#seven").toggle();
        });
        $("#four").click(function(){
            $("#eight").toggle();
        });
        $("#five").click(function(){
            $("#three").toggle();
        });
        $("#six").click(function(){
            $("#two").toggle();
        });
        $("#seven").click(function(){
            $("#six").toggle();
        });
        $("#eight").click(function(){
            $("#one").toggle();
        });
        
        
      $(".reset").click(function(){
        $(".common").show();  
         $("p").text("");
        });
        
         $(".answer").click(function(){
        $("p").text( "The solution is 4,2,6,7,3,5,1.");  
          
      });
      $("background-color").click(function(){
          $("color","red").css();
      });
        

        
