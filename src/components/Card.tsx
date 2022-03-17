import { useHistory } from 'react-router-dom';
import avatar from '../images/YmVdl3m.png';
import Skill from './Skill';
import PropTypes from 'prop-types';
import classes from './Card.module.css';
import { ISkills } from '../interface/Types';

interface ICard {
  skills: ISkills[];
  city: string;
  name: string;
  _id: string;
  img?: string;
}
const Card = (props: ICard) => {
  const { skills, city, name, _id, img } = props;

  const history = useHistory();

  const imageurl = `http://localhost:4000/api/image/${img}`;

  const clickHandler = (id: string) => {
    console.log('you voted!', id);
  };

  const editWilderHandler = (wilderId: string) => {
    history.push(`/wilders-form/${wilderId}`);
  };

  return (
    <div className={classes['wilder-card']}>
      <img
        className={classes['wilder-card-img']}
        src={img ? imageurl : avatar}
        alt='avatar'
      />

      <h3 className='card-title'>
        {name} of {city}{' '}
      </h3>

      <p className='card-text'>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <h4 className='card-title'>Wild Skills</h4>
      <ul className={classes['skills']}>
        {skills.length > 0 &&
          skills.map(({ _id, votes, title }, index) => (
            <Skill
              key={index}
              skillId={_id}
              onClick={() => clickHandler(_id)}
              votes={votes}
              title={title}
            ></Skill>
          ))}
      </ul>
      <button
        className='btn btn-warning me-1'
        onClick={() => {
          editWilderHandler(_id);
        }}
      >
        Edit
      </button>
      <button className='btn btn-danger'>Delete</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }),
  ),
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
