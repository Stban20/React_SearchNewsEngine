import React from "react";
import PropTypes from "prop-types";
import New from "./New";

const ListNews = ({ news }) => (
  <div className="row">
    {news.map((new1) => (
      <New key={new1.url} new1={new1} />
    ))}
  </div>
);

ListNews.propTypes = {
  news: PropTypes.array.isRequired,
};

export default ListNews;
