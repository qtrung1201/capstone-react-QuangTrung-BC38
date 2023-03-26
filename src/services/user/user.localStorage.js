const userInfo = "userInfo";

export const userLocalStorage = {
  userInfo: {
    set: (loginData) => {
      const dataJSON = JSON.stringify(loginData);
      localStorage.setItem(userInfo, dataJSON);
    },
    get: () => {
      const dataJSON = localStorage.getItem(userInfo);
      return !dataJSON ? null : JSON.parse(dataJSON);
    },
    remove: () => {
      localStorage.removeItem(userInfo);
    },
  },
};
