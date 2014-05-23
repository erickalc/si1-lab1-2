$(document).ready(function(){
	$(".add input").keypress(function(event){
		if (event.keyCode == 13) {
			$(".add button").click();
		}
	});
	
	$(".add button").click(function(){
		var input = $(".add input"),
		    item = $("<li></li>"),
		    itemContent = $("<span></span>"),
		    itemValue = input.val();
		    colors = ["label-primary", "label-success", "label-info", "label-warning", "label-danger"]
		
		if (itemValue == "") {
			$(".add").addClass("has-error");
			input.focus();
			return;
		} $(".add").removeClass("has-error");
		
		item.append(itemContent);
		
		itemContent.addClass("label").addClass(colors[new Date().getMilliseconds() % colors.length]).html(itemValue);
		itemContent.append($(".defaultOptions").clone().removeClass("defaultOptions").addClass("options"));
		
		$(".rasgar").append(item);
		input.val("");
		input.focus();
		
		$(".scheduler-border .options a").click(function(event){
			if($(event.target).closest("a").attr("href") == "#remove") {
				$(event.target).closest("li").remove();
			} else {
				$(event.target).closest("li").appendTo(".rasgados");
			}
		});
	});
	
	$(".rasgar, .rasgados").disableSelection();
	
	$(".rasgar").sortable({
		connectWith: ".rasgados"
	});
	
	$(".rasgados").sortable({
		connectWith: ".rasgar"
	});
});