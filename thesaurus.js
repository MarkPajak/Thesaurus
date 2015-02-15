/**
 * jQuery Thesaurus v1.0
 *
 * by Mark Pajak 
 * 
 * Licensed under the MIT license.
 */


define(['jquery','text!Thesaurus.JSON'], function($,Thesaurus) {


(function ($) {

    $.Thesaurus = function (options, element) {
	
		Thesaurus=$.parseJSON(Thesaurus)
        this.element = $(element);		
        this._init(options);
    };

    $.Thesaurus.settings = {};

    $.Thesaurus.prototype = {

        _init: function (options) {
            this.element.html(this._renderItems())
			$('.thesauruspopover').popover({ html : true, container: 'body'})
        },

      

        _renderItems: function ($els) {
	
					var self = this;
					var BodyText=this.element.text() ||"xxx"					
					var text = BodyText.split(' ');					
					var NewBodyText=[];
					
					for( var i = 0, len=text.length; i<len; i++ ) {							
							NewBodyText.push( this._ReplaceWordWithPopOverHTML(text[i]) )
					}
           	
					return NewBodyText.join(" ");	


          
        },
		
		_FindTermDefinition: function(termTomatch){

			var termTomatch = termTomatch||"xxxx"
			var TermDefinition = false;
			
			$.each(Thesaurus, function(key, term) {

				 if(termTomatch.toLowerCase()==term.term.toLowerCase()){
				 TermDefinition=term.definition
				
				 }
			})
			
		return TermDefinition 

		},

		
		
		_ReplaceWordWithPopOverHTML: function (Word){

					var returnedHTML =Word 
					var Definition = this._FindTermDefinition(Word)

					if(this._FindTermDefinition(Word)){

							var title = title||"Definition"
							var dataContent = Definition||"Content that is too long to display because there is too much of it to fit in your table cell. But it all fits in this popover!"
							var unpoppedText = Word||"Content that is too long to display..."
							var popOverhtml = '<a href="#" data-container="body" class="thesauruspopover"    data-content="' + dataContent  + '"  data-placement="bottom">';
							popOverhtml += unpoppedText + '</a>';					
							returnedHTML= popOverhtml;
							
						}

					return returnedHTML

		},

  
        
    }


    $.fn.thesaurus = function (options, e) {

	
		if (typeof options === 'string') {
            this.each(function () {
                var container = $.data(this, 'thesaurus');
                container[options].apply(container, [e]);
            });
        } else {
            this.each(function () {
                $.data(this, 'thesaurus', new $.Thesaurus(options, this));
            });
        }
        return this;
    }

})(jQuery)
});


