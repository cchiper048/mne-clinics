import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/routes";
import { AuthProvider } from "./services/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
