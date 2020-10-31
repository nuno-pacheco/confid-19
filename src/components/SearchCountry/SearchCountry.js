import React from 'react';

function SearchCountry (props) {
    
  function handleChange (event) {
    let newValue = event.target.value;
    props.handleSearchCountry(newValue)
  }

  return (
      <div className=' container text-center my-5'>
          <input
              type="text"
              name="srch_country"
              className="form-control"
              placeholder={"Search a Country"}
              value={props.search}
              onChange={handleChange}
          />
      </div>
  );
}

export default SearchCountry;