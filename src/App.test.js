// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import RegistrationForm from './components/RegistrationForm';

jest.mock('./components/RegistrationForm', () => () => (
  <div>
    <label htmlFor="fullName">Full Name</label>
    <input id="fullName" name="fullName" />
    <button>Continue with Email</button>
  </div>
));

describe('App Component', () => {
  test('renders RegistrationForm component', () => {
    render(<App />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Continue with Email/i)).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  });
});
