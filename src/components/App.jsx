
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense,  } from "react";

import { Home } from "pages/Home";
import { SharedLayout } from "./SharedLayout";



const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const AdditionalInf = lazy(() => import('./AdditionalInf'));
const Cast = lazy(() => import('./Cast'));



export const App = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    {/* <Route index element={<AdditionalInf />} /> */}
                    <Route path='cast' element={<Cast/>}/>
                </Route>
            
                </Route>
            </Routes>
        </Suspense>
)
};

