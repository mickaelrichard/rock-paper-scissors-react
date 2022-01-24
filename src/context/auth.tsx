import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { IAuth } from "./interfaces";
import { GameContext } from "./game";

const UserContext = createContext<IAuth>({
  user: { data: null, loading: true, error: null },
  setUser: () => {},
});

const UserProvider = ({ children }: any) => {
  const { resetGameStorage } = useContext(GameContext);

  const [user, setUser] = useState<IAuth["user"]>({
    data: null,
    loading: true,
    error: null,
  });

  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  const fetchUser = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:8080/api/v1/user/me"
      );

      if (response.data && response.data.user) {
        setUser({
          data: {
            id: response.data.user.id,
            email: response.data.user.email,
            username: response.data.user.username,
          },
          loading: false,
          error: null,
        });
      } else if (response.data && response.data.errors.length) {
        resetGameStorage();
        setUser({
          data: null,
          loading: false,
          error: response.errors[0].msg,
        });
      }
    } catch (error: any) {
      resetGameStorage();
      setUser({
        data: null,
        loading: false,
        error: error.response.data.errors[0].msg,
      });
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  const contextValue: IAuth = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
