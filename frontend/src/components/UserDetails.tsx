import { Client, User } from "../client";
import React from "react";
import UserCardDetails from "./UserCardDetails";

interface UserProps {
    username: string;
}

function User({ username }: UserProps) {
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
    return (
        <div>
            <UserCardDetails user={user} />
        </div>
    );
}

export default User