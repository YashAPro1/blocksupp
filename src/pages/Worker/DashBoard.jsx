import React, { useState } from 'react';
import Webcam from 'react-webcam';
import img from "../../assets/fruit.jpg";
import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";
const Dashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', description: 'This is product A', image: img },
    { id: 2, name: 'Product B', description: 'This is product B', image: img },
    { id: 3, name: 'Product C', description: 'This is product C', image: img },
    { id: 4, name: 'Product D', description: 'This is product D', image: img },
    { id: 5, name: 'Product E', description: 'This is product E', image: img },
    { id: 6, name: 'Product F', description: 'This is product F', image: img },
    { id: 7, name: 'Product G', description: 'This is product E', image: img },
    { id: 8, name: 'Product H', description: 'This is product F', image: img },
    // Add more product data as needed
  ]);

  const capture = () => {
    // Logic to capture an image from the webcam
    // This is where you can handle the image capture functionality
    console.log('Image captured');
  };

  const handleImageUpload = (productId, event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProducts = [...products];
        const productIndex = updatedProducts.findIndex((p) => p.id === productId);
        if (productIndex !== -1) {
          updatedProducts[productIndex].image = reader.result;
          setProducts(updatedProducts);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div >
    <Navbar/>
    <div style={styles.container}>
      <h2 style={styles.header}>Dashboard</h2>

      {/* Display product cards */}
      <div style={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <Link to="/detail">
                <img
                src={product.image}
                alt={`Product ${product.id}`}
                style={styles.productImage}
                />
            </Link>
            
            
            
            
            
          </div>
        ))}
      </div>

      {/* Camera section */}
      {/* <div style={styles.cameraSection}>
        <h3>Scan Image</h3>
        <Webcam style={styles.webcam} />
        <button onClick={capture} style={styles.captureButton}>
          Capture Image
        </button>
      </div> */}
    </div>
    </div>
  );
};

const styles = {
  container: {
    width:"100%",
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#191926',
    margin:"2px",   
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '20px',
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 2fr))',
    gap: '20px',

  },
  productCard: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
    overflow: 'hidden',
    position: 'relative',
  },
  productImage: {
    maxWidth: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  fileInput: {
    marginTop: '10px',
    cursor: 'pointer',
  },
  cameraSection: {
    marginTop: '20px',
    textAlign: 'center',
  },
  webcam: {
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  captureButton: {
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Dashboard;
