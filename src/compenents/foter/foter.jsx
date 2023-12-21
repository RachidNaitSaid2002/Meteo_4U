import './foter.scss';
import React from 'react';
import instagram from '../../Media/instagram.png';
import facebook from '../../Media/facebook.png';
import twitter from '../../Media/twitter.png';

const Foter = () => {
  return (
    <>
        <div className="foter">
            <div className="social">
                <ul>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={facebook} alt="facebook" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                </ul>
            </div>
            <div className="copy">
                <p>Copyright ©2023 All rights reserved |  made by Rachid Nait Said</p>
            </div>
        </div>
    </>
  );
};

export default Foter;