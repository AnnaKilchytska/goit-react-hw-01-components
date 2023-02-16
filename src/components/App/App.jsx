import './App.css';

import data from '../../data/data.json';
import user from '../../data/user.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friend/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendListItem } from '../Friend/FriendListItem';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.username}
        location={user.location}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
