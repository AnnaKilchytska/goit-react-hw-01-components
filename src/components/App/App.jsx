import './App.module.css';

import data from '../../data/data.json';
import user from '../../data/user.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friend/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
