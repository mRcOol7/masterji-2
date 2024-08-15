# Project Title: React App - Random User Profile, Random Jokes Tweet, and Cats Listing

## Description
This React project features three main components:

1. **Random User Profile**: Displays random user profiles with the option to refresh for new data.
2. **Random Jokes Tweet**: Shows tweet-like cards with random jokes and analytics.
3. **Cats Listing**: Provides a paginated list of cat information with horizontal scrolling cards.

The project demonstrates modern web development practices with interactive UI elements and smooth animations.

## Screenshots
### Random User Profile
![Random User Profile]![random-user-profile](https://github.com/user-attachments/assets/d9c56000-7f3e-485b-8062-c659d01a8578)

### Random Jokes Tweet
![Random Jokes Tweet]![random-jokes-tweet](https://github.com/user-attachments/assets/65e6b542-a97e-4196-8d62-ff6735498173)


### Cats Listing
![Cats Listing]![cats-listing](https://github.com/user-attachments/assets/8ad619da-8cfa-4ff5-af0e-fb2439f68730)


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

You can view the live demo of the project at [your-hosted-website.com]([http://your-hosted-website.com](https://masterji-reactapp.vercel.app/)).

