import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json';
import Login from '../login.component'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        loginUserAction: jest.fn()
    };

    const enzymeWrapper = shallow(<Login props={props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('<Login />', () => {
    it('should render the component', () => {
        const { enzymeWrapper } = setup();
        const component = enzymeWrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
})