import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import { Paths } from './constants'
import { Root } from './pages/Root'
import Login from './pages/Login'
import { Rooms } from './pages/Rooms'
import Art from './pages/Art'

const routes = [
    { path: Paths.Login, element: <Login /> },
    { path: Paths.Rooms, element: <Rooms /> },
    { path: Paths.Art, element: <Art /> },
]

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={Paths.Root} element={<Root />}>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element}></Route>
            ))}
        </Route>
    )
)
