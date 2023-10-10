# CuriousDog
CuriousDog is a web application that allows users to send and receive anonymous messages from other people. Whether you want to share a secret, ask a question, or simply connect with others in an anonymous way, CuriousDog provides a platform to do so.

## Technologies Used
- Node.js: A JavaScript runtime environment that allows server-side scripting.
- Express: A popular web application framework for Node.js that simplifies routing and middleware handling.
- MongoDB: A NoSQL database for storing and managing data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, making it easier to work with MongoDB.

## Features
- Anonymous Messaging: Users can send and receive messages without revealing their identity.
- User Authentication: Secure user registration and login system.
- Message History: View your message history and ongoing conversations.
- Real-time Updates: Receive messages in real-time without refreshing the page.
- Message Moderation: Ensures the platform remains respectful and safe for all users.

## Getting Started
To run CuriousDog locally or deploy it to a server, follow these steps:

1. Clone the repository to your local machine:

`bash`
Copy code
git clone https://github.com/baarayy/curiousDog.git

2. Install the required dependencies:

`bash`
cd CuriousDog.
npm install.

3. Configure the environment variables:
- Create a .env file in the root directory and add the following variables:

  - makefile
  - Copy code
  - PORT=3030
  - DATABASE=your-mongodb-uri
  - SECRET=your-secret-key
  - PASSWORD= your-mongodb-user-password
  - Replace your-mongodb-uri and your-secret-key with your MongoDB connection string and a secret key for JWT token generation.

4. Start the server:

 `bash`
Copy code
npm start
Open your web browser and access the application at http://localhost:3030.
