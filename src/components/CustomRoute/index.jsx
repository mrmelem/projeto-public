import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../utils/Contexts/UserContext';

const CustomRoute = ({ component: Component, ...rest }) => {
    const { token } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={() => token
                ? <Component {...rest} />
                : <Redirect to="/login" />
            }
        />
    )
}

export default CustomRoute;