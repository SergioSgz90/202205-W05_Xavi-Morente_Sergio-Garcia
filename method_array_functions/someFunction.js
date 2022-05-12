export const someFunction = (arr, element) => {
    if (!arr) return false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
    return false;
  };