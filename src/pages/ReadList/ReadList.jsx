import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData);

    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBook);

    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    // console.log(myReadList);
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if(type ==="pages"){
        const sortedByPage = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(sortedByPage)
    }
    if(type ==="ratings"){
        const sortedByRatings = [...readList].sort((a,b) => a.rating-b.rating)
        setReadList(sortedByRatings)
    }
  };

  return (
    <div className="my-10">
      <div className="flex justify-center items-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1">
            sort by: {sort ? sort : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read: {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} singleBook={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
