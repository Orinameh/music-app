import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../layout/Navbar';

describe('Navbar', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Navbar />)
	})

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render a <nav />', () => {
		expect(wrapper.find('nav').length).toEqual(1)
	})

	it('should render a span', () => {
		expect(wrapper.find('span').length).toEqual(1)
	})
})


