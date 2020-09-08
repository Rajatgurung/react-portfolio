import React, { useState } from "react";

const Contact = ({ data }) => {
  const [url, setUrl] = useState(
    "mailto:test@example.com?subject=subject&body=body"
  );
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  };

  return (
    <section id="contact">
      <div className="row section-head"></div>

      <div className="row">
        <div className="six columns form-wraper">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <p className="lead">{data?.message}</p>
              </div>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="15"
                  rows="4"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <p className="info">
                  ! This form Wont Work Only for Display Purpose Try Using
                  Details on left side to Contact me{" "}
                </p>
                <button
                  disabled
                  type="submit"
                  onClick={handleClick}
                  className="submit"
                >
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="six columns footer-widgets contact-details-wraper">
          <div className=" header-col">
            <h1>
              <span>- Get In Touch.</span>
            </h1>
            <p>Fill up the form and I will get back to you within 24 hour</p>
          </div>
          <div className="widget widget_contact">
            <p className="contact-info">
              <span className="icon">
                <i className=" fa fa-map-marker"></i>
              </span>
              <span className="detail">
                {data?.name}
                {data?.address.street}
                {data?.address.city}, {data?.address.state} {data?.address.zip}
              </span>
            </p>
            <p className="contact-info">
              <span className="icon">
                <i className=" fa fa-phone"></i>
              </span>

              <span>{data?.phone}</span>
            </p>
            <p className="contact-info">
              <span className="icon">
                <i className=" fa fa-envelope"></i>
              </span>

              <span>{data?.email}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
