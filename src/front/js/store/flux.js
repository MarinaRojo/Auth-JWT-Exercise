const getState = ({ getStore, getActions, setStore }) => {
  const URL =
    "https://3001-marinarojo-authjwtexerci-agulp0rfkl5.ws-eu38.gitpod.io/";
  return {
    store: {
      token: "",
    },
    actions: {
      //signup
      signup: (e, p) => {
        fetch(URL + "api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: e, password: p }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },
      //login
      login: (e, p) => {
        const store = getStore();

        fetch(URL + "api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: e, password: p }),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ token: data });
            sessionStorage.setItem("token", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      },
      //validate
      validate: () => {
        const store = getStore();
        fetch(URL + "api/private", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(store.token))
          .catch((err) => console.log(err));
      },

      //logout
      logout: () => {
        setStore({ token: "" });
        console.log("Logout completed");
      },
    },
  };
};

export default getState;
