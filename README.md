# Express.js + React.js Personal Blog 
Express + React app for personal blog app. <a href="https://roadmap.sh/projects/personal-blog">Link to the project</a><br />
It allows user (admin) to create, edit and delete post and anyone can read those. To enter a admin panel you have to pass JWT authentication.

## Installation and configuration
### a) Frontend (folder /frontend)
1. Run ```npm install```
2. You can run the app using ```npm run dev```
### b) Backend (folder /backend)
1. Run ```npm install```
2. Create a cluster on mongodb website
3. Create .env file and insert that variables:
```bash
PORT=<your_port (3000)>
DATABASE_URI=<your_uri_to_mongodb_cluster>
JWT_SECRET=<your_jwt_secret (you can generate on this website: https://jwtsecret.com/generate)>
```
4. Admin user isn't created by default. You have to create it manually. Next steps to set it: \
4.1. Run server using node app.js\
4.2. Create user using API endpoint /users/register with request body { username: "your_username", email: "your_email", password: "your_password" }\
4.3. In the mongodb site, enter the data collections of the cluster (Browse Collections)\
4.4. Change scope of your user from "user" to "admin"\
5. After running two server open your browser and navigate to https://localhost:5173

## Features
- **Add post** -> Adds a new post with title, description and content
- **Read post** -> View published posts on the home page
- **Edit post** -> Update the existing post from admin dashboard
- **Delete post** -> Delete the existing post from admin dashboard
- **Admin dashboard** -> Secured place for manage posts
- **JWT Authentication** -> JWT has used to authenticate users 

## API endpoints

- GET /posts -> Displays all of posts
- GET /posts/:id -> Displays a post by id
- POST /posts/add -> Creates the post
- PUT /posts/edit/:id -> Edits the post by id
- DELETE /posts/delete/:id -> Deletes the post by id
- POST /users/login -> Returns a token for user
- POST /users/register -> Creates the user
- GET /users/user -> Returns the user
- GET /users/logout -> Logouts the user
