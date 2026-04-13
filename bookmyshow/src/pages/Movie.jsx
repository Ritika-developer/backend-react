// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// import { Link, useLocation } from "react-router-dom";

// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button
// } from "@mui/material";

// function Movies({ city }) {

//   const [movies, setMovies] = useState([]);

//   // 🔥 SEARCH PARAM
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get("search") || "";

//   useEffect(() => {
//     API.get("/movies")
//       .then(res => setMovies(res.data))
//       .catch(err => console.log(err));
      
//   }, []);

//   // 🔥 FILTER (SEARCH + CITY future ready)
// const filteredMovies = movies.filter((movie) => {
//   const matchesSearch = movie.title
//     ?.toLowerCase()
//     .includes(searchQuery.toLowerCase());

//   const matchesCity =
//     !city || city === "ALL" ||
//     movie.city?.toLowerCase() === city.toLowerCase();

//   return matchesSearch && matchesCity;
// });

//   return (

//     <Box sx={{ background:"#0f0f0f", minHeight:"100vh", paddingTop:"30px" }}>

//       <Container>

//         {/* 🔥 HEADER */}
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight:"700",
//             marginBottom:"10px",
//             background:"linear-gradient(90deg,#ff1744,#ff9100)",
//             WebkitBackgroundClip:"text",
//             color:"transparent"
//           }}
//         >
//          Movies in {(!city || city === "ALL") ? "All Cities" : city}
//         </Typography>

//         {/* 🔍 SEARCH RESULT TEXT */}
//         {searchQuery && (
//           <Typography sx={{ color:"#aaa", mb:3 }}>
//             Showing results for: <b>{searchQuery}</b>
//           </Typography>
//         )}

//         {/* ❌ NO RESULT */}
//         {filteredMovies.length === 0 && (
//           <Typography sx={{ color:"gray", mt:3 }}>
//             😢 No movies found
//           </Typography>
//         )}

//         <Grid container spacing={3}>

//           {filteredMovies.map(movie => (

//             <Grid item xs={12} sm={6} md={3} key={movie.id}>

//               <Card
//                 sx={{
//                   background:"#1c1c1c",
//                   color:"white",
//                   borderRadius:"12px",
//                   overflow:"hidden",
//                   transition:"0.3s",
//                   "&:hover":{
//                     transform:"scale(1.05)",
//                     boxShadow:"0 10px 25px rgba(0,0,0,0.7)"
//                   }
//                 }}
//               >

//                 <CardMedia
//                   component="img"
//                   height="360"
//                   image={movie.posterUrl}
//                   alt={movie.title}
//                 />

//                 <CardContent>

//                   <Typography variant="h6">
//                     {movie.title}
//                   </Typography>

//                   <Typography sx={{ color:"#aaa", fontSize:"14px" }}>
//                     {movie.genre} • {movie.language}
//                   </Typography>

//                   <Typography sx={{ marginTop:"5px" }}>
//                     ⭐ {movie.rating}
//                   </Typography>

//                   <Button
//                     component={Link}
//                     to={`/shows/${movie.id}`}
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       marginTop:"10px",
//                       background:"#ff1744",
//                       "&:hover":{background:"#e6003c"}
//                     }}
//                   >
//                     Book Now
//                   </Button>

//                 </CardContent>

//               </Card>

//             </Grid>

//           ))}

//         </Grid>

//       </Container>

//     </Box>

//   );
// }

// export default Movies;























import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link, useLocation } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";

function Movies() {   // ❌ city prop hata diya

  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // 🔥 GET FROM URL (IMPORTANT FIX)
  const searchQuery = queryParams.get("search") || "";
  const city = queryParams.get("city") || "ALL";

  useEffect(() => {
    API.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔥 FILTER FIXED
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCity =
      city === "ALL" ||
      movie.city?.toLowerCase() === city.toLowerCase();

    return matchesSearch && matchesCity;
  });

  return (

    <Box sx={{ background:"#0f0f0f", minHeight:"100vh", paddingTop:"30px" }}>

      <Container>

        {/* HEADER */}
        <Typography
          variant="h4"
          sx={{
            fontWeight:"700",
            marginBottom:"10px",
            background:"linear-gradient(90deg,#ff1744,#ff9100)",
            WebkitBackgroundClip:"text",
            color:"transparent"
          }}
        >
          Movies in {city === "ALL" ? "All Cities" : city}
        </Typography>

        {/* SEARCH TEXT */}
        {searchQuery && (
          <Typography sx={{ color:"#aaa", mb:3 }}>
            Showing results for: <b>{searchQuery}</b>
          </Typography>
        )}

        {/* NO RESULT */}
        {filteredMovies.length === 0 && (
          <Typography sx={{ color:"gray", mt:3 }}>
            😢 No movies found
          </Typography>
        )}

        <Grid container spacing={3}>

          {filteredMovies.map(movie => (

            <Grid item xs={12} sm={6} md={3} key={movie.id}>

              <Card
                sx={{
                  background:"#1c1c1c",
                  color:"white",
                  borderRadius:"12px",
                  overflow:"hidden",
                  transition:"0.3s",
                  "&:hover":{
                    transform:"scale(1.05)"
                  }
                }}
              >

                <CardMedia
                  component="img"
                  height="360"
                  image={movie.posterUrl}
                  alt={movie.title}
                />

                <CardContent>

                  <Typography variant="h6">
                    {movie.title}
                  </Typography>

                  <Typography sx={{ color:"#aaa", fontSize:"14px" }}>
                    {movie.genre} • {movie.language}
                  </Typography>

                  <Typography sx={{ marginTop:"5px" }}>
                    ⭐ {movie.rating}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/shows/${movie.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop:"10px",
                      background:"#ff1744"
                    }}
                  >
                    Book Now
                  </Button>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </Box>
  );
}

export default Movies;