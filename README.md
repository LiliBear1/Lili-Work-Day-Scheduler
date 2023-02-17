# Work Day Scheduler
A simple calendar application that allows a user to save events for each hour of the day

## Description
Using my JQuery skills and incorporating Moment.js, I have created a simple work day scheduler. This app will run in the browser, and will feature dynamically updated HTML powered by JQuery I write.

## Table of Contents

* [Deployed Page](#deployed-page)
* [Process](#process)
* [Additional Notes](#additional-notes)
* [Credits](#credits)
* [License](#license)


## Deployed Page

* [Deployed Page Link](https://lilibear1.github.io/Work-Day-Scheduler/)

* [Git Page Link](https://github.com/LiliBear1/wk6-webAPI-quiz) 


## Process

This is a simple page that allows users to schedule events during business hours.

![Work Day Scheduler Demo GIF"](/images/Demo.gif)

The application uses the Moment.js library to get the current date and time, and to compare it to the time of each event to determine whether it is in the past, present, or future. The timeblocks for each hour of the day are color-coded accordingly.

Users can add events for each hour of the day and save to local storage: 

![Local storage example"](/images/LocalStorage.png)

## Usage

* Load the index.html file in a web browser

* The page will display a header with the current date and time, and timeblocks for each hour (standard business hours)

* Each timeblock includes an hour indicator, a text area for the user to enter the event description, and a save button to save the event to local storage

* The timeblocks are color-coded to indicate whether they are in the past (grey), present (pale yellow), or future (dark pink)

* To add an event, click on the text area for the relevant timeblock, enter a description, and click on the save button

* The event will be saved to local storage, and will be displayed in the corresponding timeblock the next time the page is loaded


## Additional notes

If I had time to develop this further I would perhaps looks at adding in the following enhancements:

* Adding the ability to delete events

* Having different view options such as weekly and monthly

* Further customisation to make the app look more appealing and accessible / user friendly

* Allowing a save option for multiple events within a timeblock e.g. in 15 min increments

* Building in a reminder function so users can receive notifications about upcoming events 

* Options for recurring events e.g. user may have a daily sprint call at the same time every day

## Credits 
2022 Trilogy Education Services, LLC

## License

An [MIT license](https://choosealicense.com/licenses/mit/) was used.
