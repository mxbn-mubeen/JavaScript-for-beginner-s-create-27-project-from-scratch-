// Prompt the user for their name
var name = prompt("Enter Your Name, Please.", "name");

// Get the current date and time
var today = new Date();
var hrs = today.getHours();

// Output a greeting based on the time of day
document.writeln("<b>");
document.writeln("<b>");

if (hrs <= 12)
    document.write("Good Morning " + name + '!');
else if (hrs <= 18)
    document.write("Good Afternoon " + name + '!');
else
    document.write("Good Evening " + name + '!');
document.writeln("<br />");
