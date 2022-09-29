import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, name }) {
  return (
    <Stack my={5}>
      <Typography variant="h4" alignSelf="flex-start">
        {name}
      </Typography>
      <Grid container spacing={3} mt={1}>
        {movies?.slice(0,10).map(
          (movie) =>
            movie.poster_path && (
              <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            )
        )}
      </Grid>
    </Stack>
  );
}

export default MovieList;

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import "./styles.css";

// // import required modules
// import { Pagination, Navigation, FreeMode } from "swiper";

// export default function MovieList({ name, movies }) {
//   return (
//     <Stack my={5} height={500}>
//       <Typography variant="h4" alignSelf="flex-start">
//         {name}
//       </Typography>
//       {movies?.length && (
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           // loop={true}
//           // pagination={{
//           //   clickable: true,
//           // }}
//           // navigation={true}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//           className="mySwiper"
//         >
//           {movies.slice(0, 10).map(
//             (movie) =>
//               movie.poster_path && (
//                 <SwiperSlide key={movie.id}>
//                   <MovieCard movie={movie} />
//                 </SwiperSlide>
//               )
//           )}
//         </Swiper>
//       )}
//     </Stack>
//   );
// }
