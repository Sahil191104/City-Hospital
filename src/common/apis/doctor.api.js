import { getRequest } from "../request"

export const getDoctorData = () => {
    let data = getRequest('Movie');

    console.log(data);
}