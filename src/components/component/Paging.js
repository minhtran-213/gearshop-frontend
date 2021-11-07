import { Pagination } from 'react-bootstrap';
import React from 'react';

const Paging = ({ currentPage, totalPage, pagination }) => {
  let active = currentPage;
  let items = [];
  for (let number = 0; number < totalPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => pagination(number)}
        key={number}
        active={number === active}>
        {number + 1}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default Paging;
