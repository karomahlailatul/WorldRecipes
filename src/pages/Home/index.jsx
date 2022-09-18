import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";


import HomeCategoryRecipes from "../../component/homeCategoryRecipes";
import HomePopularRecipes from "../../component/homePopularRecipes";
import HomeNewRecipes from "../../component/homeNewRecipes";

const Home = () => {
  useEffect(() => {
    document.title = "World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="home-page">
        <div className="container col-12">
        <HomePopularRecipes />
        <HomeNewRecipes />
        <HomeCategoryRecipes />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
