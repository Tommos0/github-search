import { Client, User } from "../client";
import React from "react";
import UserCardDetails from "./UserCardDetails";

interface UserProps {
    username: string;
}

//todo: error handling
function UserDetails({ username }: UserProps) {
    const [ user, setUser ] = React.useState<User>();
    const [ isLoading, setIsLoading ] = React.useState<boolean>(false);
    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            setUser(await Client.user(username));
            setIsLoading(false);
        })();
    }, [ username ]);

    if (isLoading || !user) {
        return <div>loading...</div>
    }
    return <UserCardDetails user={user} />;
}

export default UserDetails;
