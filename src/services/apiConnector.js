import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

// export const apiConnector = async (method, url, bodyData, headers, params) => {
//   try {
//     const response = await axiosInstance({
//       method: `${method}`,
//       url: `${url}`,
//       data: bodyData ? bodyData : null,
//       headers: headers ? headers : null,
//       params: params ? params : null,
//     });

//     return response.data; // Return only the data part of the response
//   } catch (error) {
//     console.error('API request failed:', error);
//     throw error; // Re-throw the error to propagate it to the caller
//   }
// };
