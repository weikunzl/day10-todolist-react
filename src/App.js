import './App.css';
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {TodoList} from "./components/TodoList";
import {TodoGroup} from "./components/TodoGroup";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/todos'}>Todo List</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>footer copyright</footer>
    </>;
}

function ErrorPage() {
    return <h1>Error Page</h1>;
}

function TodoDetail() {
    const {key} = useParams()
    console.log(key)
    return <h1>This is : {key} Detail</h1>;
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [{
            path: '',
            element: <h1>Home Page</h1>,
        }, {
            path: 'todos',
            element: <TodoList/>,

        }, {
            path: 'todos/:key',
            element: <TodoDetail />,
        }, {
            path: 'about',
            element: <h1>About Us</h1>
        }]

    }
]
const router = createBrowserRouter(routes);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
