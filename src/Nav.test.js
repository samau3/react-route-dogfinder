import React from 'react';
import Nav from './Nav';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TEST_DOGS } from './_testCommon';

// basic tests
it('renders without crashing', function () {
    render(
        <MemoryRouter>
            <Nav dogs={TEST_DOGS} />
        </MemoryRouter>
    );
});

it('matches snapshot', function () {
    const container = render(
        <MemoryRouter>
            <Nav dogs={TEST_DOGS} />
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

// full render
it('mounts without crashing', function () {
    const { getByText, container, debug } = render(
        <MemoryRouter>
            <Nav dogs={TEST_DOGS} />
        </MemoryRouter>
    );

    // debug()
    const links = container.querySelectorAll("li a")
    const dogLink = getByText("Whiskey");
    expect(dogLink).toBeInTheDocument();
    expect(links).toHaveLength(3);
});
