import {useEffect, useState} from "react";
import Loading from "./components/Loading.jsx";
import Tours from "./components/Tours.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setTours(tours)
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left!</h2>
          <button type="button" className="btn" style={{marginTop: '2rem'}} onClick={fetchTours}>
            Get Tours
          </button>
        </div>
      </main>
    )
  }


  return <Tours tours={tours} removeTour={removeTour} />
};
export default App;
