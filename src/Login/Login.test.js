import Login from './Login'
import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

describe('Login Test Suite', () => {
  test('should render the form', () => {
    const {container} = render(<Login />)
    expect(container.querySelector('form.login')).toBeDefined()
    expect(container.querySelectorAll('#email').length).toEqual(1)

    // expect(screen.getByRole('form')).toHaveFormValues({
    //   name: '',
    //   password: '',
    // })
  })
})

describe('Email Test Suite', () => {
  it('should change the state of the Login component', () => {
    const {container, getByText} = render(<Login />)

    fireEvent.blur(screen.getByRole('textbox'), {
      target: {
        name: 'email',
        value: 'logrocket@mail.com',
      },
    })

    // expect(wrapper.state('email')).toEqual('logrocket@mail.com')
  })
})

// describe('Password Test Suite', () => {

//     it('should change the state of the Login component', () => {

//         const wrapper = mount(<Login />);
//         wrapper.find('#password').simulate('blur',
//             {
//                 target: { name: 'password', value: 'my log is rocket' }
//             });

//         expect(wrapper.state('password')).toEqual('my log is rocket');
//     })
// })
