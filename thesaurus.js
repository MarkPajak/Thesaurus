define(['jquery','text!Thesaurus.JSON'], function($,Thesaurus) {
Thesaurus=$.parseJSON(Thesaurus)

FindTermDefinition= function(termTomatch){

			var termTomatch = termTomatch||"xxxx"
			var TermDefinition = false;
			
			$.each(Thesaurus, function(key, term) {

				 if(termTomatch.toLowerCase()==term.term.toLowerCase()){
				 TermDefinition=term.definition
				
				 }
			})
			
 return TermDefinition 

},



 addPopover= function(title,dataContent,unpoppedText,idToappendTo,TitleYes){
var title = title||"Optional Title"
var dataContent = dataContent||"Content that is too long to display because there is too much of it to fit in your table cell. But it all fits in this popover!"
var unpoppedText = unpoppedText||"Content that is too long to display..."
			var popOverhtml =  '<p><td>';
			if(TitleYes)	{popOverhtml += '<a  role="button" data-toggle="popover" data-trigger="focus"  href="#" style="color:#FFFFFF;text-decoration: none;" class=" too-long" title="' + title + '"   data-content="' + dataContent  + '"  data-placement="bottom">';}
			else
			{
			popOverhtml += '<a href="#"  style="color:#FFFFFF;text-decoration: none;" role="button" data-toggle="popover" data-trigger="focus"data-container="body" class=" too-long"    data-content="' + dataContent  + '"  data-placement="bottom">';
			
			}
				popOverhtml += unpoppedText + '</a>';
				popOverhtml += '</td>';
				var StickpopoverAfter = document.getElementById(idToappendTo);
				$(StickpopoverAfter).append( popOverhtml)

			$('.too-long').click(function(e) {
				 // do something fancy
				 return false; // prevent default click action from happening!
				 e.preventDefault(); // same thing as above
			});
return popOverhtml
},

 ReplaceBodyTextWithPopover= function(BodyText){
					
					var BodyText=BodyText||"xxx"
					var text = BodyText.split(' ');					
					var NewBodyText=[];
					
					for( var i = 0, len=text.length; i<len; i++ ) {							
							NewBodyText.push( this.ReplaceWordWithPopOverHTML(text[i]) )
					}
           	
					return NewBodyText.join(" ");	
},

ReplaceWordWithPopOverHTML= function (Word){

var returnedHTML =Word 
var Definition = this.FindTermDefinition(Word)

if(this.FindTermDefinition(Word)){

				var title = title||"Definition"
				var dataContent = Definition||"Content that is too long to display because there is too much of it to fit in your table cell. But it all fits in this popover!"
				var unpoppedText = Word||"Content that is too long to display..."
							//var popOverhtml =  '<td>';
						
							var popOverhtml = '<a href="#" data-container="body" class="thesauruspopover"    data-content="' + dataContent  + '"  data-placement="bottom">';
							popOverhtml += unpoppedText + '</a>';
							//popOverhtml += '</td>';

								

				returnedHTML= popOverhtml;
	}
	console.log(returnedHTML)
return returnedHTML

}
 

									
									return this
									})




