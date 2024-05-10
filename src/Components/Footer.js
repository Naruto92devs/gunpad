import React, { useState} from 'react';
import '../App.css';
import '../index.css';
import telegram from '../Images/telegram.png';
import x from '../Images/x.png';
// import github from './Images/github.png';
import cross from '../Images/cross.png';

function Footer() {

  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  // const [isActive8, setIsActive8] = useState(false);


  const toggleFaq6 = () => {
    setIsActive6(!isActive6);
  };
  const toggleFaq7 = () => {
    setIsActive7(!isActive7);
  };
  // const toggleFaq8 = () => {
  //   setIsActive8(!isActive8);
  // };

  return (
    <div className="footer">
        <footer>
          <div className="logo">
            <a href="/">
              {/* <img src={logo} alt="" /> */}
            </a>
            <p>
            GunPad is your trusted platform for early-stage crypto opportunities that offer potential for substantial growth
            </p>
            <div className="socials">
              <a href="/">
                <img src={telegram} alt="" />
              </a>
              <a href="/">
                <img src={x} alt="" />
              </a>
              {/* <a href="">
                <img src={medium} alt="" />
              </a> */}
              {/* <a href="/">
                <img src={github} alt="" />
              </a> */}
            </div>
          </div>
          <div className="company">
            <p className="p-1">Company</p>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="https://forms.gle/dGR3br2XitD6Leda8">Apply IDO</a>
              </li>
              {/* <li>
                <a href="">Tokenomics</a>
              </li> */}
              {/* <li>
                <a href="">Roadmap</a>
              </li> */}
              <li>
                <a href="https://gunpad.gitbook.io/gunpad">Docs</a>
              </li>
            </ul>
          </div>
          <div className="Support">
            <p className="p-1">Support</p>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="policy">
            <p className="p-1">Policy</p>
            <ul>
              <li >
                <a href='#terms' onClick={toggleFaq6}>Terms of use</a>
              </li>
              <li>
                <a href='#privacy' onClick={toggleFaq7} >Privacy Policy</a>
              </li>
              {/* <li>
                <a onClick={toggleFaq8}>Refund Policy</a>
              </li> */}
            </ul>
          </div>
          <div className="contact">
            <p className="p-1">Contact</p>
            <ul>
              <li>
                <a href="mailto:Hello@gunpad.vip">Hello@gunpad.vip</a>
              </li>
            </ul>
          </div>
        </footer>
        <div className={isActive6 ? 'alert active25' : 'alert'}>
              <h2>Terms OF Use</h2>
              <img onClick={toggleFaq6} src={cross} alt='logo' />
              <div className='para'>
                <h4>1. Introduction</h4>
              <p>
              Welcome to GunPad! By accessing our platform and participating in presales, you agree to these Terms of Use. Please read them carefully.
              </p>
              <h4>2. Participation Process</h4>
              <p>
              To participate in a presale, send your investment to the designated cryptocurrency address and fill out the required Google Form with your transaction details. Ensure all provided information is accurate to facilitate your participation.
              </p>
              <h4>3. User Responsibilities</h4>
              <p>You are responsible for maintaining the security of your transaction information. GunPad is not responsible for any losses due to incorrect or unauthorized transactions. Comply with all local, state, national, and international laws regarding cryptocurrency transactions.</p>
              <h4>4. Crypto Transactions</h4>
              <p>
              Crypto transactions are irreversible. GunPad is not liable for any losses resulting from unauthorized or erroneous transactions or for crypto market fluctuations.
              </p>
              <h4>5. Intellectual Property</h4>
             <p>
             All content on GunPad, including text, graphics, logos, and software, is owned by GunPad or its licensors and protected by copyright and intellectual property laws.
             </p>
             <h4>6. Termination</h4>
             <p>GunPad reserves the right to restrict access to the platform if any fraudulent activity or abuse is suspected.</p>
             <h4>7. Disclaimers</h4>
             <p>
              GunPad provides all services on an "as is" and "as available" basis. We do not guarantee the continuous, uninterrupted, or error-free operation of our services.
             </p>
             <h4>8. Limitation of Liability</h4>
             <p>
             GunPad shall not be responsible for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use the platform.
             </p>
             <h4>9. Changes to Terms</h4>
             <p>
              We may update these Terms of Use periodically. Any changes will take effect immediately after they are posted on our website.
             </p>
             <h4>10. Contact Information</h4>
             <p>
             For any questions or concerns about these Terms of Use or our services, please use the contact methods provided on our website.
             </p>
              </div>
        </div>
        <div className={isActive7 ? 'alert active26' : 'alert'}>
              <h2>Privacy Policy</h2>
              <img onClick={toggleFaq7} src={cross} alt='logo' />
              <div className='para'>
                <h4>1. Introduction</h4>
                <p>
                Welcome to GunPad! We respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your information when you use our platform.
                </p>
                <h4>2. Information We Collect</h4>
                <p>
                  Transaction Details: We collect details of the transactions you conduct on our platform, including the amounts, timestamps, and cryptocurrency addresses involved.
                  Submitted Information: Any information you submit through the Google Form, such as contact details and transaction identifiers, is collected to verify and facilitate your participation in presales.
                </p>
                <h4>3. Use of Information</h4>
                <p> 
                  The information we collect is used to:<br/>

                  Process transactions and verify participation in presales.
                  Provide customer support and resolve issues.
                  Comply with legal obligations and protect against fraud.
                </p>
                <h4>4. Information Sharing</h4>
                <p>
                  We do not sell or rent your personal information to third parties. Your information may be shared only in the following circumstances:<br/>

                  With service providers who assist us in our operations and are bound by confidentiality agreements.
                  When required by law, such as in response to a subpoena or similar legal process.
                </p>
              <h4>5. Security Measures</h4>
              <p>
              We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These include encryption, firewalls, and secure server facilities.
              </p>
              <h4>
              6. Data Retention
              </h4>
              <p>
                We retain your information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                </p>
                <h4>7. Your Rights</h4>
                <p>
                You have the right to:<br/>

                Access the personal information we hold about you.
                Request the correction of inaccurate information.
                Request the deletion of your information, subject to certain conditions.
                Object to or restrict the processing of your information.
                8. Changes to Our Privacy Policy
                We may update this privacy policy from time to time. Any changes will be posted on our website, and where appropriate, notified to you by email.
                </p>
                <h4>8. Changes to Our Privacy Policy</h4>
                <p>
                We may update this privacy policy from time to time. Any changes will be posted on our website, and where appropriate, notified to you by email.
                </p>
                <h4>9. Contact Us</h4>
                <p>
                If you have any questions about this privacy policy or our treatment of your personal information, please contact us using the information provided on our website.
                </p>
              </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2024 Gunpad. All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
