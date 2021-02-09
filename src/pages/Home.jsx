import React, {useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const Home = () => {
    const sortItems = [
        {name: 'популярности', type: 'popular', order: 'desc'},
        {name: 'цене', type: 'price', order: 'desc'},
        {name: 'алфавиту', type: 'name', order: 'asc'}]
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);
    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };
    const onSelectSortType = (type) => {

        dispatch(setSortBy(type));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]}/>
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock onClickAddPizza={} isLoading={true} key={obj.id} {...obj}/>)
                    : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
                }
            </div>
        </div>
    );
};

export default Home;
