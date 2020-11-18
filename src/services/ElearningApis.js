
import axios from "axios";



export function getAllCountries() {
  return new Promise((resolve, reject) => {
    axios
      .get()
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}