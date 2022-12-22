import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';
// import user from '@testing-library/user-event';

describe('RecipeForm', () => {
  it('should render the basic fields', () => {
    render(<Form />);
    expect(screen.getByRole('textbox', { name: /First name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Last name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /E-mail/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/repeat password/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Mobile number/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Country of residence/i })).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/additional information/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Additional information/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Terms and Conditions/i })).toBeInTheDocument();
  });
});
