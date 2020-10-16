import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "science", label: "Science" },
    { value: "health", label: "Health" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const [category, SelectNews] = useSelect("general", OPTIONS);

  //sent the categoty to the main component
  const searchNews = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.searchEngine} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find News by Category</h2>
          <div className="input-field col s12">
            <SelectNews />
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Form;
