import './App.css'
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setzombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  function handleAddFighter(zombie) {
    if (money-zombie.price >= 0) {
      const newTeam = [...team, zombie];
      setTeam(newTeam)
      setMoney(money-zombie.price)
      setTotalStrength(totalStrength + zombie.strength)
      setTotalAgility(totalAgility + zombie.agility)

    } else {
      console.log("Not enough money")
    }
  }

  function handleRemoveFighter(zombie, index) {
      const newTeam = [...team];
      newTeam.splice(index, 1);
      setTeam(newTeam)
      setMoney(money+zombie.price)
      setTotalStrength(totalStrength - zombie.strength)
      setTotalAgility(totalAgility - zombie.agility)
  }


  return (
    <>
      <h1>Team</h1>
      <h2>Current Money: {money}</h2>
      {
        team.length > 0?
        <div>
          <h2>Total Strength: {totalStrength}</h2>
          <h2>Total Agility: {totalAgility}</h2>
          <ul>
            {
              team.map((zombie, index) => (
                <li key={index}>
                  <img src={zombie.img} />
                  <h3>{zombie.name}</h3>
                  <h3>Price: {zombie.price}</h3>
                  <h3>Strength: {zombie.strength}</h3>
                  <h3>Agility: {zombie.agility}</h3>
                  <button 
                    onClick={() => handleRemoveFighter(zombie, index)}
                  >Remove</button>
                </li>
              ))
            }
          </ul>
        </div>
         : 
         <h2>No fighters in team</h2>
      }

      <ul>
        {
          zombieFighters.map((zombie, index) => (
            <li key={index}>
              <img src={zombie.img} />
              <h3>{zombie.name}</h3>
              <h3>Price: {zombie.price}</h3>
              <h3>Strength: {zombie.strength}</h3>
              <h3>Agility: {zombie.agility}</h3>
              <button 
                onClick={() => handleAddFighter(zombie)}
              >Add</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App