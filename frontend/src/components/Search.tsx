import React from 'react';

interface Props {
    onSearch: (query: string) => any;
}
const Search = (props: Props) => {
    const searchInput = React.useRef<HTMLInputElement>(null);
    const submit = () => {
        props.onSearch(searchInput.current!.value);
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            submit();
        }
    };
    return (
        <div>
            <input onKeyPress={handleKeyPress} ref={searchInput} type="text" />
            <button onClick={submit} type="button">Search</button>
        </div>
    );
};

export default Search;