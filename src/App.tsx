import { useRef } from "react";
import { Grid } from "./conponent/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Nav } from "./conponent/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef}></Nav>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}></Grid>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
