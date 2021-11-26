import React, { useState } from 'react';
import Modal from 'react-modal';
import Linckedin from './Photos/linckedin.png';
import Github from './Photos/github.png';

import Marion from './Photos/Marion.jpg';
import Jeremy from './Photos/Jeremy.jpg';
import Bertrand from './Photos/Bertrand.jpg';
import Benoit from './Photos/Benoit.jpg';
import Claire from './Photos/Claire.jpg';

import './Footer.css';

Modal.setAppElement('#root');

function Footer() {
  const currentYear = new Date().getFullYear();
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);

  const [aboutUsModalIsOpen, setAboutUsModalIsOpen] = useState(false);
  return (
    <footer className="footerContact">
      <div className="footerContent">
        <div className="listItemsFooter">
          <section className="contact">
            <button
              className="btnContact"
              type="button"
              onClick={() => setContactModalIsOpen(true)}
            >
              Contact
            </button>
            <Modal
              isOpen={contactModalIsOpen}
              onRequestClose={() => setContactModalIsOpen(false)}
              className="windowOpenContact"
            >
              <section className="modalHeader">
                <h2 className="titleContact">Contact</h2>
                <button
                  className="closeModalContact"
                  type="button"
                  onClick={() => setContactModalIsOpen(false)}
                >
                  X
                </button>
              </section>
              <form className="form">
                <label className="firstName" htmlFor="firstName">
                  <h3>Firstname</h3>
                  <input className="textInputModal" type="text" />
                </label>
                <label className="lastName" htmlFor="lastName">
                  <h3>Lastname</h3>
                  <input className="textInputModal" type="text" />
                </label>
                <label className="email" htmlFor="email">
                  <h3>Email</h3>
                  <input className="textInputModal" type="text" />
                </label>
                <div className="message">
                  <h3>Your message</h3>
                  <textarea placeholder="Description" />
                </div>
                <input className="submitContact" type="submit" value="Submit" />
              </form>
            </Modal>
          </section>
          <section className="aboutUs">
            <button
              className="btnAboutUs"
              type="button"
              onClick={() => setAboutUsModalIsOpen(true)}
            >
              About Us
            </button>
            <Modal
              isOpen={aboutUsModalIsOpen}
              onRequestClose={() => setAboutUsModalIsOpen(false)}
              className="windowOpenAboutUs"
            >
              <section className="modalHeaderAboutUs">
                <h2 className="titleAboutUs">About Us</h2>
                <button
                  className="closeModalAboutUs"
                  type="button"
                  onClick={() => setAboutUsModalIsOpen(false)}
                >
                  X
                </button>
              </section>
              <div className="aboutUsModal">
                <div className="headerDescription">
                  <p className="textAboutUs">
                    Christmas time is coming, we decide to go on an idea of
                    advent calendar, with main theme the music.
                    <br />
                    <br />
                    You find in this calendar, a song christmas, different by
                    day until Christmas day.
                    <br />
                    <br />
                    We hope you enjoy. Personally, We have had a lot of fun to
                    make this website.
                  </p>
                </div>
                <section className="descriptionAboutUs">
                  <div className="profilAboutUs">
                    <img src={Bertrand} className="logoAboutUs" alt="logo" />
                    <p className="nameAboutUs">Bertrand Briset</p>
                    <a
                      href="https://github.com/BBriset"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} className="socialAboutUs " alt="logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bertrand-briset/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linckedin}
                        className="socialAboutUs "
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="profilAboutUs">
                    <img src={Claire} className="logoAboutUs" alt="logo" />
                    <p className="nameAboutUs">Claire Delaleau</p>
                    <a
                      href="https://github.com/clairedelaleau"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} className="socialAboutUs " alt="logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/claire-delaleau/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linckedin}
                        className="socialAboutUs "
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="profilAboutUs">
                    <img src={Jeremy} className="logoAboutUs" alt="logo" />
                    <p className="nameAboutUs">Jérémy Vandomme</p>
                    <a
                      href="https://github.com/Vjerem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} className="socialAboutUs " alt="logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jérémy-vandomme/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linckedin}
                        className="socialAboutUs "
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="profilAboutUs">
                    <img src={Marion} className="logoAboutUs" alt="logo" />
                    <p className="nameAboutUs">Marion Grolleau </p>
                    <a
                      href="https://github.com/Mariion-62"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} className="socialAboutUs " alt="logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mariongrolleau/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linckedin}
                        className="socialAboutUs "
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="profilAboutUs">
                    <img src={Benoit} className="logoAboutUs" alt="logo" />
                    <p className="nameAboutUs">Benoit Zenone</p>
                    <a
                      href="https://github.com/BenZen59"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} className="socialAboutUs " alt="logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={Linckedin}
                        className="socialAboutUs "
                        alt="logo"
                      />
                    </a>
                  </div>
                </section>
              </div>
            </Modal>
          </section>
        </div>
      </div>
      <h3 className="copyright">
        Copyright <span className="copyrightYear"> {currentYear} </span>
      </h3>
    </footer>
  );
}
export default Footer;
