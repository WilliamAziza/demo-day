import React from 'react';
import { useParams } from 'react-router';

const ContactDetails = () => {
    const {id} = useParams()
    return (
        <div key={id}>
            <p>jsgs</p>
        </div>
    );
}

export default ContactDetails;
