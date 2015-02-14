# Thesaurus
create an interactive popover glossary using a JSON thesaurus. This library auutomatically incorporates bootstrap-popover html into a block of text where terms are found that match entries in a pre-populated thesaurus. 

# Set up:

Create a list of terms and definitions in JSON format as follows:



[

  {
  
    "term": "World",
    
    "definition": "the earth, together with all of its countries and peoples."
  },
  
  {
  
    "term": "Hello",
    
    "definition": "used as a greeting or to begin a telephone conversation."
    
  }
  
]

apply the formatting by using the following syntax:

$('#textBox').html((thesaurus($('#textBox').text())))
