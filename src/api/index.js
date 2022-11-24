import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

export const ENDPOINTS = {
  EMPLOYEES: "employees",
  AUTH: "auth",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";

  return {
    fetchAll: () =>
      axios({
        method: "get",
        url: url,
      }),

    fetchById: (id) =>
      axios({
        method: "get",
        url: url + id,
      }),

    create: (newRecord) =>
      axios({
        method: "post",
        url: url,
        data: newRecord,
      }).catch((error) => {
        console.log(error);
      }),

    update: (id, updatedRecord) =>
      axios({
        method: "put",
        url: url + id,
        data: updatedRecord,
      }),

    delete: (id) =>
      axios({
        method: "delete",
        url: url + id,
      }),

    login: (username, password) =>
      axios({
        method: "post",
        url: url,
        data: {
          username: username,
          password: password,
        },
      }),
  };
};
