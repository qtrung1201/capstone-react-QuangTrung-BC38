import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import HomePageCarousel from "./HomePageCarousel";
import HomePageMovieList from "./HomePageMovieList";
import HomePageThearterTabs from "./HomePageThearterTabs";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("/"));
  }, [dispatch]);

  return (
    <>
      <HomePageCarousel />
      <HomePageMovieList />
      <HomePageThearterTabs />
    </>
  );
}
