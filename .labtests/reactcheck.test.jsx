
import * as React from '/home/damner/code/node_modules/react'
import { render, screen } from '/home/damner/code/node_modules/@testing-library/react';
import '/home/damner/code/node_modules/@testing-library/jest-dom/extend-expect'; // Optional, for extending Jest expectations
import Home from '/home/damner/code/src/Components/Home'

// Describe the test suite
describe('<Donations /> Component', () => {
  // Test case: It should render the <Donations /> component
  test('renders <Donations /> component inside <Home />', () => {
    // Render the Home component
    render(<Home />);

    // Assert that the <Donations /> component is present
    expect(screen.getByTestId('donations-container')).toBeInTheDocument();
  });
});
