# Team-profile-generator
An application to generate a webpage displaying information about the members of a work team. Each member has their name, role and social media handles.

## Descritption
This project is a command line application that generates a team profile page for software engineering teams.
It prompts the user to enter information about each member of the team, such as their name, role, and social media handles. This project was built to become familiar with the inquirer library, classes and testing in javascript. During the course of this project the functionality of the inquirer library was understood and used to recieve input from the user and the fs library was used to write the HTML file.

## User Story

* As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## This project has the following classes:
* Creates classes for each team member provided by the manager and export them. The tests for these classes (in the `_tests_` directory) ALL pass.

* The first class is an `Employee` parent class with the following properties and methods:   
    * `name`
    * `id`
    * `email`
    * `getName()`
    * `getId()`
    * `getEmail()`
    * `getRole()`
 * The other three classes extend `Employee`. 
 * In addition to `Employee`'s properties and methods, `Manager` has the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
 * In addition to `Employee`'s properties and methods, `Engineer` has the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
 * In addition to `Employee`'s properties and methods, `Intern` has the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`

## This project does the following:
* When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.

## Browser view of application: 



## Mobile view of application: 