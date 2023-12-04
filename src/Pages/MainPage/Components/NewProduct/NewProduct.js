import style from "./NewProduct.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function NewProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const maxProducts = 4;
  const [productCounts, setProductCounts] = useState({});
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const categoryImage = [
    require("../../../../Image/icon/pizza.png"),
    require("../../../../Image/icon/бургер.png"),
    require("../../../../Image/icon/Блюда.png"),
    require("../../../../Image/icon/Роллы.png"),
    require("../../../../Image/icon/Салаты.png"),
    require("../../../../Image/icon/Десерты.png"),
    require("../../../../Image/icon/Напитки.png"),
    require("../../../../Image/icon/Сеты.png"),
  ];

  const handleClickPlus = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const handleClickMinus = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await fetch(
          "http://localhost:3030/categories"
        );
        const dataCategories = await responseCategories.json();

        const responseProducts = await fetch("http://localhost:3030/products");
        const dataProducts = await responseProducts.json();

        if (Array.isArray(dataCategories) && Array.isArray(dataProducts)) {
          setCategories(dataCategories);
          setProducts(dataProducts);
        } else {
          console.error("Некорректные данные");
        }
      } catch (error) {
        console.error("Ошибка соединения:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filterProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <div className={style.block}>
      <motion.div
        ref={ref}
        className={style.block_2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
      >
        <div className={style.title}>
          <p className={style.text_title}>Новинки</p>
        </div>
        <div className={style.block_3}>
          {categories.map((category, index) => (
            <motion.p
              key={index}
              className={style.text}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.category)}
            >
              <img
                src={categoryImage[index]}
                className={style.logo_name}
                alt=""
              />
              {category.category}
            </motion.p>
          ))}
        </div>
      </motion.div>
      <div className={style.block_4}>
        <div className={style.block_5}>
          {filterProducts.slice(0, maxProducts).map((product, index) => (
            <motion.div
              key={index}
              className={style.product}
              initial={{ opacity: 0 }}
              transition={{
                ease: "easeIn",
                delay: 0.5,
                duration: 0.5,
              }}
              animate={{ opacity: 1 }}
            >
              <img src={product.image} className={style.img} />
              <p className={style.name}>{product.name}</p>
              <p className={style.name_title}>{product.title}</p>
              <p className={style.price}>{product.price}</p>
              <div className={style.block2}>
                <button
                  onClick={() => handleClickMinus(product.id)}
                  className={style.minus}
                >
                  -
                </button>
                <p className={style.noll}>{productCounts[product.id] || 0}</p>
                <button
                  onClick={() => handleClickPlus(product.id)}
                  className={style.plus}
                >
                  +
                </button>
              </div>
              <motion.button
                className={style.btn}
                initial={{ scale: 1, opacity: 0, y: "100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1,
                  backgroundColor: "rgba(254, 114, 76, 0)",
                  color: "#fe724c",
                  border: "1px solid #fe724c",
                  transition: {
                    duration: 0.6,
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                В КОРЗИНУ
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
