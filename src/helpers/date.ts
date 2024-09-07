export const convertDate = (date?: Date) => {
  if (date) {
    const MM = date.getMonth() + 1;
    const dd = date.getDate();
    const yy = date.getFullYear();

    return `${yy}-${10 <= MM ? MM : `0${MM}`}-${10 <= dd ? dd : `0${dd}`}`;
  } else {
    return "";
  }
};

export const convertDateTime = (date?: Date) => {
  if (date) {
    return `${convertDate(date)}T${convertTime(date)}:00`;
  } else {
    return "";
  }
};

export const convertTime = (date?: Date) => {
  if (date) {
    const HH = date.getHours();
    const mm = date.getMinutes();

    return `${10 <= HH ? HH : `0${HH}`}:${10 <= mm ? mm : `0${mm}`}`;
  } else {
    return "";
  }
};
