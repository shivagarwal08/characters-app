import React from "react";
import './Filter.css';

const Filter = (props) => {
        const { search, handleChangeSearch, sort, handleChangeSort } = props;
        return (
            <div className="filters">
                <div className="search">
                    <p> Search by Name </p>
                    <input name="search" onChange={handleChangeSearch} value={search}/>
                </div>
                <div className="sort">
                    <select value={sort} onChange={handleChangeSort} >
                        <option value="">Sort by ID</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div> 
            </div>
        );   
} 

export default Filter;