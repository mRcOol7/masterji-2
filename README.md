# Project Title: React App - Random User Profile, Random Jokes Tweet, and Cats Listing

## Description
This React project features three main components:

1. **Random User Profile**: Displays random user profiles with the option to refresh for new data.
2. **Random Jokes Tweet**: Shows tweet-like cards with random jokes and analytics.
3. **Cats Listing**: Provides a paginated list of cat information with horizontal scrolling cards.

The project demonstrates modern web development practices with interactive UI elements and smooth animations.

## Screenshots
### Random User Profile
![Random User Profile](./screenshots/random-user-profile.png)

### Random Jokes Tweet
![Random Jokes Tweet](./screenshots/random-jokes-tweet.png)

### Cats Listing
![Cats Listing](./screenshots/cats-listing.png)

## Features
- **Random User Profile**: 
  - Matches styling according to the Figma design.
  - Refresh button to fetch a new random user profile.
  - Creative loading state for the profile card.
  - API response fields mapped to match Figma design.
  - Hyperlinks for location and call actions open in a new tab.

- **Random Jokes Tweet**:
  - Static author details (e.g., Elon Musk).
  - Randomly generated timestamp, views, date, and other analytics.
  - Creative loading state for the tweet card.
  - New joke data replaces the tweet card content on page reload.

- **Cats Listing**:
  - Paginated list of horizontal scrolling cards with cat information.
  - Creative loading state for the cat cards.
  - Pagination and limit set to ensure all cats are listed from the first to the last records in the database.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd your-repository
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

### 1. Random User Profile
- **Navigate**: Go to the `/random-user` route.
- **Refresh Data**: Click the "Refresh" button to fetch a new random user profile.
- **View Details**: Check the user profile details mapped from the API.

### 2. Random Jokes Tweet
- **Navigate**: Go to the `/random-jokes` route.
- **Reload Page**: Refresh the page to get a new random joke and update the tweet card content.
- **View Analytics**: See the tweet author details, timestamp, views, and other analytics.

### 3. Cats Listing
- **Navigate**: Go to the `/cats-listing` route.
- **Scroll Horizontally**: Use horizontal scrolling to view more cat cards.
- **Pagination**: Utilize pagination controls to navigate through pages of cat information.

## Live Demo

You can view the live demo of the project at [your-hosted-website.com](http://your-hosted-website.com).

## Submission Instructions

1. Ensure all tasks are completed as specified.
2. Push the code to your public GitHub repository.
3. Include this `README.md` file with detailed descriptions, screenshots, and links.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/yourusername/your-repository/issues).
