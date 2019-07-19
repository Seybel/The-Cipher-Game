// var randomNumber = Math.floor(Math.random() * 100) + 1;

$(document).ready(function () {
    $(".flex-inner").hide();
});

$(document).ready(function (){
    $(".flex-item").click(function () {
        $(this).css('background-color', '#0b8dc7');
        $("#display-no1").show();
       
    });
});

$(document).ready(function () {
    $(".red").click(function () {
        $(this).css('background-color', '#ff003e');
        $("#display-no2").show();  

    });
});



var a = 0, b = 0, c = 0, d = 0;

$(document).ready(function () {
    $(".flex-item").click(function () {      
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        $(this).text(randomNumber)          
        a += randomNumber 
        console.log(a + " || " + b);
        c++;
        // if (c==10) {
        //     var result = alert(a); 
        // }
        
    });
});

$(document).ready(function () {
    $(".flex-item-test").click(function () {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        $(this).text(randomNumber)

        b += randomNumber
    
        console.log(a + " || " + b);

        d++;
        if (d == 10) {
            if (a > b) {
                alert("Player 1 wins with " + a + " points!!")
            }
            else if (b > a) {
                alert("Player 2 wins with " + b + " points!!")
            }
            else { 
                alert("We have no winner, the game is tied!!")
            }
        }

        // if ((c == 10) && (d == 10))
        //     if (result > result2) {
        //         alert('Player1 wins');
        //     }
        //     else {
        //         alert('player2 wins');
        //     }
    });
});

$(document).ready(function() {
$("button").click(function (){
        location.reload();
    });
}); 


// Trying to out the total score at the end
// if (result > result2) {
//     alert('Player1 wins');
// }
// else {
//     alert('player2 wins')
// }
