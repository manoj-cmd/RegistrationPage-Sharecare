// src/components/RegistrationForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

test('renders the registration form', () => {
  render(<RegistrationForm />);
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
});

test('form validation works', async () => {
  render(<RegistrationForm />);
  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: '' } });
  fireEvent.blur(screen.getByLabelText(/Full Name/i));
  expect(await screen.findByText(/Enter your full name or your first and last names/i)).toBeInTheDocument();
});
test('form validation works', async () => {
    render(<RegistrationForm />);
    fireEvent.change(screen.getByLabelText(/Street Addres/i), { target: { value: '' } });
    fireEvent.blur(screen.getByLabelText(/Street Addres/i));
    expect(await screen.findByText(/Street Address is required/i)).toBeInTheDocument();
  });
  test('form validation works', async () => {
    render(<RegistrationForm />);
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: '' } });
    fireEvent.blur(screen.getByLabelText(/City/i));
    expect(await screen.findByText(/City is required/i)).toBeInTheDocument();
  });
 
