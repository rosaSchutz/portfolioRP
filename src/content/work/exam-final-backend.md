---

title: Final Backend Exam
publishDate: 2023-12-06 00:00:00
img: /assets/finalBackend.png
img_alt: Final Backend Exam solution preview
description: |
    Appointment booking system 
    A system is to be implemented to manage the booking of appointments for a dental clinic.
tags:
  - HTML5
  - Tailwind
  - Javascript
  - Java
  - Spring Boot
  - H2

---


#### Links

- Live Site URL: <a href="#">We are under construction</a>

- Solution URL: <a href="https://github.com/rosaSchutz/proyectoFinalBackend">https://github.com/rosaSchutz/proyectoFinalBackend</a>

Note: I have a small problem with my code that requires the page to be reloaded every time you want to see the updated changes.

- Credentials login:
- email: rosa@digital.com
- password: 1234

<video src="/assets/appFinalBackend.mov" type="video/mov" controls>
</video>


#### My process

Built with:
- HTML5
- Tailwind CSS
- Javascript
- Java - maven
- Spring Boot
- log4j (logs)
- Junit5 (testing)
- h2 database
- Swagger Documentation API


#### Requirements
Dentist data management: List, add, modify, and delete dentists. Register last name, first name, and license number.

Patient data management: List, add, modify, and delete patients. Each one stores: name, last name, address, ID number, and date of registration.

Appointment registration: It must be possible to assign a patient an appointment with a dentist at a specific date and time.

Login: Validate system entry through a login with username and password. Any logged-in user must be allowed to register an appointment, manage dentists and patients.


#### Technical requirements

The application was developed in layers:

Business entities layer: These are the Java classes of our business modeled through the object-oriented paradigm.

Data access layer (Repository): These are the classes that will access the database.

Data layer (database): This is the database of our system modeled through an entity-relationship model. We use the H2 database for its practicality.

Business layer: These are the service classes that are responsible for decoupling data access from the view.

Presentation layer: These are the web screens that we developed using the Spring Boot MVC framework with the controllers and these two options: HTML+JavaScript for the view.

We performed exception handling in a global way called GlobalExceptionHandler and a ResourceNotFoundException.


#### API
- Documentation: <a href="#">We are under construction</a>

<video src="/assets/apiDocumentacion.mov" type="video/mov" controls>
</video>


#### Author

- Github <a href="https://github.com/rosaSchutz/proyectoFinalBackend">@rosaSchutz</a>