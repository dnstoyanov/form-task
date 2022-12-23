import renderer from 'react-test-renderer';
import {cleanup, fireEvent, queryByAttribute, queryByDisplayValue, queryByText, screen, render} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('RecipeForm', () => {
  it('should render empty form', () => {
    const component = renderer.create(<Form />);

    expect(component.toJSON()).toMatchSnapshot();
  });

});
