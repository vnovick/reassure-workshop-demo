import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {LoginForm} from './LoginForm';
import {useAuth} from '../providers/AuthProvider';
import {jest, describe, test} from '@jest/globals';
import {measurePerformance} from 'reassure';

// Mock the useAuth hook
jest.mock('../providers/AuthProvider');

describe('LoginForm', () => {
  test('should render the login form', async () => {
    // Mock the login function from useAuth
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({login: mockLogin});

    // Render the LoginForm
    await measurePerformance(<LoginForm />);
  });

  test('should login with corect credentials', async () => {
    // // Simulate user interactions
    const scenario = async () => {
      fireEvent.changeText(screen.getByTestId('usernameInput'), 'admin');
      fireEvent.changeText(screen.getByTestId('passwordInput'), 'admin1');
      fireEvent.press(screen.getByText('Sign In'));
    };
    await measurePerformance(<LoginForm />, {scenario});
  });

  test('should show an error message for incorrect credentials', async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({login: mockLogin});

    const scenario = async () => {
      fireEvent.changeText(screen.getByTestId('usernameInput'), 'invalid');
      fireEvent.changeText(screen.getByTestId('passwordInput'), 'incorrect');
      fireEvent.press(screen.getByText('Sign In'));
    };

    await measurePerformance(<LoginForm />, {scenario});
  });
});
