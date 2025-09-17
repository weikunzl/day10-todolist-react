import './App.css';
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useLocation, useParams} from "react-router";
import {TodoList} from "./components/TodoList";
import {Layout, Menu, Typography} from 'antd';
import {HomeOutlined, InfoCircleOutlined, UnorderedListOutlined} from '@ant-design/icons';

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

function DefaultLayout() {
    const location = useLocation();

    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined/>,
            label: <NavLink to={'/'}>Home</NavLink>,
        },
        {
            key: '/todos',
            icon: <UnorderedListOutlined/>,
            label: <NavLink to={'/todos'}>Todo List</NavLink>,
        },
        {
            key: '/about',
            icon: <InfoCircleOutlined/>,
            label: <NavLink to={'/about'}>About</NavLink>,
        },
    ];

    return (
        <Layout>
            <Header>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>
                Todo App
            </Footer>
        </Layout>
    );
}

function ErrorPage() {
    return <h1>Error Page</h1>;
}

function TodoDetail() {
    const {key} = useParams()
    console.log(key)
    return (
        <div>
            <Title level={2}>Todo 详情</Title>
            <p>Todo ID: {key}</p>
        </div>
    );
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        errorElement: <ErrorPage />,
        children: [{
            path: '',
            element: <h1>Home Page</h1>,
        }, {
            path: 'todos',
            element: <TodoList/>,

        }, {
            path: 'todos/:key',
            element: <TodoDetail/>,
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
