# Alert User


Instructions for how to run program: 
  - I attempted to build a bot that would communicate with the user, however I was unsuccesfull
  - when you open the page you will receive an alert asking for you first name and last name, it will then run a cross refernce with the json data, 
    if the user is found, they will recieve this message, in coorspondence with the user's data and greeting that cooresponds to the time of day;
           `Good morning Ethan, and welcome to Hotel California! Room 304 is now ready you. Enjoy your stay, and let us know if you need anything.`
  - If not found the user will recive the alert:
             alert(`Sorry, we don't seem to have your reservation, have you entered your information correctly? Please refresh the page and try again!`);
             
             

Design descisons: 
  - I created form for users to submit compliants and wanted to create a chat box along with it; I couldn't get it to work so I pivioted to the alert system
  - I used a grid display to orient my page and flex for the indivitual components
  - The nav, i used the sticky positioning but none of the links go anywhere, not even youtube
  
Lanuage: 
  - javscript/node.js
  - It is the lanuage I am most comfortable with and I don't know how else to create a page
  - SCSS/CSS/Bootstrap5
  - I used scss, i didn't use any mixins or anything because it was a small project

Verify the Correctness: 
  - I didn't write any test cases, even in my fetch statements I didn't write any try/catch statemets
  - I just ran it alot of times, reflecting on it now i should have done more
  - I tried many async awaits calls, i have used them in the past but i guess i still need more experiance in making that call,
    i also tried an axios call and was unsuccessfull, it wasn't running on a server
    
What didn't you get to, or what else might you do with more time? 
  - write some test cases
  - run a local json server to write an axios call
  - make it mobile repsonsive
  - orient the links
  - more comments in my code, more organization, it would be hard to maintain if handed to a third party
  - clean up my scss,alot more variables and more organized
  - complete the chatbox
  - redesign the page
  - make it more accessible, aria labels, roles
  - I tried to host the page on heroku; i ran the tail on git bash(windows) and revieced many errors because there were many packages i was missing: 
      
     
