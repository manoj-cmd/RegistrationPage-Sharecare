## Project Description
Sharecare Registration Page Replication
This project is a replication of the registration page from Sharecare (https://try.sharecare.com/register). The form simulates submitting data to a /register endpoint. The focus is on creating a responsive layout, form validation, and closely matching the original UI using CSS. Unit tests are also included to ensure the functionality of the components.


### Setup
Copy code
git clone https://github.com/manoj-cmd/RegistrationPage-Sharecare.git
cd RegistrationPage-Sharecare
Install the dependencies:

2. **Install dependencies:**
Copy code
npm install
# or
yarn install
Running the Project
To start the development server:


3. **Start the React application:**
Copy code
npm start
# or
yarn start

### Usage
The application should now be running on http://localhost:3000.

1. **Run tests:**
Running Tests
To run the unit tests:

bash
Copy code
npm test
# or
yarn test
Project Structure
plaintext
Copy code

### File Structure

RegistrationPage-Sharecare/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── RegistrationForm.js
│   │   ├── RegistrationForm.test.js
│   │   └── RegistrationForm.css
│   ├── App.js
│   ├── App.test.js    
│   ├── index.js
│   │   
│   └── ...
├── package.json
├── README.md
└── ...

## Additional Notes

Focus on building a well-structured, responsive, and user-friendly registration form.
Pay close attention to replicating the UI elements and styling of the original Sharecare registration page using CSS.
Using Next.js is optional but can help with routing and server-side rendering if needed.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
