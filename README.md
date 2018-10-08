# Giftastic
NW Bootcamp HW Assignment 6: AJAX 

### Overview

In this assignment, we were tasked with utilizing the GIPHY API to make a dynamic web page that uses buttons to populate gifs. It also give the user the ability to add their own buttons to the page as well.

![GIPHY](Images/1-giphy.jpg)


### Instructions

1. Create an array of strings and save it to a variable called `topics`.

2. Take the topics in this array and create buttons in HTML.
  
3. When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on the page.

4. When the user clicks one of the still GIPHY images, the gif will animate. If the user clicks the gif again, it will stop playing.

5. Under every gif, its rating (PG, G, so on) is displayed.
   * This data is provided by the GIPHY API.
   
6. Added to the page is a form that takes the value from a user input box and adds it into the `topics` array. 
Then remakes the buttons on the page.
