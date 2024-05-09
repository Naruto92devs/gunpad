import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './index.css';
import herobg from './Images/hero-bg.png';
import star1 from './Images/star-1.png';
import star2 from './Images/star-2.png';
import star3 from './Images/star-3.png';
import herobg2 from './Images/hero-bg-2.png';
import whitearrow from './Images/white arrow.png';
import hero_img from './Images/hero-img.png';
// import nvidia from './Images/nvidia.png';
import amd from './Images/amd.png';
import about_bg from './Images/about-bg.png';
import about_img from './Images/about-img.png';
import f1 from './Images/f-img-1.png';
import f2 from './Images/f-img-2.png';
import f3 from './Images/f-img-3.png';
import f4 from './Images/f-img-4.png';
// import f5 from './Images/f-img-5.png';
import join_bg from './Images/join-bg.png';
import join_bg2 from './Images/join-bg-2.png';
import faq_bg from './Images/faq-bg.png';
import join_img from './Images/join-img.png';
import join_img2 from './Images/join-img-2.png';
import telegram from './Images/telegram.png';
import x from './Images/x.png';
// import github from './Images/github.png';
import cross from './Images/cross.png';

function App() {

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);

  const toggleFaq1 = () => {
    setIsActive1(!isActive1);
  };
  const toggleFaq2 = () => {
    setIsActive2(!isActive2);
  };
  const toggleFaq3 = () => {
    setIsActive3(!isActive3);
  };
  const toggleFaq4 = () => {
    setIsActive4(!isActive4);
  };
  const toggleFaq5 = () => {
    setIsActive5(!isActive5);
  };
  const toggleFaq6 = () => {
    setIsActive6(!isActive6);
  };
  const toggleFaq7 = () => {
    setIsActive7(!isActive7);
  };
  const toggleFaq8 = () => {
    setIsActive8(!isActive8);
  };

  return (
    <div className="App">
        <Navbar/>
        {/* ----------hero-section------ */}
        <section className="hero-section">
          <img src={herobg} alt="" className="hero-bg" />
          <img src={star1} alt="" className="star-1" />
          <img src={star2} alt="" className="star-2" />
          <img src={herobg2} alt="" className="hero-bg-2" />
          <div className="left">
            <h1>
            Hit Your Target with  <span>Top  </span> Crypto <span>Presales</span>
            </h1>
            <p>
              Welcome to GunPad. Start your crypto investment journey
              with direct access to exclusive presales.
              GunPad is your trusted platform for early-stage crypto opportunities 
              that offer potential for substantial growth
            </p>
            <a href="/" className="btn">
              Presale <img src={whitearrow} alt="" />
            </a>
            {/* <a href="#" className="btn" id="trans">
              Buy $VPS <img src={whitearrow} alt="" />
            </a> */}
          </div>
          <div className="right">
            <img src={hero_img} alt="" />
          </div>
          <div className="powered">
            <p>Powered By</p>
            {/* <img src={nvidia} alt="" /> */}
            <img src={amd} alt="" />
          </div>
        </section>
        {/* ------------about------------- */}
        <section className="about" id='about'>
          <img src={star3} alt="logo" className="star-3" />
          <img src={about_bg} alt="logo" className="about-bg" />
          <div className="left">
            <img src={about_img} alt="logo" className="about-img" />
          </div>
          <div className="right">
            <h2>About the Project</h2>
            <p>
              GunPad is not just a platform, it's a launchpad created by a passionate team driven by the pursuit of success in the cryptocurrency market. We're here to bring you front-row access to the most exciting and promising crypto presales
            </p>
            <br />
            <p>
              At GunPad, our mission is clear: to make top crypto presales accessible to everyone. We aim to connect our users with the most promising projects early on, providing a platform for both newcomers and experienced investors to thrive. Join us in unlocking the potential of the next big crypto opportunities
            </p>
          </div>
        </section>
        {/* ---------------features---------- */}
        <section className="feature" id='key'>
          <h2>Key Features</h2>
          <p className="f-para">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam
          </p>
          <a href="/" className="btn">
            Open App <img src={whitearrow} alt="" />
          </a>
          <div className="feature-content">
            <div className="feature-box">
              <img src={f1} alt="" />
              <h4>Exclusive Access</h4>
              <p>
               Gain entry to the most promising crypto presales. Our platform offers you a first look at innovative projects before they become available to the general public.
              </p>
            </div>
            <div className="feature-box">
              <img src={f2} alt="" />
              <h4>Secure Transactions&nbsp;</h4>
              <p>
              Safety is our priority. We employ advanced security protocols to protect your investments (KYC-SAFU)
              </p>
            </div>
            <div className="feature-box">
              <img src={f3} alt="" />
              <h4>Real-Time Support</h4>
              <p>
               Our dedicated support team is always ready to assist you. Get the help you need, when you need it, so you never miss an opportunity.
              </p>
            </div>
            <div className="feature-box">
              <img src={f4} alt="" />
              <h4>User-Friendly Platform</h4>
              <p>
              Whether you're a beginner or a seasoned investor, our platform is designed to be intuitive and easy to use. Navigate the world of crypto investing with confidence and ease.
              </p>
            </div>
            {/* <div className="feature-box">
              <img src={f5} alt="" />
              <h4>Revenue Sharing</h4>
              <p>
                Stake $VPS to earn a share of the $VPS Ecosystem's revenues and
                dedicate AI resources to charitable endeavors, including healthcare,
                research, and development projects.
              </p>
            </div> */}
          </div>
          <img src="assets/images/feature-bg.png" alt="" className="feature-bg" />
        </section>
        {/* <section className="tokenomics" id="token">
          <img src={token_bg} alt="" className="token-bg" />
          <div className="token-content">
            <div className="token-box">
              <div className="left">
                <img src={token_img} alt="" />
                <div className="cex">
                  <h5>15%</h5>
                  <p>CEX / DEX / Strategic partnerships</p>
                </div>
                <div className="liquidity">
                  <h5>85%</h5>
                  <p>Liquidity</p>
                </div>
              </div>
              <div className="right">
                <h2>Tokenomics</h2>
                <div className="ca">
                  <div>
                    <h6>Contract Address:</h6>
                    <p>0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                  </div>
                  <div>
                    <h6>Total Supply</h6>
                    <p>100 Million Tokens</p>
                  </div>
                </div>
                <h6>Buy Sell Tax</h6>
                <p>
                  Allocated for maintenance, development, marketing, and contributing
                  to the revenue-sharing pool, ensuring continuous improvement and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="roadmap" id="road">
          <img src={road_bg} alt="" className="road-bg" />
          <h2>Roadmap</h2>
          <p className="r-para">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam
          </p>
          <div className="road-content">
            <div className="road-box">
              <h3>Phase 01</h3>
              <p>Launch</p>
              <ul>
                <li>Launch website</li>
                <li>Build up community</li>
                <li>$VPS Fair Launch</li>
                <li>Onboarding KOLS / Partners</li>
              </ul>
            </div>
            <div className="road-box">
              <h3>Phase 2</h3>
              <p>foundation &amp; INFRASTRUCTURE</p>
              <ul>
                <li>Early Staking </li>
                <li>Establish $VPS core infrastructure</li>
                <li>Kickstart marketplace development</li>
                <li>
                  Lay the groundwork for decentralization through $VPS token
                  integration.
                </li>
              </ul>
            </div>
            <div className="road-box">
              <h3>Phase 03</h3>
              <p>Ecosystem Growth &amp; Sustainability</p>
              <ul>
                <li>Implement revenue sharing models.</li>
                <li>Expand AIaaS offerings.</li>
                <li>
                  Engage in charitable endeavors through dedicated AI resources.
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        <section className="faq" id="faq">
          <img src={join_bg} alt="" className="join-bg" />
          <img src={join_bg2} alt="" className="join-bg-2" />
          <img src={faq_bg} alt="" className="faq-bg" />
          <p className="s-para">FAQ</p>
          <h2>Everything you need to know</h2>
          <p className="faq-para">
            Here you can find answers to frequently asked questions about our
            framework component.
          </p>
          <div className="faq-wrap">
            <div className="border">
              <button onClick={toggleFaq1} className="accordion p-1">
                What is Gunpad??
              </button>
              <div className={isActive1 ? 'panel active24' : 'panel'}>
                <p>
                GunPad is a private launchpad offering exclusive access to presales of promising crypto projects. We connect investors with early opportunities to invest in the next big crypto innovations
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq2} className="accordion p-1">
              How do I know the presales are safe to invest in?
              </button>
              <div className={isActive2 ? 'panel active24' : 'panel'}>
                <p>
                Each project featured on GunPad undergoes a thorough vetting process by our team of experts. We assess the viability, security, and potential of each project to ensure only the highest quality opportunities are presented to our users.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq3} className="accordion p-1"> 
                  Who can join to presales ?
              </button>
              <div className={isActive3 ? 'panel active24' : 'panel'}>
                <p>
                GunPad is open to all investors interested in cryptocurrency, from beginners to seasoned experts. Our platform is designed to be user-friendly and accessible to everyone.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq4} className="accordion p-1">
              How does GunPad select the crypto projects it offers?
              </button>
              <div className={isActive4 ? 'panel active24' : 'panel'}>
                <p>
                Our selection process is rigorous and data-driven. We collaborate with industry experts to analyze market trends, project leadership and long-term potential. Only projects that meet our high standards for growth potential, innovation, and security are chosen for our presales.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq5} className="accordion p-1">
              How do I participate in a presale and what are the steps involved?
              </button>
              <div className={isActive5 ? 'panel active24' : 'panel'}>
                <p>
                To join a presale on GunPad, simply send your investment to the crypto address we provide. After sending, fill out the Google Form with your transaction details to confirm your participation. Make sure all information is correct to ensure your investment is processed smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="join-us">
          <div className="join-us-wrap">
            <div className="left">
              <h2>Join our Community</h2>
              <p>
              Build the Future at Gunpad—Join Us!
              </p>
              <a href="https://t.me/GunPad" className="btn">
                Telegram <img src={whitearrow} alt="" />
              </a>
            </div>
            <div className="right">
              <img src={join_img} alt="" className="join-img" />
              <div className="join-img-2">
                <img src={join_img2} alt="" />
              </div>
            </div>
          </div>
        </section>
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
                <a onClick={toggleFaq6}>Terms of use</a>
              </li>
              <li>
                <a onClick={toggleFaq7} >Privacy Policy</a>
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
        {/* <div className={isActive8 ? 'alert active27' : 'alert'}>
              <h2>Refund Policy</h2>
              <img onClick={toggleFaq8} src={cross} alt='logo' />
              <div className='para'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              </p>
              </div>
        </div> */}
        <div className="copyright">
          <p>Copyright © 2024 Gunpad. All Rights Reserved</p>
        </div>
    </div>
  );
}

export default App;
