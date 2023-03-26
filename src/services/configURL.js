import axios from "axios";
import { store } from "..";
import { setLoading } from "../redux/actions/layoutAction/setLoading";
import { userLocalStorage } from "./user/user.localStorage";

const callingWithoutLoading = [
  "/api/QuanLyRap/LayThongTinHeThongRap",
  "/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=",
];

export const groupID = "GP07";

export const tokenCybersoft ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y"

export const https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    "Content-Type": "application/json",
    TokenCybersoft: tokenCybersoft,
    // Authorization: "Bearer " + accessToken(),
  },
  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data
      const user = userLocalStorage.userInfo.get();
      const getAccessToken = () => (user ? user.accessToken : "");
      const accessToken = getAccessToken();

      headers["Authorization"] = `Bearer ${accessToken}`;

      return JSON.stringify(data);
    },
  ],
});

https.interceptors.request.use(
  function (config) {
    const noNeedLoading = callingWithoutLoading.findIndex((url) =>
      config.url.includes(url)
    );
    // Do something before request is sent

    noNeedLoading === -1 && store.dispatch(setLoading(true));
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoading(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);
