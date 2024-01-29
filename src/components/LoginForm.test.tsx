import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  act,
  screen,
} from '@testing-library/react-native';
import {LoginForm} from './LoginForm';
import {useAuth} from '../providers/AuthProvider';
import {jest, describe, test, expect} from '@jest/globals';

// Mock the useAuth hook
jest.mock('../providers/AuthProvider');

describe('LoginForm', () => {
  test('should render the login form', async () => {
    // Mock the login function from useAuth
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({login: mockLogin});

    // Render the LoginForm
    const {getByText, getByTestId, getByPlaceholderText} = render(
      <LoginForm />,
    );

    // Verify the initial state
    expect(getByText('Sign in to Example App')).toBeTruthy();
    expect(getByTestId('usernameInput')).toBeTruthy();
    expect(getByTestId('passwordInput')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();

    // Simulate user interactions
    fireEvent.changeText(getByTestId('usernameInput'), 'admin');
    fireEvent.changeText(getByTestId('passwordInput'), 'admin1');
    fireEvent.press(getByText('Sign In'));

    // Wait for the loading indicator to disappear
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('admin');
      expect(getByText('Sign In')).toBeTruthy();
    });
  });

  test('should show an error message for incorrect credentials', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({login: mockLogin});

    const {getByText, getByTestId} = render(<LoginForm />);

    // Simulate incorrect credentials
    fireEvent.changeText(getByTestId('usernameInput'), 'invalid');
    fireEvent.changeText(getByTestId('passwordInput'), 'incorrect');
    fireEvent.press(getByText('Sign In'));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(getByText('Incorrect username or password')).toBeTruthy();
    });

    // Ensure the login function was not called
    expect(mockLogin).not.toHaveBeenCalled();
  });
});
