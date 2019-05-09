$('p').click(function(){
	$('p').remove();
	$('#desktop').addClass('zoom');
});




// $('.big-letter').click(function(){
// 	$('.big-letter').remove();
// 	$('#desktop').addClass('zoom');
// });

// $('.BIGA'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGL-1'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGL-2'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGP'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGI'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGT'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})
// $('.BIGS'). click(function(){
//    $('.BIGA').remove();
//    $('.BIGB').remove();
//    $('.BIGL-1').remove(),
//    $('.BIGL-2').remove();
//    $('.BIGP').remove();
//    $('.BIGI').remove();
//    $('.BIGT').remove();
//    $('.BIGS').remove();
// 	$('#desktop').addClass('zoom');

// 	})


var height = $(document).height();
var width = $(document).width();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i;
for (i = 0; i < 30; i++) { 
	var yPos = getRandomInt(0, height);
	var xPos = getRandomInt(0, width);  
  $('.title').append('<div style=" top: '+yPos+'px; left: '+xPos+'px;" class="circle"></div>');
}

