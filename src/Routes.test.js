import Routes from './Routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TEST_DOGS } from './_testCommon';


it('renders the DogList page', function () {
    const { debug, getByText } = render(
        <MemoryRouter initialEntries={["/dogs"]}>
            <Routes dogs={TEST_DOGS} />
        </MemoryRouter>
    );

    const h2Text = getByText("Dog List");
    expect(h2Text).toBeInTheDocument();
});

it('renders the dog detail page', function () {
    const { debug, getByText } = render(
        <MemoryRouter initialEntries={["/dogs/whiskey"]}>
            <Routes dogs={TEST_DOGS} />
        </MemoryRouter>
    );

    const age = getByText("Age: 5");
    expect(age).toBeInTheDocument();
});

