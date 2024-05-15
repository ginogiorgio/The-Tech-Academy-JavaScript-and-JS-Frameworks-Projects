
////Selector Challenge
// $(document).ready(function() {
//     // jQuery element selector
//     $("div").text("This text is updated using element selector");

//     // jQuery id selector
//     $("#firstItem").text("This text is updated using #id selector");

//     // jQuery class selector
//     $(".list-item").css("color", "blue").css("font-weight", "bold").text("This text is updated using .class selector");

//     // jQuery complex selector
//     $("ul li:first-child").css("background-color", "yellow").text("This text is updated using complex selector (ul li:first-child)");
// }); 


////Events Challenge
// $(document).ready(function() {
//     console.log("Document is ready!");
// });

// // Using click() method to handle click event
// $("#clickMe").click(function() {
//     alert("Button clicked!");
// });

// // Using hover() method to handle hover events
// $("#hoverMe").hover(
//     function() {
//         $(this).addClass("highlight");
//     },
//     function() {
//         $(this).removeClass("highlight");
//     }
// );

// // Using blur() method to handle blur event
// $("#blurMe").blur(function() {
//     alert("Input blurred!");
// });


// //METHODS CHALLENGE
// $(document).ready(function(){
//     $("#hideMe").click(function() {
//         $("#content").hide();
//     });

//     // Using show() method to show an element
//     $("#showMe").click(function() {
//         $("#content").show();
//     });

//     // Using toggle() method to toggle the visibility of an element
//     $("#toggleMe").click(function() {
//         $("#content").toggle();
//     });
// });

// //Jquery Effect Challenge
// $(document).ready(function() {
//     // Using fadeOut() method to fade out an element
//     $("#fadeOutBtn").click(function() {
//         $("#box").fadeOut();
//     });

//     // Using slideDown() method to slide down an element
//     $("#slideDownBtn").click(function() {
//         $("#box").slideDown();
//     });

//     // Using animate() method to animate an element
//     $("#animateBtn").click(function() {
//         $("#box").animate({
//             width: "400px",
//             height: "400px",
//             opacity: 0.5
//         }, 1000, function() {
//             console.log("Animation completed!");
//         });
//     });

//     // Using stop() method to stop an animation
//     $("#stopBtn").click(function() {
//         $("#box").stop();
//     });
// });

// //DOM Manipulation Challenge
// $(document).ready(function(){
//      // Using text() method to set text content
//      $("#paragraph").text("This text is updated using text() method");

//      // Using attr() method to set the alt attribute of an image
//      $("#image").attr("alt", "Updated Alt Text"); 
// });