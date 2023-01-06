import React from "react";

const SearchResult = (props) => {
    const img = `http://source.unsplash.com/400x300/?${props.imgsrc}`
    return (
        <>
            <div>

                <img src={img} />
            </div>
        </>
    )
}

export default SearchResult;