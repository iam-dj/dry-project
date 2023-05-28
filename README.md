![GitHub license](https://img.shields.io/badge/license-MIT-black.svg)

# Pokémon Game Backend

## Description

The Pokémon Game Backend is the server-side component of the Pokémon game we have developed. This project was motivated by our love for Pokémon and the desire to create a custom-designed battle system and have more control over the Pokémon and their moves. By building the database and backend from scratch, we were able to implement our unique features and functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run the Pokémon Game Backend locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the command `npm install` to install the required dependencies.
4. Set up your MySQL database and update the database credentials in the `.env` file.
5. Run the command `npm start` to start the server.

## Usage

To use the Pokémon Game Backend, you can make API requests to interact with the game's functionalities. The backend provides endpoints for actions such as fetching Pokémon data, battling trainers, and managing user profiles. You can integrate this backend with the frontend of the Pokémon game, which can be built using React.

Here's an example of making an API request to retrieve Pokémon data:

```javascript
fetch('/api/pokemon/1')
  .then((response) => response.json())
  .then((pokemon) => {
    // Handle the retrieved Pokémon data
    console.log(pokemon);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

For more details on the available endpoints and their usage, refer to the API documentation.

## Credits

Co-collaborator & co-creator: [Ryan Wood](https://github.com/ryanwood2334)

We would like to give a special shout out to ChatGPT for helping us seed the Pokémon database.

## License

This project is licensed under the [MIT License](LICENSE).

```
MIT License
Copyright (c) 2023 DJ (AKA - iam-dj or Dexter Jules)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```