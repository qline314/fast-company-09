import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onChange, search }) => {
    const handleSearch = (event) => {
        onChange(event.target.value);
    };
    return (
        <>
            <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Search..."
                name="search"
                value={search}
                onChange={handleSearch}
            />
        </>
    );
};

SearchForm.propTypes = {
    onChange: PropTypes.func,
    search: PropTypes.string
};

export default SearchForm;
