import React from "react";
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import { User } from "./client";
import Search from "./components/Search";
import UsersSearch from "./components/UsersSearch";
import UserDetails from "./components/UserDetails";

export default function App() {
    const history = useHistory();
    const startSearch = (query: string) => history.push('/search/' + query);
    const onUserClick = (user: User) => history.push('/user/' + user.login);
    return (
        <div>
            <Search onSearch={startSearch}/>

            <Switch>
                <Route path="/search/:query">
                    { ({ match }) => <UsersSearch query={match!.params.query} onCardClick={onUserClick} /> }
                </Route>
                <Route path="/user/:username">
                    { ({ match }) => <UserDetails username={match!.params.username} /> }
                </Route>
            </Switch>
        </div>
    );
}



