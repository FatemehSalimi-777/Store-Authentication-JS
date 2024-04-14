const setCookie = (data) => {
  document.cookie = `token =${data}; max-age=${24 * 60 * 60}; path="/"`;
};

const getCookie = () => {
  const cookie = document.cookie;
  if (cookie) {
    const cookieList = cookie.split("=");
    return {
      [cookieList[0]]: cookieList[1],
    };
  } else {
    return false;
  }
};

export { setCookie, getCookie };
