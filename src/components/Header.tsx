import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import styledComponents from 'styled-components';

const StyledLi = styledComponents.li`
margin: 1rem 1rem;
color: black;
  a{
    text-decoration: none;
  color: black;
  font-weight: bold;
  background-color: white;
  padding: .5em;
}
a:hover{
  color: white;
  background-color: black;

  }

`;
const StyledLiRed = styledComponents(StyledLi)`
background-color: red !important;
`;

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h1 className='text-center'>Wilders Book</h1>
      </div>

      <ul className={classes.flex}>
        <StyledLi>
          <Link to='/'>Home</Link>
        </StyledLi>
        <StyledLi>
          <Link to='/wilders'>Wilders List</Link>
        </StyledLi>
        <StyledLi>
          <Link to='/wilderform'>Add Wilders</Link>
        </StyledLi>
      </ul>
    </header>
  );
};

export default Header;
