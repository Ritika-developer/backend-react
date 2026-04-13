// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// function Shows() {

//   const [shows, setShows] = useState([]);

//   useEffect(() => {

//     API.get("/shows")
//       .then(res => {
//         setShows(res.data);
//       })
//       .catch(err => console.log(err));

//   }, []);

//   return (

//     <div className="container mt-4">

//       <h2>Available Shows</h2>

//       {shows.map(show => (

//         <div key={show.id} className="card p-3 mb-3">

//           <h5>{show.movie.title}</h5>

//           <p>Theatre: {show.theatre.name}</p>

//           <p>Date: {show.showDate}</p>

//           <p>Time: {show.showTime}</p>

//          <a href="/seats" className="btn btn-danger">
// Select Seats
// </a>

//         </div>

//       ))}

//     </div>

//   );

// }

// export default Shows;






import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, Link } from "react-router-dom";

function Shows() {

  const { movieId } = useParams();
  const [shows, setShows] = useState([]);

  useEffect(() => {

    API.get("/shows")
      .then(res => {

        // filter shows for selected movie
        const filtered = res.data.filter(
          show => show.movie.id == movieId
        );

        setShows(filtered);

      })
      .catch(err => console.log(err));

  }, [movieId]);

  return (

    <div className="container mt-4">

      <h2>Available Shows</h2>

      {shows.map(show => (

        <div key={show.id} className="card p-3 mb-3">

          <h5>{show.movie.title}</h5>

          <p>Theatre: {show.theatre.name}</p>

          <p>Date: {show.showDate}</p>

          <p>Time: {show.showTime}</p>

         <Link to={`/seats/${show.id}`} className="btn btn-danger">
Select Seats
</Link>

        </div>

      ))}

    </div>

  );

}

export default Shows;