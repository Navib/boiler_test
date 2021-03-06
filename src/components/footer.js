import React from "react";
import PropTypes from "prop-types";
import "../assets/footer_bg.png";

const Footer = props => {
  const { contact, name, social } = props.footer;
  const bg = {
    backgroundImage: "url(./assets/footer_bg.png)",
    backgroundSize: "180px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  const mgmtStyle = {
    borderBottom: "1px solid #444",
    display: "inline-block",
    lineHeight: "20px",
    color: "black"
  };
  return (
    <div className="footer-container">
      <div className="content">
        <ul className="social-bar">
          {social.map(item => (
            <li className={`social-item ${item.name}-icon`} key={item.id}>
              <a href={item.src} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-contact-card">
          <h1 className="f-name">{name}</h1>
          <ul className="contact-list">
            <li className="contact-list-item">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li className="contact-list-item">
              <a
                href="https://www.google.com/maps/place/New+York,+NY/@40.6971494,-74.2598687,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
                target="_blank"
              >
                {contact.location}
              </a>
            </li>
            <li className="contact-list-item">
              <small style={mgmtStyle}>Manager</small> <br />
              {contact.management_name}
            </li>
            <li className="contact-list-item">
              <a href={`tel:+01-${contact.management_contact}`}>
                {contact.management_contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBackground" style={bg} />
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
