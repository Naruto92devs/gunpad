import React, { useState} from 'react';
import '../App.css';
import '../index.css';
import herobg from '../Images/hero-bg.png';
import star1 from '../Images/star-1.png';
import star2 from '../Images/star-2.png';
import star3 from '../Images/star-3.png';
import herobg2 from '../Images/hero-bg-2.png';
import whitearrow from '../Images/white arrow.png';
import hero_img from '../Images/hero-img.png';
// import nvidia from './Images/nvidia.png';
import amd from '../Images/amd.png';
import about_bg from '../Images/about-bg.png';
import about_img from '../Images/about-img.png';
import f1 from '../Images/f-img-1.png';
import f2 from '../Images/f-img-2.png';
import f3 from '../Images/f-img-3.png';
import f4 from '../Images/f-img-4.png';
// import f5 from './Images/f-img-5.png';
import join_bg from '../Images/join-bg.png';
import join_bg2 from '../Images/join-bg-2.png';
import faq_bg from '../Images/faq-bg.png';
import join_img from '../Images/join-img.png';
import join_img2 from '../Images/join-img-2.png';
import x from '../Images//x.png';
import { Link } from 'react-router-dom';
// import github from './Images/github.png';

function Home() {

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

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

  return (
    <div className="home">
        {/* ----------hero-section------ */}
        <section className="hero-section">
          <img src={herobg} alt="" className="hero-bg" />
          <img src={star1} alt="" className="star-1" />
          <img src={star2} alt="" className="star-2" />
          <img src={herobg2} alt="" className="hero-bg-2" />
          <div className="left">
            <h1>
            GunPad <br/> Your <span>LaunchPad</span><br/> Powered by <span>SolGun</span>
            </h1>
            <p>
              Start your crypto investment journey
              with direct access to exclusive presales.
              GunPad is your trusted platform for early-stage crypto opportunities 
              that offer potential for substantial growth
            </p>
            <Link to='/presale'>
          <a  className="btn">
            Presale <img src={whitearrow} alt="" />
          </a>
          </Link>
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
          {/* <p className="f-para">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam
          </p> */}
          <Link to='/presale'>
          <a  className="btn">
            Presale <img src={whitearrow} alt="" />
          </a>
          </Link>
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
                <p><br/>
                GunPad is a private launchpad offering exclusive access to presales of promising crypto projects. We connect investors with early opportunities to invest in the next big crypto innovations
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq2} className="accordion p-1">
              How do I know the presales are safe to invest in?
              </button>
              <div className={isActive2 ? 'panel active24' : 'panel'}>
                <p><br/>
                Each project featured on GunPad undergoes a thorough vetting process by our team of experts. We assess the viability, security, and potential of each project to ensure only the highest quality opportunities are presented to our users.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq3} className="accordion p-1"> 
                  Who can join to presales ?
              </button>
              <div className={isActive3 ? 'panel active24' : 'panel'}>
                <p><br/>
                GunPad is open to all investors interested in cryptocurrency, from beginners to seasoned experts. Our platform is designed to be user-friendly and accessible to everyone.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq4} className="accordion p-1">
              How does GunPad select the crypto projects it offers?
              </button>
              <div className={isActive4 ? 'panel active24' : 'panel'}>
                <p><br/>
                Our selection process is rigorous and data-driven. We collaborate with industry experts to analyze market trends, project leadership and long-term potential. Only projects that meet our high standards for growth potential, innovation, and security are chosen for our presales.
                </p>
              </div>
            </div>
            <div className="border">
              <button onClick={toggleFaq5} className="accordion p-1">
              How do I participate in a presale and what are the steps involved?
              </button>
              <div className={isActive5 ? 'panel active24' : 'panel'}>
                <p><br/>
                To take part in a presale event on Gunpad, please follow these simple steps:<br/><br/>
                Connect Your Wallet: Visit the Gunpad presale page. Locate and click on the ‘Connect Wallet’ button. Follow the prompts to securely connect your digital wallet to the platform.<br/><br/>
                Choose Contribution Amount: Once your wallet is connected, determine how much you would like to contribute to the presale. Enter the desired amount in the specified field on the presale page.<br/><br/>
                Contribute: After entering your contribution amount, click the ‘Contribute’ button. You will need to confirm the transaction in your wallet to finalize your participation.<br/><br/>
                That’s it! After these steps, you have successfully participated in the presale on Gunpad.
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
              Build the Future at GunPad—Join Us!
              </p>
              <div className='btn-group'>
              <a href="https://t.me/GunPad" className="btn">
                Telegram <img src={whitearrow} alt="" />
              </a>
              <a href="https://twitter.com/GunPadLaunchpad" className="btn-2">
                 Twitter
              </a>
              </div>
            </div>
            <div className="right">
              <img src={join_img} alt="" className="join-img" />
              <div className="join-img-2">
                <img src={join_img2} alt="" />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;
