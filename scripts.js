$(document).ready(function(){
	var $counter = 1;
	var $add = ('#first');
	$('button#generate').click(function(e){
		e.preventDefault();
		newDiv($counter);
		console.log($counter);
		$counter += 1;
	});

	function newDiv(count){
		var $div = $('<div>');
		var $button1 = $('<button>');
		var $button2 = $('<button>');

		$div.attr('class', count);
		$div.text('line #:' + count);
		$button1.text('Change Color');
		$button1.attr('class', 'change');
		$button2.text('Remove');
		$button2.attr('class', 'remove');
		$div.append($button1);
		$div.append($button2);
		$('div#first').append($div);
	};
	$('div').on('click', '.remove', function(e){
		e.preventDefault();
		$(this).parent().remove();
	});
	$('div').on('click', '.change', function(e){
		e.preventDefault();
		$(this).parent().css('background-color', 'blue');
	});
});