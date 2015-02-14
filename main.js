require.config({
	paths:{
	jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
	Tooltip:'lib/tooltip',
	Popover:'lib/popover'

	
	}
	})


require(['thesaurus','jquery','Tooltip','Popover',], function (thesaurus) {


$('body').html((thesaurus($('body').text())))
$('.thesauruspopover').popover({ html : true, container: 'body'})


});

