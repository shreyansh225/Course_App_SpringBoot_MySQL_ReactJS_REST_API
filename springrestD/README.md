# Spring_Boot_App_with_MySQL_config
The normal array list data input have been substituted with the Database input output commands
<h4> Previous Version of the Spring Boot application without SQL Congiguration is - https://github.com/shreyansh225/Spring_Boot_Application.git </h4> 

<h3> SOFTWARE REQUIREMENTS </h3>
<h4>
  1. JDK                                  <br>
  2. Eclipse IDE                          <br>
  3. Spring Tool Suit 4                   <br>
  4. MySQL Installer ( MySQL Workbench )  <br>
  5. Postman                              <br>
</h4>

<h3> Steps to Run and check the backend Spring Boot Application </h3>  

<h4>
  Step 1: Clone/Download zip and Open the folder in Spring Tool Suits or in Eclipse.        <br>
  Step 2: Open MySQL Workbench and create a new schema (myhiber) as it is the same sql database url name in the appication.properties    <br>
  Step 2: To Run the application go to src\main\java\com\springrestD\springrestD\SpringrestDApplication.java   and run as Java Application or if in Spring tool Suit u can run as Spring Boot App <br>
  Step 3: Open Postman and in a Workspace enter the url link localhost:9090/courses/ to check the GET, POST, PUT, DELETE Requests. <br><br>
  
  The Port number was changed from 8080 to 9090 in \src\main\resources\application.properties ; Therefore the link port number had to be changed from localhost:8080/courses/  to localhost:9090/courses/        <br>
</h4>

<img src="https://github.com/shreyansh225/Spring_Boot_App_with_MySQL_config/blob/master/Diagrams%20and%20Photos/Spring%20boot%20work%20flow.jpeg" alt="Flow Chart" width="" height="">
<br>
<img src="https://github.com/shreyansh225/Spring_Boot_App_with_MySQL_config/blob/master/Diagrams%20and%20Photos/API%20Urls%20used.jpeg" alt="API Urls" width="" height="">

API Urls for the course App  <br>
<p>
  <h3>Method----------API Urls(Urls start with Base url)----------- Operation</h3> <br>

   GET----------------------/courses--------------------------------Get all course  <br>
   GET----------------------/courses/{courseId}---------------------Get single course of the given courseId in Url  <br>
   POST---------------------/courses ------------------------------ Add new course  <br>
   PUT----------------------/courses--------------------------------Update the course  <br>
  DELETE--------------------/courses/{courseId}----------------------Delete the course of the given courseId in the url  <br>
<p>
