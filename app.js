$(document).ready(function() {

   $("#oneone").change(function() {
       var txt = $("#oneone").val();
       console.log(txt);
       saveA();
       
   });
    $("#onetwo").change(function() {
       var txt = $("#onetwo").val();
        console.log(txt);
    }); $("#twoone").change(function() {
       var txt = $("#twoone").val();
        console.log(txt);
    });
    
    var data = {
    A: {
      team1: $("#oneone").val(),
      team2: $("#onetwo").val(),
      team3: $("#onethree").val(),
      team4: $("#onefour").val()
    },
    B: {
        team1: $("#twoone").val(),
        team2: $("#twotwo").val(),
        team3: $("#twothree").val(),
        team4: $("#twofour").val()
     },
    C: {
        team1: $("#threeone").val(),
        team2: $("#threetwo").val(),
        team3: $("#threethree").val(),
        team4: $("#threefour").val()
        },
    D: {
        team1: $("#fourone").val(),
        team2: $("#fourtwo").val(),
        team3: $("#fourthree").val(),
        team4: $("#fourfour").val(),
    }
    };
   
    function saveA() {
        localStorage.setItem("#oneone",A[1]);
    }
    function loadA() {
        document.getElementById("oneone").innerHTML = localStorage.getItem(A[1]);
        
    }
});
   
    
 