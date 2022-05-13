import Chart from "./components/Chart";
import Developer from "./components/Developer";
import StatsCard from "./components/StatsCard";
import Team from "./components/Team";
import Client from "./components/Client";

import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Chart />
      <Developer />
      <StatsCard />
      <Team />
      <Client />
      <Project/>
    </div>
  );
}

export default App;

