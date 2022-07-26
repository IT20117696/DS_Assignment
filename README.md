# DS_Assignment
“MGM “ is an Online Movie Reservation platform. It helps the users to book movie tickets at any time at any place according to their preference. The user is free to book multiple tickets in different theaters in different tome slots. User can search for the movies and book the movie and the same time he/she has the right to cancel the reservation.
Once the movie is added to the cart the user can add the number of tickets, select the date and time to the movies. Then the user can proceed to the payment process and give the Credit/ Debit card details and confirm payment. Once the payment is done, a conformation email given by the user.

The admin team is responsible to add/update and delete movie details and banners. In addition to that admin can view the details of the received movie tickets and search the movies by its name.  

Tools and Technologies 

Following are the technologies that have been used when developing the above web-based application

•	ReactJS, Bootstrap, VS code used as the frontend framework
•	REST API (Node JS, Express JS, Postman) used as the backend framework
•	MongoDB used as the database
•	Node mailer online E-mail testing and configuring service as the E-mail sending service
•	JSON Web Token
  
 Repository type interfaces:
 
•	Movies Booking Repository
•	Credit Card Dummy Repository 
•	Customer Repository 
•	Movie Details Repository 
•	Card Details Repository
•	Admin Repository
•	Movie Repository
Service interfaces: 
•	Cart Service 
•	Movie Service
•	Customer Service

Frontend and Backend connecting through the ‘Axios API Requests’. Those API requests catch in the controller class according to the request. After that using these interfaces, Backend creates the response.
