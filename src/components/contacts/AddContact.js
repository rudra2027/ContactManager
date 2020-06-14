import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'react-uuid';
import axios from 'axios';


class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {
            name: '',
            email: '',
            phone: ''
        }
    };
    onSubmit = async(dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        //check for errors
        if (name === '') {
            this.setState({ errors: { name: 'name needed' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'email needed' } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'cont. no. needed' } });
            return;
        }
        const newContact = {

            name,
            email,
            phone
        };
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({ type: 'ADD_CONTACT', payload: res.data });

        //clear automatic
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        });
        // this.Props.history.push('/');


    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    //onEmailChange = e => this.setState({ email: e.target.value });
    //onPhoneChange = e => this.setState({ phone: e.target.value });

    render() {

        const { name, email, phone, errors } = this.state;
        return ( < Consumer >

            {
                value => {
                    const { dispatch } = value;
                    return ( <
                        div className = "card mb-3" > <
                        div className = "card-header" > Add Contact < /div>  <div className="card-body"> <
                        form onSubmit = { this.onSubmit.bind(this, dispatch) } >


                        <
                        TextInputGroup label = "Name"
                        name = "name"
                        placeholder = "Enter Name"
                        value = { name }
                        onChange = { this.onChange }
                        error = { errors.name }
                        / >

                        <
                        TextInputGroup label = "Email"
                        name = "email"
                        type = "email"
                        placeholder = "Enter mail id"
                        value = { email }
                        onChange = { this.onChange }
                        error = { errors.email }
                        /> 

                        <
                        TextInputGroup label = "phone"
                        name = "phone"
                        placeholder = "Enter mob.no."
                        value = { phone }
                        onChange = { this.onChange }
                        error = { errors.phone }
                        />




                        <
                        input type = "submit"
                        value = "Add Contact"
                        className = "btn btn-light btn-block" / >


                        <
                        /form > < /div > < /
                        div >
                    )
                }
            }



            <
            /Consumer>)




        }
    }

    export default AddContact;