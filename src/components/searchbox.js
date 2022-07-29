import React from "react";

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className="pa2">
            <input 
            className="bg-lightest-blue pa2 ma2" 
            type='search' 
            placeholder="search robot"
            onChange = {searchchange} />
        </div>
    );
}

export default SearchBox;