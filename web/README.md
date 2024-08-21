# ChatBot Project

A chatbot powered by the Gemini API, built with Next.js. This project uses shadcn-ui for the user interface and Firebase/Google for authentication.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Interactive chatbot powered by Gemini API
- User authentication via Firebase/Google
- Modern UI built with shadcn-ui
- Responsive and user-friendly interface

## Tech Stack

- **Frontend:** Next.js, shadcn-ui
- **Authentication:** Firebase/Google
- **API:** Gemini API

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm or yarn
- Firebase account
- Gemini API access

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RakshitRabugotra/ai-chatbot.git
   cd ai-chatbot
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Create a `.env.local` file in the root directory and add your configuration settings (see [Configuration](#configuration) for details).

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser and visit `http://localhost:3000` to see the application in action.

## Configuration

Create a `.env.local` file in the root directory of your project and add the following environment variables:

```dotenv
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_OPEN_AI_KEY=your_openai_key
```

Replace the placeholders with your actual Firebase and Gemini API credentials.

## Usage

1. Sign in with your Google account.
2. Interact with the chatbot by typing messages in the chat interface.
3. The chatbot will respond to your queries using the Gemini API.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Firebase](https://firebase.google.com/)
- [Gemini API](https://ai.google.dev/)

---

Made with ❤️ by Rakshit Rabugotra
