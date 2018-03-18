import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  console.log("component footer: ", props);
  const { contact, name, social } = props.footer;

  return (
    <div className="footer-container">
      <div className="content">
        <ul className="social-bar">
          {social.map(item => (
            <li className={`social-item ${item.name}-icon`} key={item.id}>
              <a href={item.src}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="footer-contact-card">
          <h1 className="f-name">{name}</h1>
          <ul className="contact-list">
            <li>{contact.email}</li>
            <li>{contact.location}</li>
            <li>{contact.management_contact}</li>
            <li>{contact.management_name}</li>
          </ul>
        </div>
      </div>
      <div className="footerBackground" />
    </div>
  );
};

Footer.propTypes = {
  footer: PropTypes.object
};

Footer.defaultProps = {
  footer: {
    contact: {
      email: "test@email.com",
      location: "Abudabi TEST",
      management_contact: "MGMT Business TEST",
      management_name: "Person Mgmt TEST"
    },
    name: "Person Name",
    social: [
      { id: 0, src: "#", name: "FacebookTEST" },
      { id: 1, src: "#", name: "TwitterTEST" },
      { id: 2, src: "#", name: "YoutubeTEST" },
      { id: 3, src: "#", name: "VimeoTEST" }
    ]
  }
};

export default Footer;
