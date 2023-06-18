import React, {useState} from 'react';
import Tour from "./Tour.jsx";

const Tours = ({tours, removeTour}) => {
  const [data, setData] = useState([]);

  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  );
};

export default Tours;
