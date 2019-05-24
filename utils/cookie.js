export const getCookie = (value) => {
  const { cookie } = document;
  const arr = cookie.split(';');
  const name = `${value}=`;
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].trim();
    if (newArr.indexOf(name) == 0) {
      return newArr.substring(name.length, newArr.length);
    }
  }
  return '';
};
