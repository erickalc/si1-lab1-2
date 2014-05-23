$(document).ready(function(){
	// Ativia adicionar com enter
	$(".add input").keypress(function(event){
		if (event.keyCode == 13) {
			$(".add button").click();
		}
	});
	
	$(".add button").click(function(){
		// Criando elementos
		var input = $(".add input"),
		    item = $("<li></li>"),
		    itemContent = $("<span></span>"),
		    itemValue = input.val();
		    colors = ["label-primary", "label-success", "label-info", "label-warning", "label-danger"]
		
		
		// Verifica se Existe algum caracter no campo
		if (itemValue == "") {
			$(".add").addClass("has-error");
			input.focus();
			return;
		} $(".add").removeClass("has-error");
		
		// Cria o item
		itemContent.addClass("label").addClass(colors[new Date().getMilliseconds() % colors.length]).html(itemValue);
		itemContent.append($(".defaultOptions").clone().removeClass("defaultOptions").addClass("options"));
		item.append(itemContent);
		
		// Adicionar o item aos assunstos a rasgar
		$(".rasgar").append(item);
		
		//Adiciona os listeners para rasgado e remover no item
		$(".scheduler-border .options a").click(function(event){
			if($(event.target).closest("a").attr("href") == "#remove") {
				$(event.target).closest("li").remove();
			} else {
				$(event.target).closest("li").appendTo(".rasgados");
			}
		});
		
		// Limpa o campo
		input.val("");
		input.focus();
	});
	
	// Configura o Drag and Drop do jQueryUI
	$(".rasgar, .rasgados").disableSelection();	
	$(".rasgar").sortable({
		connectWith: ".rasgados"
	});	
	$(".rasgados").sortable({
		connectWith: ".rasgar"
	});
});