# Thesaurus
Create an interactive glossary for any web text...

This library automatically incorporates bootstrap-popover html into a block of text where terms are found that match entries in a pre-populated thesaurus. This code has been implemented in touch screen kiosks for museums where the thesaurus.JSON is generated directly from a database managed by curators, and the text presented to museum visitors is augmented with term descriptions.

# Dependencies: 

This project uses the following libraries:

JQuery

Bootstrap - popover

Bootstrap - tooltip

Depencdencies are managed using the require.js framework

# Set up:

1.) Create a list of terms and definitions in JSON format as follows:
```
[  {
  
    "term": "World",
    
    "definition": "the earth, together with all of its countries and peoples."
    
  },  {
  
    "term": "Hello",
    
    "definition": "used as a greeting or to begin a telephone conversation."
    
  }]

2.) apply the formatting to any individual text block using the following syntax:

$('#textBox').thesaurus()
```
