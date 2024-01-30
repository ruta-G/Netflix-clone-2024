import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>
      <div className='Footer_outer_container'>
        <div className='Footer_inner_container'>
          <div className='Footer_container'>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
            

          <div className='Footer_data'>
            <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

      
          <div className='Service_Code'>
            <p>
              Service Code
            </p>
          </div>
          </div>

          <div className='Copy_Write'>
            &copy;1997-2021 Netflix, Inc.
            </div>
        </div>
      </div>
    </div>
  );
}
