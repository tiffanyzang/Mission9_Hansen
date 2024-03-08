import React from 'react';
import './App.css';
import TeamsData from './CollegeBasketballTeams.json';

interface Format {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const AllTeams = TeamsData.teams;

//welcoming section
function Welcome() {
  return (
    <div>
      <h1>March Madness Teams</h1>
      <h2>
        This website introduces all the teams participating in March Madness
      </h2>
    </div>
  );
}

//creates each of the team cards with info
class TeamCard extends React.Component<Format> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="TeamCard">
        <h3>{oneTeam.school}</h3>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

// creates the list of teams
function TeamsList() {
  return (
    <div>
      {AllTeams.map((teamNum) => (
        <TeamCard {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamsList />
    </div>
  );
}

export default App;
