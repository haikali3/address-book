# Address Book Application

A simple React application that allows users to manage a list of contacts, including adding, editing, and deleting them.

## Features

- Add a new contact with validation (name, email, and phone)
- Edit an existing contact
- Delete a contact from the list
- Built with TypeScript, React, and react-hook-form for form handling

## File Structure

```
src/
├── components/
│   ├── address-book.tsx    # Main component managing state
│   ├── contact-form.tsx    # Form component for adding/editing contacts
│   ├── contact-list.tsx    # Table to display the list of contacts
│   ├── form-field.tsx      # Reusable form field component
├── models/
│   ├── contact-model.ts    # Defines the Contact type and validation schema
├── App.tsx               # Root component
├── index.css            # Global styles
├── index.tsx           # Entry point for the React app
```

## Installation

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/haikali3/address-book-app.git
   cd address-book-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## How to Use

1. Enter the contact's name, email, and phone number in the form
2. Click "Add Contact" to save the contact
3. View the list of contacts below the form
4. Use the "Edit" button to modify a contact's details
5. Use the "Delete" button to remove a contact from the list

## Technologies Used

- **React**: Frontend library
- **TypeScript**: Static type checking
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **TailwindCSS**: For basic styling

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Starts the development server |
| `npm build` | Builds the app for production |
| `npm test` | Runs tests (if configured) |
| `npm run lint` | Runs lint checks (if configured) |