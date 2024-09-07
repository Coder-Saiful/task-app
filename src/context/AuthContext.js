"use client";

import { httpAxios } from "@/helper/httpAxios";
import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import {fetchTokenData } from "@/services/userService";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // console.log(await fetchTokenData())
    // const fetchUser = useCallback(() => {
    //   httpAxios.get('/api/users/profile')
    //   .then(response => {
    //     setUser(response.data);
    //   })
    //   .catch(error => {
    //     setUser(null);
    //   });
    // }, []);
    
    // useEffect(() => {
    //   fetchUser();
    // }, [fetchUser]);

    useEffect(() => {
      httpAxios.get('/api/users/token-data')
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          setUser(null);
        });
    }, []);


  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
