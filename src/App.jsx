import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main_layout/main_layout";
import { routs } from "./Routes/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routs.map(({ Component, path }, id) => (
            <Route
              index={path ? true : false}
              key={id}
              path={path}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
