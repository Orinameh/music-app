import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../../layout/Index'
import Search from '../../tracks/Search'
import Tracks from '../../tracks/Tracks';

describe('Index', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Index />)
	})

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render a <Fragment />', () => {
		expect(wrapper.find('Fragment').length).toEqual(1)
	});

	it('should render the Search and Tracks Component', () => {
		expect(wrapper.containsAllMatchingElements([
			<Search />,
			<Tracks />
		])).toEqual(true)
	})
	
})
