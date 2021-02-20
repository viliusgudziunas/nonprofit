import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div>
        Jei Jums reikia skubios emocinės paramos galite skambinti visą parą
        dirbančiomis linijomis:
      </div>
      <div className='help-list'>
        <p>„Jaunimo linija“ - 8 800 28888</p>
        <p>„Vilties linija“ - 116 123</p>
        <p>„Pagalbos moterims linija“ - 8 800 66366</p>
      </div>
      <div className='socials'>
        <p>IG</p>
        <p>FB</p>
        <p>LI</p>
      </div>
    </div>
  );
};
