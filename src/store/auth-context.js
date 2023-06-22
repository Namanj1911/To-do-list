import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    user: null,
    setUser: () => { },
});

export default AuthContext;