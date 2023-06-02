import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import { getStoryThunk } from "../redux/action/storyAction";
import { useDispatch, useSelector } from "react-redux";

const JokesHome = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.story);
  useEffect(() => {
    dispatch(getStoryThunk());
  }, [dispatch]);
  if (Object.keys(data).length === 0) {
    return <></>;
  }
  return (
    <div>
      <Navbar />
      <Content data={data} />
      <Footer />
    </div>
  );
};

export default JokesHome;
