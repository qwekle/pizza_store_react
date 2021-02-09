import React, {useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

const Categories = ({activeCategory, items, onClickCategory}) => {
    const onSelectItem = (index) => {
        onClickCategory(index);
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                items.map((name, index) => <li className={activeCategory === index ? 'active' : ''}
                                              onClick={() => onClickCategory(index)} key={`${name}_${index}`}>{name}</li>)

                }
            </ul>
        </div>
    );
};
Categories.propTypes = {
    //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
}
Categories.defaultProps = {
    activeCategory: null,
    items: [],
};
export default Categories;
