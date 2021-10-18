import React from 'react';
import DogDetails from './DogDetails';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TEST_DOGS } from './_testCommon';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // don't want to mock all library
    useParams: () => ({ name: "whiskey" }),
}))

// basic tests
it('renders without crashing', function () {

    render(
        <MemoryRouter>
            <DogDetails dogs={TEST_DOGS} />
        </MemoryRouter>
    );
});

it('matches snapshot', function () {
    const container = render(
        <MemoryRouter>
            <DogDetails dogs={TEST_DOGS} />
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

it('check if dog detail loaded properly', function () {
    const { container } = render(
        <MemoryRouter>
            <DogDetails dogs={TEST_DOGS} />
        </MemoryRouter>
    );
    const facts = container.querySelectorAll("ul li");
    expect(facts).toHaveLength(3);
});