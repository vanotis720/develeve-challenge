import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export async function get(endpoint) {
    try {
        const response = await axios.get(BASE_URL + endpoint);

        return response.data;

        // if (response.status === 200) {
        //     console.log(` You have received: ${JSON.stringify(response.data)}`);
        //     return response.data;
        // } else {
        //     throw new Error("An error has occurred");
        // }
    } catch (error) {
        console.error(error);
        // return null;
        throw handler(error);
    }
};

export async function post(endpoint, data) {
    try {
        const response = await axios.post(BASE_URL + endpoint, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw handler(error);
        // return null;

    }
};




// export async function updateProfile(userId, data) {
//     try {
//         const options = {
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "multipart/form-data"
//             }
//         };

//         const form_data = new FormData();
//         for (let key in data)
//             form_data.append(key, data[key]);

//         let res = await axios.put(`${c.UPDATE_PROFILE}/${userId}`, form_data, options);
//         return res.data;
//     } catch (e) {
//         throw handler(e);
//     }
// }

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}