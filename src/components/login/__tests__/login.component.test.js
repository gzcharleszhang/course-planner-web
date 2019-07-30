import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../login.component'
import LoginContainer from '../login.container'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        loginUserAction: jest.fn()
    };

    const enzymeWrapper = shallow(<LoginContainer/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('#email-field')).toBe(true);
            expect(enzymeWrapper.find('#password-field')).toBe(true);
            
            const loginProps = enzymeWrapper.find('Formik').props();
            expect(loginProps.newTodo).toBe(true);
        })

        // it('should call addTodo if length of text is greater than 0', () => {
        //     const { enzymeWrapper, props } = setup()
        //     const input = enzymeWrapper.find('TodoTextInput')
        //     input.props().onSave('')
        //     expect(props.addTodo.mock.calls.length).toBe(0)
        //     input.props().onSave('Use Redux')
        //     expect(props.addTodo.mock.calls.length).toBe(1)
        // })
    })
})