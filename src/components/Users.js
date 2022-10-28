import { useEffect, useState } from "react";
import User from './User.js'
import ReactPaginate from "react-paginate";

export default function Users ({ data,loading }) {
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <section>
      <h1 className="section--title">Users</h1>
      <div className="user">
        {loading ? <h1 className="loading">Loading...</h1> : currentItems.map(
          ({ name, picture, id, location, nat, email, cell, dob }) => {
            return (
              <User 
                name= {name}
                picture={picture}
                id={id}
                location={location}
                nat={nat}
                email={email}
                cell={cell}
                dob={dob}
              />
            );
          }
        )}
      </div>

      <ReactPaginate
        disabledClassName="disable"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="paginate"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </section>
  );
}
