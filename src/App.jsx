import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

function App() {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]); // [value, setValue]
  const [filteredMonsters, setFilteredMonsers] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users#')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));

    setFilteredMonsers(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   async componentDidMount() {
//     const users = await fetch('https://jsonplaceholder.typicode.com/users#').then((response) => response.json());
//     this.setState(() => ({ monsters: users }));
//   }

//   onSearchChange = (event) => {
//     const searchFieldChanged = event.target.value.toLocaleLowerCase();
//     this.setState(() => ({ searchField: searchFieldChanged }));
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users#')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => ({ monsters: users })));
// }

// async componentDidMount() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users#');
//   const users = await response.json();
//   this.setState(() => ({ monsters: users }));
// }
