import React from 'react';
import Recipebox from './Recipebox';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders div contents', () => {
    render(<Recipebox />);
    const refreshButton = screen.getByText('refresh');
    expect(refreshButton).toBeInTheDocument();
    const labels = screen.getByText('Monday');
    expect(labels).toBeInTheDocument();
  });

  test('add items', () => {
    render(<Recipebox />);
    const addButton = screen.getByText('Add Ingredients');
    const textInput = screen.getByTestId('Enter_Ingredient');
    fireEvent.change(textInput, { target: { value: 'orange' } });
    fireEvent.click(addButton);
  
   
    expect(addButton).toBeInTheDocument();
   
  });