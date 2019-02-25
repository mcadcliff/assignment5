//WHAT IS YOUR NAME WINDOW.PROMPT
window.onload = function()
{var user = window.prompt("What is your name?");
 
if (user === "" || user === null)
{console.log("Ok, I will just call you  user.");}
 
else (user !== "")
{console.log("Hi, " + user + "!");}



//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];


//FAVORITE AUTHOR WINDOW.PROMPT 
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.   
var authorAge = window.prompt("Who is your favorite author?");
switch (authorAge)
    
{case "Churchill" : console.log("Churchill was 66 during this speech.");break;
        
case "Ghandi" : console.log("Ghandi was 73 during this speech.");break;
        
case "Demosthenes" : console.log("Demosthenes was 42 during this speech.");break;
        
default : console.log("You must not have entered the name correctly, try again.");break}
});

///YEAR IS BCE  
if (speechesArray.yearIsBCE === true)
{console.log("This speech took place before the common era.");}
else
{console.log("This speech took place during the common era.");}



//RECENT SPEECH
if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year)
{console.log("This is the most recent speech on the page.")}
else if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year) 
{console.log("This is the oldest speech on the page.");} 


//CHURCHILL
document.getElementById('BtnChurchill').addEventListener('click', function()
{console.log("This speech was written by Churchill in 1940.");});          
//Code in here executes when the user clicks the "Churchill" button.
       
                                                      
//GHANDI
document.getElementById('BtnGhandi').addEventListener('click', function()
{console.log("This speech was written by Ghandi in 1942.");}    );

//Code in here executes when the user clicks the "Ghandi" button.

//DEMOSTHENES
document.getElementById('BtnDemosthenes').addEventListener('click', function(){console.log("This speech was written by Demosthenes in 342.");})}
