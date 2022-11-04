export const login = (credentials) => {
    // use fetch api to send request
    const loginUrl = `/login?username=${credentials.username}&password=${credentials.password}`;

    return fetch(loginUrl, {
        method: 'POST',
        header: {
            "Content-type": "application/json",
        },
        credentials: "include",
    }).then((response) => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
            throw Error("Failed to login");
        }
    })
}

export const signup = (data) => {
    const signupUrl = "/signup";
  
    return fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to sign up");
      }
    });
  };

export const getMenus = (restId) => {
  return fetch(`/restaurant/${restId}/menu`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get menus");
    }

    return response.json();
  });
};

export const getRestaurants = () => {
    return fetch("/restaurants").then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to get restaurants");
      }
  
      return response.json();
    });
  };
  
export const getCart = () => {
return fetch("/cart").then((response) => {
    if (response.status < 200 || response.status >= 300) {
    throw Error("Fail to get shopping cart data");
    }

    return response.json();
});
};
  
export const checkout = () => {
return fetch("/checkout").then((response) => {
    if (response.status < 200 || response.status >= 300) {
    throw Error("Fail to checkout");
    }
});
};

export const addItemToCart = (itemId) => {
    return fetch(`/order/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error("Fail to add menu item to shopping cart");
      }
    });
  };