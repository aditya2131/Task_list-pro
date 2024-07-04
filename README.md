# Todo List Application

This is a simple Todo List application built using Node.js, Express.js, EJS, HTML, and CSS. The application allows users to add, edit, and delete tasks. Additionally, there's an About page with information about the developer and a contact email.

## Features

- Add new tasks to the list
- Edit existing tasks
- Delete tasks from the list
- Separate lists for general tasks and work-related tasks
- About page with developer information and contact details

## Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- HTML
- CSS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/aditya2131/Todo-list-application.git
    cd Todo-list-application
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Run the application:**

    ```sh
    node app.js
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## File Structure

- `app.js` - The main application file where the server is set up.
- `date.js` - A module to get the current date.
- `views/` - Contains the EJS templates.
  - `list.ejs` - The main view for displaying tasks.
  - `edit.ejs` - The view for editing tasks.
  - `header.ejs` - The header partial.
  - `footer.ejs` - The footer partial.
  - `about.ejs` - The about page view.
- `public/` - Contains the static files (CSS).
  - `css/` - The directory for CSS files.
    - `styles.css` - The main stylesheet.

## Contact

For any inquiries or feedback, please contact me at: adityamishra.me@gmail.com

## Acknowledgements

- This project was developed as a part of learning full-stack web development.

## License

This project is licensed under the MIT License.
