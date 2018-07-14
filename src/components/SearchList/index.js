import React from 'react';
import SearchListItem from './SearchListItem';
import './style.css';

const SearchList = ({searchList, trackAdded}) => {
    return (
        <ul className="search-list">
            {searchList.length > 0
                ? searchList.map((item, idx) => <SearchListItem
                    key={item.id}
                    item={item}
                    idx={idx}
                    trackAdded={trackAdded}
                />)
                : null}
        </ul>
    );
};

export default SearchList;
