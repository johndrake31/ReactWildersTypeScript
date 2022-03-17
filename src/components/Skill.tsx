import React from 'react';
import PropTypes from 'prop-types';
import classes from './Skill.module.css';
import { ISkills } from '../interface/Types';

interface ISkillLi {
  onClick: Function;
  skillId: string;
  title: string;
  votes: number;
}

const Skill = (props:ISkillLi) => {
  const { title, votes, onClick, skillId} = props
  // const {title, votes}=props

  
  const { skills, skillsLi, sVotes, id } = classes;

  const handleOnClick = () => {
    onClick({ title: title, id: id, votes: votes });
    
  };
  return (
    <li onClick={handleOnClick} className={skillsLi}>
      <span className={skills}>{title}</span>
      {votes > 0 && <span className={sVotes}>{votes}</span>}
    </li>
  );
};
export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};
