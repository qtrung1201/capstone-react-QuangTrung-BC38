import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTheme";
import { useEffect, useMemo } from "react";
import { getMovieList } from "./redux/actions/movieAction/getMovieList";
import { useDispatch } from "react-redux";
import { getTheaterList } from "./redux/actions/theaterAction/getTheaterList";
import LoadingScreen from "./Components/UtilComponents/LoadingScreen/LoadingScreen";
import { routeInfoArray } from "./routes/routeInfoArray";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  const theme = defaultTheme;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getTheaterList());
  }, [dispatch]);

  const routeArray = useMemo(
    () =>
      routeInfoArray.map((item) => {
        return (
          <Route
            key={item.path}
            path={item.path}
            element={<item.Layout Component={<item.Component />} />}
          />
        );
      }),
    []
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {routeArray}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

      <LoadingScreen />
    </>
  );
}

export default App;
