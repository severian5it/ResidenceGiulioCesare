<div align="center">
    <h1>  Residence Giulio Cesare  </h1>
</div>

<div align="center">
    <a href="https://milestone1-pierluca.herokuapp.com/index.html"> View Website in Heroku </a>
</div>




![Home page](src/images/landing-resize.jpg)

## Table of Contents
1. [UX](#ux)
    - [Ideal Client](#The-ideal-client-for-this-business-is:)
    - [Visitors' Searches](#The-ideal-client-for-this-business-is:)
    - [Project' Purpose](#This-project-is-the-best-way-to-help-them-achieve-these-things-because:)
    - [Client Stories](#client-stories)
    - [Wireframes](#wireframes)

2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Elements on every Page](#elements-on-every-page)
        - [Home Page](#home-page)
        - [Shop Page](#ashop-page)
        - [Search Page](#search-page)
        - [Listing Detail Page](#listing-detail-page)
        - [About Page](#about-page)
        - [Frequently Asked Questions Page](#frequently-asked-questions-page)
        - [Contact Page](#contact-page)
        - [Register Page](#register-page)
        - [Login Page](#login-page)
        - [Account Page](#account-page)
        - [Log out Page](#log-out-page)
        - [Cart Page](#cart-page)
        - [Checkout](#checkout)
        - [Terms and Conditions / Privacy Policy pages](#terms-and-conditions-privacy-policy-pages)
    - [Features for Future Releases](#features-for-future-releases)

3. [Technologies Used](#technologies-used)
    - [Libraries](#libraries)
    - [Tools](#tools)


4. [Testing](#testing)
    - See separate [TESTING.md](TESTING.md) file.

5. [Deployment](#deployment)
    - [How to run this project locally](#how-to-run-this-project-locally)
    - [Heroku Deployment](#heroku-deployment)

6. [Credits](#credits)
    - [Content](#content)
    - [Images](#images)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

8. [Contact](#contact)

My project is about a fictional Residence in Rome, in proximity with the Vatican. 
User navigating to the site will be exposed to the following information:
* Residence Location
* a view of the rooms, with Link to Instagram Account
* a form to get in contact with the residence to book their accomodation
 
# UX

This is a website of a Residence/ B&B located in the hearth of Rome, providing services to the turist, such as
accomodation, for short and long stay, passage from city's airport and guided tours.

**The ideal client for this business is:**
First and foremost, potential tourists or visitors, for every period of the year, Rome is a good destination regardless
of the season, then the site is targeting in particular:

* people without means of transportation.
* high segment target, because it's located in a central and expensive neighbourhood.
* returning clients, who wants to keep contact.
* tourist that would like to enrich their experience with guided tours

**Visitors to this website are searching for:**
* location of the residence.
* contact.
* pictures of the rooms.

**This project is the best way to help them achieve these things because:**

People looking for an accomodation in their selected destination need to make an informed decision and they are usually
relying on a website with full visual and geolocalized content. 
The site is presenting them in a succint and easy to use way everything they need to know.

The goal was to make a strong first impact with the landing page, and therefore serve the most relevant informations.

* Picture landing page, for striking ﬁrst impression.
* A Carousel with photos showing the general look and feel of the Rooms.
* A Section showing the location and address
* A Section with a contact form for enquiries and bookings.
* A navigation bar and a footer

**Client stories**

As a visitor of the Residence Giulio Cesare website I expect the following:

1. To find with ease what I am looking for, I want the layout of the site to make sense so I am not confused 
or frustated using it. 

1. The information I am presented with to be laid out in a way that is easy for me to digest, so that I find what 
I need in the quickest possible way.

1. The site to be easily navigable from any device, desktop, tablet or phone. For the content to look good and be useable on all of these devices.

1. To learn more about the residence and their offering, so that I can make the best possible choice.

1. To easily locate it in the city of Rome

1. Plenty of high quality images of the Rooms that I can book.

1. To be able to get in contact to the management in a easy way.


### wireframes

Wireframe mockup, created using [Balsamiq](https://balsamiq.com/), is available [here](wireframes/Wireframe.pdf)
 

# Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
## Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

## Features for future releases
- A Section serving a series of card showing the actractions in proximity of the place.
- A Section showing entusiastic user comments.

# Technologies Used

## Libraries

other than the holy trinity of Web Development, HTML, CSS and JavaScript I took advantage of the following technologies:

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to improve Scroll Up between Section and to show a *Modal* after Contact Form 
    Submission
- [Bootstrap](https://getbootstrap.com/)
    - The project relies heavily on **Bootstrap** component and predefined styles.
- [FontAwesome](https://fontawesome.com/)
    - **FontAwesome** is the source of most of the icons
- [Popper.js](https://popper.js.org/)
    - **Popper** is used for the responsive NavBar
- [Google Fonts](https://fonts.google.com/) 
    - to style the website fonts
    
## Tools

In terms of Tools I used the following tools, to develop and design:

- [PyCharm](https://www.jetbrains.com/pycharm/)
    -  My favourite IDE, used to generate a local website and edit each file
- [Balsamiq](https://balsamiq.com/)
    - WireFrame Designer, used with CodeInstitute license, definitively to best resource to wireframe.
- [Google Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/new/)
    - Site has been tested on both popular Browser for several distinct dimensions.
    

# Testing

I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [W3C Markup Validation Service](https://validator.w3.org/) 
to check the validity of the website code.



In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

# Deployment

Site has been developed on PyCharm and pushed to GitHub via terminal commands.
code can be fetched locally with following command
```shell
git clone https://github.com/severian5it/Milestone1.git
```
## how to run this project locally
is possible to run it locally running a python server on the same location on index.html and then visiting 
*localhost:8000*
```python
python -m SimpleHTTPServer
```
## heroku deployment
Code can be deployed to heroku with following instructions:
```shell
heroku apps:create milestone1-pierluca
git push heroku master
```
first line will create the application, second line will push the current commit to heroku; no variable must be set, all
the dependency are managed by the file `index.php`, which is necessary.


# Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

## Media
- The photos used in this site were obtained from

## Acknowledgements

- I received inspiration for this project from X


