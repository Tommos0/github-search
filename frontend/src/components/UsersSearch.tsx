import { User, usersSearch } from "../client";
import React from "react";
import UserCard from "./UserCard";

interface UsersSearchProps {
    query: string;
    onCardClick: (user: User) => any;
}
function UsersSearch({ query, onCardClick }: UsersSearchProps) {
    const [ users, setUsers ] = React.useState<User[]>([]);
    const [ page, setPage ] = React.useState<number>(0);
    const [ isSearching, setIsSearching ] = React.useState<boolean>(false);
    const search = async () => {
        setIsSearching(true);
        const newUsers = await usersSearch(query, 10, page);

        // append new Users to old users
        setUsers([ ...users, ...newUsers ]);
        setIsSearching(false);
    };
    React.useEffect(() => {
        // search when page changes
        search();
    }, [ page ]);
    React.useEffect(() => {
        // reset when query changes
        setUsers([]);
        if (page === 1) {
            search();
        } else {
            // setPage will trigger search()
            setPage(1);
        }
    }, [ query ]);
    const next = () => {
        setPage(page+1);
    };
    return (
        <div>
            { users.map(user => <UserCard key={user.id} onClick={() => onCardClick(user)} user={user} /> )}
            { isSearching && <div>Searching..</div>}
            <button disabled={isSearching} onClick={next}>more</button>
        </div>
    );
}

export default UsersSearch