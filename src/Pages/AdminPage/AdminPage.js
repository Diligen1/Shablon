import style from "./AdminPage.module.css";
import image from "../../Image/admin logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function AdminPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const [productData, setProductData] = useState({
    category: "",
    name: "",
    title: "",
    price: "",
    image: "",
  });

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        fetch("http://localhost:3030/categories"),
        fetch("http://localhost:3030/products"),
      ]);

      if (categoriesResponse.ok && productsResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        const productsData = await productsResponse.json();

        setCategories(categoriesData);
        setProducts(productsData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:3030/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log("Product added successfully!");
        setProductData({
          category: "Пицца",
          name: "",
          title: "",
          price: "",
          image: "",
        });
        fetchData();
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3030/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Product deleted successfully!");
        fetchData();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (productId) => {
    setSelectedProductId(productId);
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    setProductData({
      category: selectedProduct.category,
      name: selectedProduct.name,
      title: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.image,
    });
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3030/products/${selectedProductId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        console.log("Product updated successfully!");
        setProductData({
          category: "Пицца",
          name: "",
          title: "",
          price: "",
          image: "",
        });
        setSelectedProductId(null);
        fetchData();
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className={style.block}>
      <div className={style.left}>
        <div className={style.block_2}>
          <img src={image} className={style.image} alt="logo" />
          <h1 className={style.text}>FOOD PLANET</h1>
        </div>
        <div className={style.block_3}>
          <button className={style.btn}>Товар</button>
          <button className={style.btn} onClick={handleClick}>
            Главное
          </button>
          <div className={style.box}></div>
        </div>
      </div>
      <div className={style.right}>
        <p className={style.spisok}>Список Товаров</p>
        <div className={style.category}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={style.tovar}
              onClick={() =>
                setProductData((prevData) => ({
                  ...prevData,
                  category: category.category,
                }))
              }
            >
              <p className={style.product}>{category.category}</p>
              <p className={style.quantity}></p>
            </button>
          ))}
        </div>
        <p className={style.spisok}>Добавление Товаров</p>
        <div className={style.block_5}>
          <input
            type="text"
            placeholder="Введите ссылку на изображение"
            value={productData.image}
            name="image"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Введите название"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Введите о товаре"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Введите прайс товара"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
          <button onClick={handleAddProduct}>Добавить </button>
          {selectedProductId !== null && (
            <button onClick={handleUpdateProduct}>Обновить </button>
          )}
        </div>
        <div className={style.blocker}>
          {products.map((product) => (
            <div key={product.id} className={style.block_4}>
              <img src={product.image} className={style.img} />
              <p>{product.name}</p>
              <p>{product.title}</p>
              <p>{product.price}</p>

              <button onClick={() => handleDeleteProduct(product.id)}>
                Удалить
              </button>
              <button onClick={() => handleEditProduct(product.id)}>
                Изменить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
