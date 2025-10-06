import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);

  const data = useLoaderData();
  // console.log(data);

  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // array or collection
    // if book already exist show a alert
    // if book not exit then push in the collection or array
    addToStoredDB(id);
  };

  const {
    bookName,
    author,
    image,
    category,
    rating,
    publisher,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleBook;
  //   console.log(bookName);
  return (
    <div className="flex gap-6 my-10 w-11/12 mx-auto">
      <div className="bg-[#13131305] p-16 rounded-2xl">
        <img src={image} alt="" className="w-[320px] mx-auto" />
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-3xl">{bookName}</h1>
        <p className="font-semibold">By: {author}</p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <p>
          Review: <small>{review}</small>
        </p>
        <div className="flex gap-7 my-5">
          <span className="font-bold">Tag</span>{" "}
          {tags.map((tag, i) => (
            <p className="text-red-500" key={i}>{tag}</p>
          ))}
        </div>
        <div className="divider"></div>

        <table className="border-separate border-spacing-y-2">
          <tbody>
            <tr>
              <td className="pr-10 text-gray-500">Number of Pages</td>
              <td className="font-bold">{totalPages}</td>
            </tr>
            <tr>
              <td className="pr-10 text-gray-500">Publisher</td>
              <td className="font-bold">{publisher}</td>
            </tr>
            <tr>
              <td className="pr-10 text-gray-500">Year of Publishing</td>
              <td className="font-bold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="pr-10 text-gray-500">Rating</td>
              <td className="font-bold">{rating}</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark as Read
        </button>
        <button className="btn btn-info m-2">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
