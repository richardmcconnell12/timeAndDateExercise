// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server

const currentDate = newDate();
let dateTime = "Last Sync: " + currentDate.getDate() + "/"
                + (currentDate.getMonth()+1) + "/"
                + currentDate.getFullDate() +  " @ "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds();

console.log(currentDate)