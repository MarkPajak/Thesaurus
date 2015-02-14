require.config({
	paths:{
	jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
	Tooltip:'tooltip',
	Popover:'popover'

	
	}
	})


require(['thesaurus','Tooltip','Popover',], function (thesaurus) {


$('body').html((thesaurus.ReplaceBodyTextWithPopover($('body').text())))
$('.thesauruspopover').popover({ html : true, container: 'body'})


});

