# Express.js + React.js Personal Blog 
Express + React app for personal blog app. <a href="https://roadmap.sh/projects/personal-blog">Link to the project</a><br />
It allows user (admin) to create, edit and delete post and anyone can read those. To enter a admin panel you have to pass JWT authentication.

## Installation and configuration
Requirements to run application:
- Docker
- Docker compose

1. Clone the project
```
git clone https://github.com/LisZLisowni2/Personal-Blog.git
```
2. Enter the directory
```
cd Personal-Blog
```
3. Run the application
```
[sudo] docker compose up -d
```

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
