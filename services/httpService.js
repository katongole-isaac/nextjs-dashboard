/**
 * Consists of utilites for making requests.
 *
 */
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.repsonse &&
    error.repsonse.status >= 400 &&
    error.repsonse.status < 500;

  // Unexpected Error
  if (!expectedError) {
    console.log("Logging the error", error);
    // alert("Unexpected error has occurred...");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios,
  put: axios.put,
  patch: axios.patch,
};
