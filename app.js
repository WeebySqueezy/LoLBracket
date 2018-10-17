$(document).ready(function() {
$("#recent").click(function() {
    localStorage.removeItem("#oneone");localStorage.removeItem("#onetwo");localStorage.removeItem("#onethree");localStorage.removeItem("#onefour");
    localStorage.removeItem("#twoone"); localStorage.removeItem("#twotwo"); localStorage.removeItem("#twothree"); localStorage.removeItem("#twofour");
    localStorage.removeItem("#threeone"); localStorage.removeItem("#threetwo"); localStorage.removeItem("#threethree"); localStorage.removeItem("#threefour");
    localStorage.removeItem("#fourone");    localStorage.removeItem("#fourtwo");    localStorage.removeItem("#fourthree");    localStorage.removeItem("#fourfour");
    loadA();
    loadB();
    loadC();
    loadD();
});
    loadA();
    loadB();
    loadC();
    loadD();
        $("select").change(function() {
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
            saveA();
            saveB();
            saveC();
            saveD();
            function saveA() {
        localStorage.setItem("#oneone",data.A.team1);
        localStorage.setItem("#onetwo",data.A.team2);
        localStorage.setItem("#onethree",data.A.team3);
        localStorage.setItem("#onefour",data.A.team4);
    }
            function saveB() {
                localStorage.setItem("#twoone",data.B.team1);
                localStorage.setItem("#twotwo",data.B.team2);
                localStorage.setItem("#twothree",data.B.team3);
                localStorage.setItem("#twofour",data.B.team4);
            }
            function saveC() {
                localStorage.setItem("#threeone",data.C.team1);localStorage.setItem("#threetwo",data.C.team2);localStorage.setItem("#threethree",data.C.team3);localStorage.setItem("#threefour",data.C.team4);
            }
            function saveD() {
                localStorage.setItem("#fourone",data.D.team1);localStorage.setItem("#fourtwo",data.D.team2);localStorage.setItem("#fourthree",data.D.team3);localStorage.setItem("#fourfour",data.D.team4);
            }
            
        
        });
     function loadA() {
        $("#oneone").val(localStorage.getItem("#oneone"));
         $("#onetwo").val(localStorage.getItem("#onetwo"));
        $("#onethree").val(localStorage.getItem("#onethree"));
         $("#onefour").val(localStorage.getItem("#onefour"));
        
    }
    function loadB() {
        $("#twoone").val(localStorage.getItem("#twoone"));
        $("#twotwo").val(localStorage.getItem("#twotwo"));
        $("#twothree").val(localStorage.getItem("#twothree"));
        $("#twofour").val(localStorage.getItem("#twofour"));
    }
    function loadC() {
        $("#threeone").val(localStorage.getItem("#threeone")); $("#threetwo").val(localStorage.getItem("#thretwo")); $("#threethree").val(localStorage.getItem("#threethree")); $("#threefour").val(localStorage.getItem("#threefour"));
        
    }
    function loadD() {
        $("#fourone").val(localStorage.getItem("#fourone"));$("#fourtwo").val(localStorage.getItem("#fourtwo"));$("#fourthree").val(localStorage.getItem("#fourthree"));$("#fourfour").val(localStorage.getItem("#fourfour"));
    }


});
   
    
 