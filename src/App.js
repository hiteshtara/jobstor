import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout, CreatePosition, Homepage } from "./components";

function App() {
  const [savedPositions, setSavedPositions] = React.useState(
    JSON.parse(localStorage.getItem("positions"))
  );

  React.useEffect(() => {
    localStorage.setItem("positions", JSON.stringify(savedPositions));
  }, [savedPositions]);

  const handleApply = (p, e) => {
    e.stopPropagation();
    if (p.status === "Closed") return;

    const updatedPositions = savedPositions.map(position =>
      p.id === position.id
        ? { ...position, applications: position.applications + 1 }
        : position
    );
    setSavedPositions(updatedPositions);
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/create-position" exact>
            <CreatePosition
              setSavedPositions={setSavedPositions}
              positions={savedPositions}
            />
          </Route>
          <Route path="/create-candidate">Create candidate</Route>
          <Route path="/" exact>
            <Homepage handleApply={handleApply} savedPositions={savedPositions} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
