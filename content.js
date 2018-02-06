var home = document.createElement("a");
home.setAttribute("id", "rootlink");
home.setAttribute("href", "https://www.reddit.com/r/blackdesertonline/");
var label = document.createTextNode("Root");
home.appendChild(label);
var head = document.getElementById("siteTable");
head.insertBefore(home, head.firstChild);