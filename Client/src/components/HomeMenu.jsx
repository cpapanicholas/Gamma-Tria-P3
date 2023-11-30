import { Link } from 'react-router-dom';

export default function HomeMenu () {
  return (
    <div className="d-flex flex-column">
        <button className="menu-option">Program Library NEEDS PAGE</button>
        <Link to={'/profile/me'} className="menu-option">My Profile</Link>
        <button className="menu-option">Workout NEEDS PAGE</button>
        <button className="menu-option">Settings NEEDS PAGE</button>
        <button className="menu-option">Leaderboard NEEDS PAGE</button>
        <button className="menu-option">Stats NEEDS PAGE</button>
        <button className="menu-option">Progress NEEDS PAGE</button>
        <button className="menu-option">Friends NEEDS PAGE</button>
    </div>
  );
};

