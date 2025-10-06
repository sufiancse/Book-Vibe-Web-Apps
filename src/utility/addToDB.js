const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");
  if (storeBookSTR) {
    const storedBookData = JSON.parse(storeBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("Item already added");
  } else {
    storedBookData.push(id);
    // console.log(storedBookData);
    const data = JSON.stringify(storedBookData)
    localStorage.setItem("readList", data)
  }
};

export { addToStoredDB };
