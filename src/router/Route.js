import { createBrowserRouter } from "react-router-dom";
import ProjectDetail from "../components/Projects/ProjectDetails/ProjectDetail";

const router = createBrowserRouter([
    {
        path:'/projects',
        element:<ProjectDetail></ProjectDetail>
    }
])