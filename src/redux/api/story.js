import { internshipTransport } from "../../config/http/transport";

const story = {
  getStory: () => {
    const url = "/story";
    return internshipTransport.get(url);
  },
  addLike: (data) => {
    const url = `/story/${data.id}`;
    return internshipTransport.put(url, data);
  },
  disLike: (data) => {
    const url = `/story/${data.id}`;
    return internshipTransport.put(url, data);
  },
};

export default story;
