
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import SignUp from '../SignUp';

import { render, cleanup } from '@testing-library/react'
// import 'jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders Login without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div)
})

it("renders signup without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<SignUp></SignUp>, div)
})


// it("matches snapshot", ()=>{
//     const tree = renderer.create(<Login></Login>).toJSON();
//     expect(tree).toMatchSnapShot();
// })