"use client";

import { httpAxios } from "@/helper/httpAxios";
import { createContext, useState, useEffect} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userprofile, setUserprofile] = useState(null);

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

    useEffect(() => {
      httpAxios.get('/api/users/profile')
        .then(response => {
          setUserprofile(response.data);
        })
        .catch(error => {
          setUserprofile(null);
        });
    }, []);


  return (
    <AuthContext.Provider value={{user, setUser, userprofile}}>
      {children}
    </AuthContext.Provider>
  );
};
