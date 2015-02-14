require.config({
	paths:{
	jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
	jqueryUI: 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min',
	}
	})


require(['thesaurus'], function (thesaurus) {


$('body').html((thesaurus.ReplaceBodyTextWithPopover($('body').text())))
$('.thesauruspopover').popover({ html : true, container: 'body'})


});

