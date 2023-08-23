import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const liveApiUrl = import.meta.env.VITE_REACT_APP_LIVE_API_URL;

// function to get data from api using axios
export const getApiData = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(liveApiUrl + "/" + url )
      .then((response) => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(reject);
  });
};

// function to post data to api using axios
export const postApiData = async (url, data) => {
    axios
      .post(liveApiUrl + "/" + url, data)
      .then((response) => {
        console.log(response);
        window.location.replace(response.data.data);
      })
      .catch(error => {
        console.log(error)
      });
  // return new Promise((resolve, reject) => {
  //   console.log(liveApiUrl + "/" + url)
  //   axios
  //     .post(liveApiUrl + "/" + url, data)
  //     .then((response) => {
  //       resolve(response.data);
  //     })
  //     .catch(reject);
  // });
};

// function to update data using axios
export const putApiData = (url, taskId, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(apiUrl + "/" + taskId + ".json", { data })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to delete data using axios
export const deleteApiData = (url, taskId) => {
  axios({
    url: url + taskId + ".json",
    method: "DELETE",
  });
};
