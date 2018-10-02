import React from 'react';

const EditExpense = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Editing the id of { props.match.params.id }</h1>
    </div>
  )
};

export default EditExpense;