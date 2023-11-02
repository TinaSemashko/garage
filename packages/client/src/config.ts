export const APIKey = process.env.REACT_APP_MAPQUEST_API_KEY?.replace(
  /['"]+/g,
  ""
).replace(";", "");
