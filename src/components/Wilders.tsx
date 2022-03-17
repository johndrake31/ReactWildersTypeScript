import { useEffect, useState } from 'react';
import Card from './Card';
import classes from './Wilders.module.css';

const Wilders = () => {
  const [wilders, setWilders] = useState([
    {
      _id: '622721f5d76d0de75c85dcdb',
      name: '1st Wilder',
      city: 'San Francisco',
      skills: [
        {
          title: 'HTML',
          votes: 10,
          _id: '622721f5d76d0de75c85dcdc',
        },
        {
          title: 'React',
          votes: 5,
          _id: '622721f5d76d0de75c85dcdd',
        },
      ],
      __v: 0,
    },
    {
      _id: '6227319c82f07f5668ca7fd5',
      name: '2nd Wilder',
      city: 'Dallas',
      skills: [
        {
          title: 'HTML',
          votes: 10,
          _id: '6227319c82f07f5668ca7fd6',
        },
        {
          title: 'React',
          votes: 5,
          _id: '6227319c82f07f5668ca7fd7',
        },
      ],
      __v: 0,
    },
  ]);
  useEffect(() => {
    fetch('http://localhost:4000/api/wilders')
      .then((res) => res.json())
      .then((data) => {
        setWilders(data);
      });
  }, []);

  return (
    <div className='container'>
      <h2 className=''>Wilders List</h2>
      <div className={classes['card-row']}>
        {wilders &&
          wilders.map((wilder) => <Card key={wilder._id} {...wilder}></Card>)}
      </div>
    </div>
  );
};

export default Wilders;
