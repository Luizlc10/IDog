const getUrlVars = (url) => {
  let vars = {};
  let parts = url.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => {
      vars[key] = value;
    },
  );
  return vars;
}

export const GetUrlVars = getUrlVars;
