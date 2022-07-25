import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../dataOfComponents/user.json';
import data from '../dataOfComponents/data.json';
import friends from '../dataOfComponents/friends.json';
import transaction from '../dataOfComponents/transactions.json';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                followers={user.stats.followers}
                stats={user.stats}
            />

                <Statistics
                title="Upload stats"
                stats={data} />
           
        
            
            
                <FriendList
                friends={friends} />
           
           
            
                <TransactionHistory
                items={transaction} />
            
            
        </>
    )
};

