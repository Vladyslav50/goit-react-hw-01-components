import CSS from './FriendList.module.css';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className={CSS.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
