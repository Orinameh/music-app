import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../layout/Spinner';

describe('Spinner', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Spinner/>)
	})

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(1)
	})

	it('should render a span', () => {
		expect(wrapper.find('img').length).toEqual(1)
	})
})
