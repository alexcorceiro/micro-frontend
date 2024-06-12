import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import HostDisplay from '../host/src/HostDisplay';

describe('UserProfile', () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'Paris, France',
    bio: 'Software developer with 10 years of experience in full stack development.',
  };

  it('renders user profile correctly', () => {
    render(<HostDisplay user={user} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Location: Paris, France')).toBeInTheDocument();
    expect(screen.getByText('Bio: Software developer with 10 years of experience in full stack development.')).toBeInTheDocument();

  
  });
});
