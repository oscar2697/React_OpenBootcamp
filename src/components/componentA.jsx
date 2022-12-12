import React from "react";
import PropTypes from "prop-types";
import { contact } from "../models/contact.class";
import componentB from "./componentB";

function componentA({ contact }){
    return(
        <div>
            <h2>Name: {contact.name}</h2>
            <h3>Lastname: {contact.lastname}</h3>
            <h3>Email: {contact.email}</h3>
            <componentB state = {true}></componentB>
        </div>
    );
}

componentA.protoType = {
    contact: PropTypes.instanceOf(contact),
};

export default componentA;