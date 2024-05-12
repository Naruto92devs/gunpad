import React from 'react';
import './Dapp.css';
import '../index.css';
import dapp_logo from '../Images/dapp-logo.png';
import web from '../Images/web.png';
import page from '../Images/page.png';
import telegram from '../Images/telegram.png';
import twitter from '../Images/x.png';
import progress_bar from '../Images/progress-bar.png';

import CountdownTimer from './CountdownTimer';
function Presale() {
  const targetDate = new Date('2024-05-13');
  return (
    <div>
      <div className="dapp">
          <div className='left'>
            <h3></h3>
            <div className='profile'>
              <img src={dapp_logo} alt='logo' />
              <a href='/presale'>Sale Live</a>
            </div>
            <h4>Upcoming Project</h4>
            <div className='btn-group'>
              <a href='/presale' className='btn-1' style={{background: '#AC00E8'}}>Safu</a>
              <a href='/presale' className='btn-1' style={{background: '#33BC99'}}>KYC</a>
            </div>
            <div className='social-group'>
              <a href='/presale'><img src={web} /></a>
              <a href='/presale'><img src={page} /></a>
              <a href='https://t.me/GunPad'><img src={telegram}/></a>
              <a href='https://twitter.com/GunPadLaunchpad'><img src={twitter}/></a>
            </div>
            <p>Are you ready to take your investments to the next level? Welcome to GunPad, our launchpad<br/> designed to offer you unparalleled access to pre-sale opportunities.</p><br />
            <p>With GunPad, investors gain early access to promising projects before they hit the market. Imagine being among the<br/> first to discover the next big thing in the crypto world and securing your position early on.</p><br />
            {/* <p>Team $ROCKY is committed to make a difference in the lives of animals by leveraging the power of cryptocurrency and community support. Let's add utility to a meme coin.</p> */}
          </div>
          <div className='right'>
            <CountdownTimer targetDate={targetDate} />
            <div className='progress-bar'>
              <img src={progress_bar} alt='logo' />
              <form>
                <input type='text' placeholder='0 SOL'/>
              </form>
            </div>
            <div className='btn-group'>
                <a href='/presale' className='btn'>Contribute &#8599;</a>
                <a href='/presale' className='btn'>Claim &#8599;</a>
              </div>
              <div className='btn-group-1'>
               <a href='/presale' className='btn-1'>Connect Wallet</a>
              </div>
          </div>
       </div>
       <div className='stats'>
        <div className='stat-box'>
          <div>
            <p>Name</p>
            <p></p>
          </div>
          <div>
            <p>Chain</p>
            <p></p>
          </div>
        </div>
        <div className='stat-box'>
          <div>
            <p>Sales Starts</p>
            <p></p>
          </div>
          <div>
            <p>Sales Ends</p>
            <p></p>
          </div>
          <div>
            <p>Hard Cap</p>
            <p></p>
          </div>
          <div>
            <p>Max Buy</p>
            <p></p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Presale;