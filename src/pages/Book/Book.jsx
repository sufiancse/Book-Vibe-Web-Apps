import React, { use } from "react";
import { FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise)
  // console.log(data);

//   console.log(singleBook);
  const {
    bookName,
    author,
    image,
    category,
    rating,
  
    review,
    tags,
    
    bookId
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-5 mx-auto">
        <figure className="bg-[#F3F3F3] p-8 rounded-2xl">
          <img src={image} alt="Shoes" className="h-[166px] w-[124px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            {tags.map((tag, i) => (
              <button className="text-red-500" key={i}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{author}</div>
          </h2>
          <p className="line-clamp-2">{review}</p>
          <div className="border-t border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge ">{category}</div>
            <div className="badge ">
              {rating} <FaStarHalfAlt></FaStarHalfAlt>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
