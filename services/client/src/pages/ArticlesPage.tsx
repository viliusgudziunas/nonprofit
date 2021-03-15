import { List, ListItem } from '@material-ui/core';
import React from 'react';

export const ArticlesPage: React.FC = () => {
  return (
    <>
      <div className='page-content'>
        <List>
          <ListItem>Psichika ir Jos Reikšmė I</ListItem>
          <ListItem>Kitos temos</ListItem>
          <ListItem>Kitos temos</ListItem>
          <ListItem>Kitos temos</ListItem>
        </List>
      </div>
    </>
  );
};
