
## Project-Book Management System

Welcome to the Book Management System. 

## Objective: Develope a RESTful API using Node.js for managing books

### Features

Add a new book with a title, author, and summary.
View a list of all books.
View details of a specific book by its ID.
Update a book's details.
Delete a book.
Data storage in MongoDB.

## API Endpoints

### POST /addBooks
Create: Users can add a new book to the system by providing the book's title, author, and a brief summary about the book.


### GET /getBooks
Read: Users can view a list of all books in the system that aren't deleted.

### GET /books/:bookId
Read: Users can access detailed information for a specific book by its unique ID that aren't deleted.

### PUT /updateBook/:bookId
Update: Users can update the details of an existing book, including its title, author, and summary.

### DELETE /deleteBook/:bookId
Delete: Users can delete a book from the system, removing it entirely from the collection.
In schema I take a field isDeleted which is by default false ,it helps in delete api for deleting the book.


## Installation
Clone the repository,
Install dependencies by npm install,
PORT=3000
Start the application
