import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>A map of the bike Fixit stations across Toronto</h2>
        <p>What's a bike fixit station? It's those all-in-one bike repair stands. <a href="https://danskii.github.io/Toronto-Bike-Fixit-Map/Toronto-Bike-Fixit-Map.jpg" target="_blank">Here's an example</a>.</p>
        <p>Know a location that's missing, damaged or in need to maintenance? Email me and I'll add it or report it pronto!</p>
      </div>
    );
  }
}
 
export default Home;