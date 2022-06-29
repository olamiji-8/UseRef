import React, { useEffect, useRef } from 'react';



const UseRef= () => {
  const refCell = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refCell.current.value);
  };
  useEffect(() => {
    console.log(refCell.current);
    refCell.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refCell} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRef;
