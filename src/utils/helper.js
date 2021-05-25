import { useEffect, useState } from "react";

import moment from "moment";

export const uuid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  return s4() + s4() + "-" + s4();
};

export const MappedElement = ({ data, renderElement, count }) => {
  if (data && data.length) {
    return data.map((obj, index, array) => {
      if (count) {
        return index <= count ? renderElement(obj, index, array) : null;
      } else {
        return renderElement(obj, index, array);
      }
    });
  }
  return null;
};

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const navigateToHome = () => {
  window.location = process.env.REACT_APP_HOMEPAGE_URL;
};

export const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

export const isRejectedAction = (action) => {
  return action.type.endsWith("/rejected");
};

export const getConsistentData = (response) => {
  if (response && response.data?.items) {
    return response.data.items;
  }
  return response.data;
};

export const readableShortDate = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).format("MMMM YYYY");
};

export const readableDate = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).format("DD MMM YYYY");
};

export const dayTimeLeftFromNow = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).fromNow();
};

export const setTimeToZero = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).utcOffset(0).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString();
};

export const checkDisabledDate = (d) => {
  if (!d) {
    return false;
  }
  const days = moment().diff(d);
  if (days > 0) {
    return true;
  }
  return false;
};

export const getTitleById = (data, id) => {
  if (!id) {
    return null;
  }
  const d = data.find((d) => d.id === id);
  return d?.title;
};

export const getLat = (location) => {
  if (!location) {
    return null;
  }
  return location[0];
};

export const getLng = (location) => {
  if (!location) {
    return null;
  }
  return location[1];
};
