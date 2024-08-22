Models:
• user model containing a username, email, password,
and OTP.
•  massage model containing a content, receiverId.

____________________________________________________________________
 User Registration and Authentication:-
 
1. User Registration:
- an endpoint for user registration.
- check email existence.
- Hash user passwords before storing them in the database.
- 
2. User Login:
- an endpoint for user login.
- Authenticate users and generate JWT tokens.
- 
3. Token Verification Middleware:
- Implement middleware to verify JWT tokens and protect routes

 ___________________________________________________________________
  CRUD Operations for massages:-
  
1. add message:
- an endpoint to add a new message.

2. Read messages:
- an endpoint to retrieve all messages for the authenticated user.
- Ensure only authenticated users can get their messages.
  
3. Delete message:
- an endpoint to delete a specific message.
- Ensure only authenticated users can delete their messages.

 all enpoints apply validation, error handling, send email

 ________________________________________________________________________
 postman documentation:-https://documenter.getpostman.com/view/37303980/2sAXjDfFnX
