import React from 'react';
import ContactSvgTop from '../molecules/ContactSvgTop';
import ContactContent from '../molecules/ContactContent';
import ContactSvgBottom from '../molecules/ContactSvgBottom';

const Contact = () => (
  <React.Fragment>
    <ContactSvgTop />
    <ContactContent />
    <ContactSvgBottom />
  </React.Fragment>
);

export default Contact;
