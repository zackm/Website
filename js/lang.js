$(document).ready(function(){

	$('#syntax-table').CSVToTable('ss.csv');

	if ($("input#complete").val() == "yes") {
		$("#thanks").show();
	}
	
	$("#form-btn").click(function() {
		$("#comment-form").toggle(200);
	});
	
	$("#choice-form").submit(function(event) {
		event.preventDefault();
		
		
		// use 2D array example in coderunner 
		
		if ($("#choice-syntax").is(':checked')) {
			$("tr#syntax").show();
			$("tr#syntax").children().show();
		} else {
			$("tr#syntax").hide();
			$("tr#syntax").children().hide();
		}
		
		if ($("#choice-style").is(':checked')) {
			$("tr#style").show();
			$("tr#style").children().show();
		} else {
			$("tr#style").hide();
			$("tr#style").children().hide();
		}
		
		if ($("#choice-tips").is(':checked')) {
			$("tr#tips").show();
			$("tr#tips").children().show();
		} else {
			$("tr#tips").hide();
			$("tr#tips").children().hide();
		}
		
		
		
		
		if ($("#choice-java").is(':checked')) {
			$("td#java").show(300);
			$("td#java").animate({ opacity: 1.0 }, 300, function() { });
		} else {
			$("td#java").animate({ opacity: 0.0 }, 300, function() {
				$("td#java").hide(300);
			});
		}
		
		if ($("#choice-javascript").is(':checked')) {
			$("td#javascript").show(300);
			$("td#javascipt").animate({ opacity: 1.0 }, 300, function() { });
		} else {
			$("td#javascript").animate({ opacity: 0.0 }, 300, function() {
				$("td#javascript").hide(300);
			});
		}
		
		if ($("#choice-c").is(':checked')) {
			$("td#c").show(300);
			$("td#c").animate({ opacity: 1.0 }, 300, function() { });
		} else {
			$("td#c").animate({ opacity: 0.0 }, 300, function() {
				$("td#c").hide(300);
			});
		}
		
		if ($("#choice-python").is(':checked')) {
			$("td#python").show();
		} else {
			$("td#python").hide();
		}
		

		
	});
});