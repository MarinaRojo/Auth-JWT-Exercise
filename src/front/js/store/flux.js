const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
    },
    actions: {
      //signup
      signup: (e, p) => {
        fetch(
          "https://3001-4geeksacademy-reactflask-rssug2gl2tb.ws-eu38.gitpod.io/api/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: e, password: p }),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },
      //login
      login: (e, p) => {
        const store = getStore();

        fetch(
          "https://3001-4geeksacademy-reactflask-rssug2gl2tb.ws-eu38.gitpod.io/api/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: e, password: p }),
          }
        )
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
        fetch(
          "https://3001-4geeksacademy-reactflask-rssug2gl2tb.ws-eu38.gitpod.io/api/private",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data))
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
