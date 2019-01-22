

### Instructions

1. Create an array of strings and save it to a variable called `topics`.

2. Take the topics in this array and create buttons in HTML.
  
3. When the user clicks on a button, the page grabs 5 static, non-animated gif images from the GIPHY API and places them on the page.

4. When the user clicks one of the still GIPHY images, the gif will animate. If the user clicks the gif again, it will stop playing.

5. Under every gif, its rating (PG, G, so on) is displayed.
   * This data is provided by the GIPHY API.
   
6. Added to the page is a form that takes the value from a user input box and adds it into the `topics` array. 
Then remakes the buttons on the page.


# Week 6: Giftastic
- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 10/11/2018
- **Built With** HTML, CSS, Bootstrap, Javascript, JQuery, Event Listeners & AJAX call


## Description & Requirements

In this assignment, we were tasked with utilizing the GIPHY API to make a dynamic web page send Ajax calls to the GIPHY website, and return results based on user input. 


## How it Works
 
   ![train homework](/assets/images/screen.png)

1. The user will submit information into the dashboard 
    
    * Train Name
    * Destination 
    * First Train Time -- in military time
    * Frequency -- in minutes

    ![train homework](/assets/images/enterData.png)


2. The code will calculate when the next train will arrive relative to the current time. It will then store these values into the Firebase database and make them available for any user viewing the table.


    *DOM DISPLAY*

    ![DOM display](/assets/images/calculate.png)


    *CONSOLE LOG DISPLAY*

    ![Console display](/assets/images/be-calcs.png)




   
        
## Notes
---
This assignment was pretty straight forward. I enjoyed working on it and was excited to try out some new CSS methods as well as learn moment.js. It had a bug that caused it to display the current time in both the 'current time' and 'arrival time' fields which stumped me at the time. However, I revisited it in week 18 of the class and was pleasantly suprised at how easily I was able to debug it. Looks like the classes worked Mark & Sue!










