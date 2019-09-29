import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Test from "./Test";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="*" component={Test} />
      </Router>
    </React.Fragment>
  );
}

export default App;
