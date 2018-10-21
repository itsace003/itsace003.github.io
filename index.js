$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
var countDownDate = new Date("Jan 8, 2019 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
  //Zeros
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
 
  
  // Display the result in the element with id="demo"
  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE CAMPAIGN BEGINS";
  }
}, 1000);

  // COUNTDOWN
function makeTimer(){
    
	var endTime = new Date("14 Juni 2019 20:00:00 GMT+02:00");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	$("#countdowndays p").html(days + " Days");
	$("#countdownhours p").html(hours + " Hours");
	$("#countdownmins p").html(minutes + " Minutes");
	$("#countdownsecs p").html(seconds + " Seconds");
	
	//ADAPT FONT SIZE	
	var fontwidth1 = $('#countdowndays p').width();
  var divwidth = $('.box').width();
  var size1 = parseFloat($('#countdowndays p').css('font-size'));
  var fontsize1 = (divwidth / fontwidth1) * size1;
        
  var fontwidth2 = $('#countdownhours p').width();
  var divwidth = $('.box').width();
  var size2 = parseFloat($('#countdownhours p').css('font-size'));
  var fontsize2 = (divwidth / fontwidth2) * size2;
        
  var fontwidth3 = $('#countdownmins p').width();
  var divwidth = $('.box').width();
  var size3 = parseFloat($('#countdownmins p').css('font-size'));
  var fontsize3 = (divwidth / fontwidth3) * size3;
        
  var fontwidth4 = $('#countdownsecs p').width();
  var divwidth = $('.box').width();
  var size4 = parseFloat($('#countdownsecs p').css('font-size'));
  var fontsize4 = (divwidth / fontwidth4) * size4;
        
  $('#countdowndays p').css("font-size", fontsize1);
  $('#countdownhours p').css("font-size", fontsize2);
  $('#countdownmins p').css("font-size", fontsize3);
  $('#countdownsecs p').css("font-size", fontsize4);
}
// update every second
setInterval(function() { makeTimer(); }, 1000);
