/* eslint-disable react/prop-types */

import Card from '../card/card.component';

import './card-list.styles.css';

function CardList({ monsters }) {
  return (
    <>
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
      {monsters.length === 0 && <h2>Monsters not Found!</h2>}
    </>
  );
}

export default CardList;
