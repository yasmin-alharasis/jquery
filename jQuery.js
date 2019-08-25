// Exercises with solutions for those who want to practice jQuery

// Exercise 1
// Check if jQuery is loaded

	$(function (){
        if (jQuery) {

            alert("yes");
        } else {

            alert("no");
        }
    });
// $(document).redy(function(){

// });

// Exercise 2
// If You would have very long website - How to help user with fast getting back on top :)

$(document).ready(function(){


    $("#top").click(function(){
        $('html,body').animate({scrollTop:$('html').height()},5980)


    });



    $("#down").click(function(){
        $('html,body').animate({scrollTop:"0"},5980)


    });




  });

// Exercise 3
// If You would like to change sizes of Your div/button with oneclick :)
$('#btn1').click(function(){
	// $('#box').animate({width:'200px',hight:'200px'},500)
	$("#box").css({width : '250px', height: "250px"})
});

$("#btn2").click(function(){
	$("#box").animate({width:'100px',height:'90px'},500)
})

// Exercise 4
// Learn how to fadein your boxes
$('#btnfade').click(function(){
	$('#div1').fadeIn(1000);
	$('#div2').delay(1000).fadeIn(1000);
	$('#div3').delay(2000).fadeIn(1000);


})

// Exercise 5
// User must first accept then he or she can signup
    $('#accept').click(function(){
        if($('#accept').prop('checked')){
            $('#submitbtn').attr("disabled", false)
        }
        else{$('#submitbtn').attr("disabled", true)}
    })

// Exercise 6
// Dont be an ass - let them print
$('.printPage').click(function(){
     window.print();
});

// Exercise 7
// Can username be too long? Yest it can - lets limit that
$('#textarea').keyup(function(){
    var maxLength = 20;
    var length = $(this).val().length;
    var length = maxLength-length;
    $('#rchars').text(length);
})

// Exercise 8
// Wanna make some words bolder, do it with jQuery
$('.bold').css({"font-weight": "bold"})


// Exercise 9
// Add new div to your website


// $("#add-div").click(function(){
//         $('#add-div').after('<div class="new_div">s</div>');
//         var divNew = $('.new_div');
//         divNew.html($('#take-this').text());
//         divNew.css({
//             backgroundColor: "green",
//             margin: "3px auto"
//         });
//     });
$('#btn9').click(function(){
    $('#div9').append('<div> new div </div>')


})
// Exercise 10
// Select values from a JSON object using jQuery


// Exercise 11
// Add element within ul list
$('#btnclick').click(function(){
        $('#header ul').append('<li><a href="#">New Element</a></li>');
    })
// Exercise 12
// Know what user puts into textbox

    $('#usertext').on('keyup', function() {
        console.log($('usertext').val());
    })



// Exercise 13
// Change input value

$('#button').click(function(){
        $('#button').attr("value", "yasmin");
    });