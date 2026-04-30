import axios from "axios";

export const submitToIndexNow = async (url) => {
  await axios.post("https://api.indexnow.org/indexnow", {
    host: "shanis.in",
    key: "843dbf97ef0843879e81e176cf029a36",
    keyLocation:
      "https://shanis.in/843dbf97ef0843879e81e176cf029a36.txt",
    urlList: [url],
  });
};