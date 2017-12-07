$(document).ready(function(){
	$('#generate').click(function(){
		var de  = $('#de').val()
		var ate = $('#ate').val()
		clean()
		if(de != 0 && ate != 0){
			console.log('DONE')
		}

	})
});

function cleanAndCreateTable(){
	$('body').html("<table id='content' border='1'></table>");
}