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
function Dapp() {
  const targetDate = new Date('2024-05-13');
  return (
    <div>
      <div className="dapp">
          <div className='left'>
            <h3>Solark Presale</h3>
            <div className='profile'>
              <img src={dapp_logo} alt='logo' />
              <a href='/dapp'>Sale Live</a>
            </div>
            <h4>Solark Presale</h4>
            <div className='btn-group'>
              <a href='/dapp' className='btn-1' style={{background: '#AC00E8'}}>Safu</a>
              <a href='/dapp' className='btn-1' style={{background: '#33BC99'}}>KYC</a>
            </div>
            <div className='social-group'>
              <a href='/dapp'><img src={web} /></a>
              <a href='/dapp'><img src={page} /></a>
              <a href='/dapp'><img src={telegram}/></a>
              <a href='/dapp'><img src={twitter}/></a>
            </div>
            <p>Are you ready to be in $ROCKY's world??</p><br />
            <p>INNOCENT ROCKY is a community driven meme coin inspired from the heartwarming story of a stray dog Rocky rescued from the streets.</p><br />
            <p>Team $ROCKY is committed to make a difference in the lives of animals by leveraging the power of cryptocurrency and community support. Let's add utility to a meme coin.</p>
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
                <a href='/dapp' className='btn'>Contribute &#8599;</a>
                <a href='/dapp' className='btn'>Claim &#8599;</a>
              </div>
          </div>
       </div>
       <div className='stats'>
        <div className='stat-box'>
          <div>
            <p>Status</p>
            <p>Upcoming</p>
          </div>
          <div>
            <p>Sale Type</p>
            <p>Public</p>
          </div>
        </div>
        <div className='stat-box'>
          <div>
            <p>Current Rate</p>
            <p>1 ETH = 0 ROCKY</p>
          </div>
          <div>
            <p>Current Raised</p>
            <p>1 ETH = 0 ROCKY</p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Dapp;