$(document).ready(function(){
	$('#generate').click(function(){
		var de  = parseInt($('#de').val())
		var ate = parseInt($('#ate').val())
		cleanAndCreateTable()
		if(ate > de) {
			table = $('#content');
			table.html('<tr></tr>')
			br = 0;
			for (var i = de; i <= ate; i++) {
				if(br >= 20){
					table.append('<tr></tr>');
					br = 0;
				}
				$('#content tr:last-child').append("<td>"+i+"</td>");
				br++;
			}
		}else{
			location.reload(alert('VALORES INVÁLIDOS!'))
		}
	})
});

function cleanAndCreateTable(){
	$('body').html("<center><table id='content'></table></center>");
}