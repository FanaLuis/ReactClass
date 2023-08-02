// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const apiUrl = 'http://localhost:3000/products'; // Thay đổi URL API tại đây nếu server của bạn chạy ở cổng khác.

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name,
        price,
        description,
        brand,
        category,
        stock,
      };
      await axios.post(apiUrl, newProduct);
      // Product added successfully, do something if needed
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${apiUrl}/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (productId, newName, newPrice, newDescription, newBrand, newCategory, newStock) => {
    try {
      await axios.put(`${apiUrl}/${productId}`, {
        name: newName,
        price: newPrice,
        description: newDescription,
        brand: newBrand,
        category: newCategory,
        stock: newStock,
      });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - {product.description} - {product.brand} - {product.category} - {product.stock}
            <button onClick={() => deleteProduct(product.id)}>Xóa</button>
            <button
              onClick={() => {
                const newName = prompt('Nhập tên mới cho sản phẩm:', product.name);
                if (newName !== null && newName !== product.name) {
                  updateProduct(product.id, newName, product.price, product.description, product.brand, product.category, product.stock);
                }
              }}
            >
              Sửa
            </button>
          </li>
        ))}
      </ul>

      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sản phẩm:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Giá sản phẩm:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Mô tả:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Thương hiệu:</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <div>
        <label>Danh mục:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Số lượng tồn kho:</label>
        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
      </div>
      <button type="submit">Thêm sản phẩm</button>
    </form>
    </div>
  );
};

export default ProductList;
