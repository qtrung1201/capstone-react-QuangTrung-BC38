export const convertISOString = {
  "dd / mm / yyyy": (date) => {
    const array = date.split("/");
    return `${array[2]}-${array[1]}-${array[0]}`;
  },
};
