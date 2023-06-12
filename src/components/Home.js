import React from "react";



const Home = ({togglePost}) => {
  
  return (
    <div className="home-top-container">
      <h1> Homepage</h1>
      <div className="home-main-container">
        <button onClick={togglePost}>Create Post</button>
        
      </div>
    </div>
  );
};

export default Home;