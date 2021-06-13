import { useContext } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import UserProvider from './utils/Providers/UserProvider';
import UserContext from './utils/Contexts/UserContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Admin';
import Recovery from './pages/Login/Recovery';
import Register from './pages/Login/Register';


const CustomRoute = ({ component: Component, ...props }) => {
    const { token } = useContext(UserContext)
    return (
        < Route
            {...props}
            render={() => token
                ? <Component {...props} />
                : <Redirect to="/login" />
            }
        />
    )
}


const Router = () => {

    return (
        <BrowserRouter>
            <UserProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/recovery" exact component={Recovery} />
                    <Route path="/register" exact component={Register} />

                    <CustomRoute path="/dashboard" exact component={Dashboard} />
                </Switch>
            </UserProvider>
        </BrowserRouter>
    )
}

export default Router;