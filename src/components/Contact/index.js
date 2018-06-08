import { string } from 'prop-types';

const Contact = ({ name }) => (
  <li className="contact">{ name }</li>
);

Contact.propTypes = {
  name: string.isRequired,
};

export default Contact;
