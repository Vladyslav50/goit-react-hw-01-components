import CSS from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={CSS.friend_list_item}>
      <span className={isOnline ? CSS.online : CSS.ofline}></span>
      <img className={CSS.friends_avatar} src={avatar} alt="User avatar" />
      <p className={CSS.friends_name}>{name}</p>
    </li>
  );
};
