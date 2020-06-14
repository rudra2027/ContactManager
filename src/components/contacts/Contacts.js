import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
    // constructor() {
    //super();
    //this.state = {
    //  contacts: [{
    //        id: 1,
    //      name: 'Adarsh',
    //    email: 'hattpagal@gmail.com',
    //  phone: '9589211541'
    //}, {
    //  id: 2,
    //name: 'Sakshi',
    //email: 'hattpagali@gmail.com',
    //phone: '9131394176'
    //}, {
    //  id: 3,
    //name: 'Hanu',
    //email: 'hattpagalo@gmail.com',
    //phone: '8307830911'




    //deleteContact = (id) => {
    //const {
    //contacts
    //} = this.state;
    //const newContacts = contacts.filter(contact => contact.id !== id);
    //this.setState({ contacts: newContacts });

    //};




    render() {
        return ( <
            Consumer > {
                value => {
                    const { contacts } = value;
                    return ( <
                        React.Fragment >
                        <
                        h1 className = "display-4 mb-2" >
                        <
                        span className = "text-danger" > Contact list < /span>  < /
                        h1 > {
                            contacts.map(contact => ( <
                                Contact key = { contact.id }
                                contact = { contact }
                                />
                            ))
                        } <
                        /React.Fragment>
                    );
                }
            } <
            /Consumer>
        );
    }
}


export default Contacts;