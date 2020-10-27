import React from 'react';

const SearchCountry = (props) => {
    const handleSrch = (evt) => {
      evt.target.name = evt.target.value;
      props.searchCountry(evt.target.value);
    };
  

  return (
      <div>
          <h2>Find your country!</h2>
          <input
              type="text"
              name="srch_country"
              className="form-control"
              placeholder="Enter name of country to search"
              value={props.srch}
              onChange={handleSrch}
          />
      </div>
  )
}

/*const searchCountry = (props) => {
  const handleSrch = (evt) => {
    evt.target.name = evt.target.value;
    props.searchCountry(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="srch_country"
        className="form-control"
        placeholder="Enter name of country to search"
        value={props.srch}
        onChange={handleSrch}
      />
    </div>
  );
};
*/



export default SearchCountry;