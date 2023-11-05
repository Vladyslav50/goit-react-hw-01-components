import './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <span className={isOnline ? 'online' : 'ofline'}></span>
      <img className="friends-avatar" src={avatar} alt="User avatar" />
      <p className="friends-name">{name}</p>
    </li>
  );
};
