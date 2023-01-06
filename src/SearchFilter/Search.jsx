import React, { useState } from "react";

import SearchResult from "./SearchResult";
const Search = () => {
    const [img, setImg] = useState("");
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search" value={img} onChange={(e) => setImg(e.target.value)} />
                {img === "" ? null : <SearchResult imgsrc={img} />}

            </div>
        </>
    )
}

export default Search;