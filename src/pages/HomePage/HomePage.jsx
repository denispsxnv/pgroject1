import React from 'react';
import Styles from './homePage.module.css'

import Title from '../../components/Title/Title'
import Products from '../../components/Products/Products';
import { useState } from 'react';
import { useEffect } from 'react';
import postService from '../../Services/products'


const HomePage = () => {

    const [products, updateProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const [uniqueCategories, setUniqueCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');




    useEffect(() => {
        postService.get()
            .then(res => updateProducts(res.data));
    }, []);

    useEffect(() => {
        postService.get().then(res => {
            updateProducts(res.data);
            const categories = [...new Set(res.data.map(product => product.category))];
            setUniqueCategories(categories);
        });
    }, []);


    // const sortedProducts = [...products].sort((a, b) => {
    //     const categoryA = a.category.toLowerCase();
    //     const categoryB = b.category.toLowerCase();
    //     if (categoryA < categoryB) {
    //         return -1;
    //     }
    //     if (categoryA > categoryB) {
    //         return 1;
    //     }
    //     return 0;
    // });


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


    const handleCategoryClick = (category) => {
        setSearchQuery('');
        setSelectedCategory(category);
        setCurrentPage(1); 
    };

    

    return (
        <div className={Styles.homePage}>
            <div className={Styles.divWrapper}>
                <div className={Styles.textWrapper}>
                    <h1 className={Styles.title}>
                        420 Four Twoo
                    </h1>
                    <p className={Styles.descr}>
                        Дизайнерская одежда, вдохновлённая уличной культурой
                    </p>
                </div>
            </div>

            <Title
                text={'каталог'}
            />
            <div className={Styles.navigate}>
                {uniqueCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={selectedCategory === category ? Styles.selectedCategory : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={Styles.searchWrapper}>
                <input
                    className={Styles.search}
                    type="text"
                    placeholder="Поиск товаров"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}

                />
            </div>

                    
            <div className={Styles.productsWrapper}>

                {
                    currentProducts.map(product => {
                        console.log(product)
                        return (
                            <Products
                                key={product.id}
                                img={product.img}
                                category={product.category}
                                brand={product.brand}
                                name={product.name}
                                color={product.color}
                                sizes={product.sizes}
                            />

                        )
                    })
                }


            </div>
            <div className={Styles.pagination}>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Предыдущая страница
                </button>
                <p className={Styles.currentPageNumber}>
                    {currentPage}
                </p>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastProduct >= filteredProducts.length}
                >
                    Следующая страница
                </button>
            </div>
        </div>
    );
};

export default HomePage;