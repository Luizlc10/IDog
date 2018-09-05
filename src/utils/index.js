const getUrlVars = () => {
  let vars = {};
  let url = window.location.href;
  let parts = url.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => {
      vars[key] = value;
    },
  );
  return vars;
}

export const GetUrlVars = getUrlVars;
