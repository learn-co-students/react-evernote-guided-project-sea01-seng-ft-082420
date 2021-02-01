README: React Note Taker
======================

Note Taker is a single page application for note taking, organizing, and task management with a rails backend and a react frontend. 

#### [Video walkthrough of the app](https://youtu.be/8eTHO_oZoJU)

## Build with

- React.js
- Rails API

### Frontend

```sh
# from within this directory:
npm install
PORT=4000 npm start
```

This React app will be running on `http://localhost:4000`.

### Backend

```sh
# from within this directory:
bundle install
rails db:create db:migrate db:seed
rails s
```

Your Rails backend API will be running on `http://localhost:3000`.

**Viewing and Displaying Notes**

- Displays all notes in the left sidebar.
- Displays sidebar notes that show the title and a truncated body.
- When clicking a note from the sidebar, display its contents in the right panel.

![result](react-evernote-display.gif)

**Editing Notes**

- Clicking the `Edit` button will allow the user to edit the title and body in the right panel.
- `Save` button saves the note via a `PATCH` request.
- `Cancel` button discards any changes and reverts back to displaying the note.
- Clicking a different note while in edit mode discards your changes and display the new note instead.

![result](react-evernote-edit.gif)

**Creating Notes**

- Clicking `New` creates a new note via a `POST` request with some default title and body.

![result](react-evernote-create.gif)

**Filtering Notes**

- Search filter your notes list by title.

![result](react-evernote-filter.gif)

### Contributors
Chandler Hanson
