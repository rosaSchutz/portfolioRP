---
title: Final Frontend Exam
publishDate: 2023-12-06 00:00:00
img: /assets/finalFront.png
img_alt: Final Front Exam solution preview
description: |
  A React web application that lists dentists and provides details about each one. The app has four pages: Home, Contact, Featured, and Dentist Details.
tags:
  - HTML5
  - CSS
  - Grid
  - Flexbox
  - React
---


#### Links

- Live Site URL: <a href="https://ctd-esp-fe3-final-seven-sable.vercel.app/">https://ctd-esp-fe3-final-seven-sable.vercel.app/</a>

- Solution URL: <a href="https://github.com/rosaSchutz/ctd-esp-fe3-final">https://github.com/rosaSchutz/ctd-esp-fe3-final</a>

<video src="/assets/appFinalFrontend.mov" type="video/mov" controls>
</video>


#### My process

Built with:
- HTML5
- CSS
- Grid
- Flexbox

React:
- useState
- useEffect
- useContext
- useReducer
- Routes (Link)
- Localstorage


#### Features

The app has four pages: Home, Contact, Dentist Details, and Featured.
Users can navigate between pages using React Router links.
The Navbar and Footer are consistent across all pages.
A "Featured" feature allows users to add dentists to a favorites list. Favorite dentists are stored in the browser's localStorage.


#### Context Creation
The app uses a global context to provide the following information:

Theme (light or dark)
Information from the API (using axios)
The app uses the useReducer hook to manage the global state. This hook is used to change the theme (with a button in the Navbar), add dentists to the favorites list, and fetch information from the API for the Home page.


#### Rutas

- Home
- Contact
- Favs
- Detail dentist


##### Home
The Home page displays a grid of dentists returned by the API.

Each card in the grid contains the dentist's name and username.

Users can add dentists to the favorites list by clicking the "ADD FAV" button.

Users can navigate to the Dentist Details page for a specific dentist by clicking the link in the card.


##### Contact
The Contact page implements a form that captures user information.

The form fields are:

Full name (with a length greater than 5 characters)
Email (with a valid email format)
If there are any errors, the following error message is displayed:

Please verify your information again.

Once the form is submitted, a success message is displayed with the following format:

Thank you, [user name]. We will contact you as soon as possible via email.


##### Dentist Details Page
The Dentist Details page displays information about a specific dentist returned by the API.

The page URL is /dentist/:id, where :id is the ID of the dentist.

The page displays the following information:

Dentist's name
Dentist's email address
Dentist's phone number
Dentist's website


##### Featured
The Featured page renders cards for dentists that have been added to the favorites list.

The page URL is /favs.

The information for the dentists is stored in the browser's localStorage.


#### API
- All dentists: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>

- For each specific dentist: <a href="https://jsonplaceholder.typicode.com/users/:id">https://jsonplaceholder.typicode.com/users/:id</a>


#### Author

- Github <a href="https://github.com/rosaSchutz/ctd-esp-fe3-final">@rosaSchutz</a>