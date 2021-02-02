import React from 'react';
import { RouteModel } from '../models/shared';
import { isLastIndexInArray } from '../utils/utils';
import { Tab } from './Tab';

interface HeaderProps {
  tabs: RouteModel[];
}

export const Header: React.FC<HeaderProps> = ({ tabs }): JSX.Element => {
  return (
    <>
      <div className='header'>
        <div>KITA || PERSPEKTYVA</div>

        <br />

        <nav className='navigation'>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.name}
              tab={tab}
              skipSeparator={isLastIndexInArray(tabs, index)}
            />
          ))}
        </nav>
      </div>
      <hr />
    </>
  );
};
