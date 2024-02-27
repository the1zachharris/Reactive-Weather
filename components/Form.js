import React, {useState} from "react";

function Form({ location, setLocation, data }) {

  const [typedLocation, setTypedLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLocation);
    setTypedLocation('');
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input onChange={(e) => setTypedLocation(e.target.value)} value={typedLocation} type="text" />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = Form;
