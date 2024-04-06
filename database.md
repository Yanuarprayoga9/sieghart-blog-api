# User

## Schema
- `username`: String (Required, Unique) - The username of the user.
- `email`: String (Required, Unique) - The email address of the user.
- `password`: String (Required) - The hashed password of the user.
- `profilePicture`: String - The URL of the user's profile picture. If not provided, a default image will be used.
- `isAdmin`: Boolean - Indicates whether the user is an admin. Default is false.

## Default Options
- `profilePicture`: Default profile picture URL will be used if not provided.
- `isAdmin`: false

## Time Options
- `createdAt`: Timestamp - Creation time of the user.
- `updatedAt`: Timestamp - Last update time of the user.

## Example Document
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "hashed_password",
  "profilePicture": "https://example.com/profile.jpg",
  "isAdmin": false,
  "createdAt": "2024-04-06T12:00:00.000Z",
  "updatedAt": "2024-04-06T12:30:00.000Z"
}
```

# Post

## Schema
- `userId`: String (Required) - The ID of the user who created the post.
- `content`: String (Required) - The content of the post (will inject hthoml).
- `title`: String (Required, Unique) - The title of the post.
- `image`: String - The URL of the image associated with the post. If not provided, a default image will be used.
- `category`: String - The category of the post. If not provided, the post will be categorized as "uncategorized".
- `slug`: String (Required, Unique) - The slug used for the post URL.

## Default Options
- `image`: Default image URL will be used if not provided.
- `category`: "uncategorized" if not provided.

## Time Options
- `createdAt`: Timestamp - Creation time of the post.
- `updatedAt`: Timestamp - Last update time of the post.

## Example Document
```json
{
  "userId": "user123",
  "content": "This is the content of the post.",
  "title": "Post Title",
  "image": "https://example.com/image.jpg",
  "category": "Technology",
  "slug": "post-title",
  "createdAt": "2024-04-06T12:00:00.000Z",
  "updatedAt": "2024-04-06T12:30:00.000Z"
}


# Comment

## Schema
- `content`: String (Required) - The content of the comment.
- `postId`: String (Required) - The ID of the post being commented on.
- `userId`: String (Required) - The ID of the user who posted the comment.
- `likes`: Array - An array containing IDs of users who liked the comment. Default is an empty array.
- `numberOfLikes`: Number - The total number of likes for the comment. Default is 0.

## Default Options
- `likes`: If not provided, defaults to an empty array.
- `numberOfLikes`: If not provided, defaults to 0.

## Time Options
- Documents will store creation (`createdAt`) and update (`updatedAt`) time information using MongoDB's timestamps feature.

## Example Document
```json
{
  "content": "This is a comment.",
  "postId": "post123",
  "userId": "user456",
  "likes": ["user789"],
  "numberOfLikes": 1,
  "createdAt": "2024-04-06T12:00:00.000Z",
  "updatedAt": "2024-04-06T12:30:00.000Z"
}