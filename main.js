require.config({
	paths:{
	jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
	Tooltip:'lib/tooltip',
	Popover:'lib/popover'

	
	}
	})


require(['thesaurus','jquery','Tooltip','Popover',], function (thesaurus) {


$('#textBox').thesaurus()



});

