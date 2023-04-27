// import { internshipTransport } from "src/config/http/transport";
import {internshipTransport} from "../../config/http/transport"

const predict = {
  predictData: (data) => {
    const url = "/";
    return internshipTransport.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default predict;
