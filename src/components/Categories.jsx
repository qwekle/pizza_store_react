import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {
    const [selectItem, setSelectItem] = useState(null);
    const onSelectItem = (index) => {
        setSelectItem(index);
    }
    return (
        <div className="categories">
            <ul>
                <li className={selectItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                items.map((name, index) => <li className={selectItem === index ? 'active' : ''}
                                              onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{name}</li>)

                }
            </ul>
        </div>
    );
};

export default Categories;
