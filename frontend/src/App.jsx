import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/routes";

function App() {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
