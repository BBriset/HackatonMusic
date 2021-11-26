import React, { useState } from 'react';
import Modal from 'react-modal';
import Linckedin from './Photos/linckedin.png';
import Github from './Photos/github.png';
import Rocket from './Photos/rocketlogo.png';

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
                    Les fêtes de de noel approchant nous avons décidé de partir,
                    sur lidée dun calendrier de lavant, avec comme thême
                    principale la musique
                    <br />
                    <br />
                    Vous trovuerez donc dans ce calendrier une chanson en lien
                    avec noël , une différente de pour chaque jours jusquau 25
                    décembre.
                    <br />
                    <br />
                    Nous espérons que cela vous plaira, en tout cas cela nous à
                    bien amusé de réalisé ce site :).
                  </p>
                </div>
                <section className="descriptionAboutUs">
                  <div className="profilAboutUs">
                    <img src={Rocket} className="logoAboutUs" alt="logo" />
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
                    <img src={Rocket} className="logoAboutUs" alt="logo" />
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
                    <img src={Rocket} className="logoAboutUs" alt="logo" />
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
                    <img src={Rocket} className="logoAboutUs" alt="logo" />
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
                    <img src={Rocket} className="logoAboutUs" alt="logo" />
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
