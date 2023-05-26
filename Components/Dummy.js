import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background-color: violet;
            font-size: 1.5rem;
            padding: 8px 1rem;
            border-radius: 5px;
          }
        `}
      </style>
      <div className="dummy">Dummy</div>;
    </>
  );
};

export default Dummy;
