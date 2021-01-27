# Thoughts for the day...
#### By Jonelle Noelani Yacapin, 21 Dec 2020
#### An application for creating personal notes with titles.
======================

## Technologies Used
* Ruby 2.6.1
* Rails 5.0.2
* React 17.0.1

## Description
A truncated view of each note is visible in a scrollable sidebar.  Select a note by clicking 'Read More' to display the full note with buttons to 'Edit' or 'Delete' the note.  

![result](react-evernote-display.gif)

Can edit the title or body of text and save it.  Selecting 'Cancel' or another note will discard any changes made.

![result](react-evernote-edit.gif)

New notes can be created and automatically added to sidebar.  Then, they can be edited from the default placeholder text and title.  

![result](react-evernote-create.gif)

Use search bar to search through note titles.

![result](react-evernote-filter.gif)

## Setup
* Fork and clone this repository.

The codebase is split up into a Rails API backend and a React frontend. Everything is contained in this single repository. The Rails code is located inside of the `backend` folder and the React code is located inside of the `frontend` folder.

Each of those folders has a README file with setup instructions. For conciseness, those instructions are copy pasted here:

### Backend

```sh
cd backend
bundle install
rails db:create db:migrate db:seed
rails s
```

Rails backend API will be running on `http://localhost:3000`.

### Frontend

```sh
cd frontend
npm install
PORT=4000 npm start
```

This React app will be running on `http://localhost:4000`.

#### User ID

The seed file should create one user for you, so your default `USER_ID` should be `1`. If that doesn't work, debug it with the `/api/v1/users` route as shown below.

#### Routes

| Method | Route               | Headers                                                              | Body                 |
| ------ | ------------------- |:--------------------------------------------------------------------:|:--------------------:|
| GET    | `/api/v1/users`     |                                                                      |                      |
| GET    | `/api/v1/notes`     |                                                                      |                      |
| POST   | `/api/v1/notes`     | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |
| PATCH  | `/api/v1/notes/:id` | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |

## Known Bugs
* Need to get Emoji Editor fully integrated.

## License
This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright (c) 2020 Jonelle Noelani Yacapin

## Contact Information
Jonelle Noelani Yacapin fromwinetocode@gmail.com

## Project Status
A work in progress with plans to work on issues listed under ‘Known Bugs’.