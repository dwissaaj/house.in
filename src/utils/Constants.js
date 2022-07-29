const prod = {
  url: {
    REACT_URL: "",
    STRAPI_URL: "",
  },
};
const dev = {
  url: {
    REACT_URL: "http://localhost:3000",
    STRAPI_URL: "http://localhost:1337",
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
