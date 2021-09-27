import React, { useState } from 'react';
import '@testing-library/jest-dom';
import FeedBackForm from './FeedBackForm';
import { fireEvent, render } from '@testing-library/react';

describe('Back and Submit Form Buttons', () => {
  it('renders a default state', () => {
    const { getByRole, getByLabelText, getByPlaceholderText } = render(
      <FeedBackForm />
    );
    const submit = getByRole('button', { name: /submit/i });
    const back = getByRole('button', { name: /BACK/ });
    const feedback = getByPlaceholderText(/let us know/i);
    const section = getByLabelText(/section/i);

    expect(feedback).toBeTruthy();
    expect(section).toBeTruthy();
    expect(submit).toBeTruthy();
    expect(back).toBeTruthy();
  });

  it('changes submit to loading when form is filled and submit is clicked', () => {
    const { getByRole, getByPlaceholderText } = render(<FeedBackForm />);
    const feedback = getByPlaceholderText(/let us know/i);
    const section = getByRole('textbox', { name: /section/i });
    const submit = getByRole('button', { name: /submit/i });

    fireEvent.change(section, { target: { value: 'section' } });
    fireEvent.change(feedback, { target: { value: 'feedback' } });
    fireEvent.click(submit);

    expect(submit).toHaveClass('Mui-disabled');
  });

  it('not allow submit if there is no input', () => {
    const { getByRole } = render(<FeedBackForm />);
    const submit = getByRole('button', { name: /submit/i });
    fireEvent.click(submit);
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('displays the dialog box after submit', () => {
    const { getByRole, getByLabelText, getByPlaceholderText } = render(
      <FeedBackForm />
    );
    const feedback = getByPlaceholderText(/let us know/i);
    const section = getByLabelText(/section/i);
    const submit = getByRole('button', { name: /submit/i });

    fireEvent.change(section, { target: { value: 'section' } });
    fireEvent.change(feedback, { target: { value: 'feedback' } });
    fireEvent.click(submit);

    const dialog = getByRole('dialog', { role: /dialog/ });
    expect(dialog).toBeTruthy();
  });
});
