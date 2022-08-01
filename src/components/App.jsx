
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense,  } from "react";

import { Home } from "pages/Home";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./AdditionalInform/Cast'));
const Reviews = lazy(() => import('./AdditionalInform/Reviews'));



export const App = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
                <Route  index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    {/* <Route index element={<AdditionalInf />} /> */}
                        <Route path="cast" element={<Cast/>} />
                        <Route path="reviews" element={<Reviews/>}/>
                </Route>
            
                </Route>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
        </Suspense>
)
};

