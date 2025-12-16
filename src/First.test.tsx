import First from './First';
import {render, screen} from '@testing-library/react';

describe('first testing', () => {
  it('should render correctly', () => {
    render(<First />);
    expect(true).toBeTruthy();

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  })
})