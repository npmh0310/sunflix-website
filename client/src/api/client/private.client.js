import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:5000/api/v1";

const privateClient = axios.create({
  baseURL,
//   Sử dụng queryString.stringify để serialize các tham số query.
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});


// Thêm các headers vào yêu cầu trước khi gửi, bao gồm Content-Type là application/json và Authorization với token từ localStorage.
privateClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

privateClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default privateClient;
