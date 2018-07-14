import React from 'react';
import TiPlus from 'react-icons/lib/ti/plus-outline';
import './style.css';

const SearchListItem = ({item, idx, trackAdded}) => {
    return (
        <li className="search-item">
            <span>
                {idx+1}. {item.artist.name}: {item.album.title}
            </span>
            <span className="search-item-add" onClick={() => trackAdded(item.id)}>
                <TiPlus size={24}/>
            </span>
            <div className="search-warning">{item.warning ? item.warning : null}</div>
        </li>
    );
};

export default SearchListItem;
