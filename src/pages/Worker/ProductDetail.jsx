import React from 'react';
import img from "../../assets/fruit.jpg"
import Navbar from '../components/Navbar';
const ProductDetailPage = () => {

    return (
    <>
    <Navbar/>
    <div style={styles.container}>
      
      <div style={styles.productImage}>
        {/* Image component or img tag for the product image */}
        <img
          src={img}
          alt="Product"
          style={styles.image}
        />
      </div>
      <div style={styles.productDetails}>
        <h2 style={styles.productName}>Mango</h2>
        <p style={styles.productDescription}>
          Mango is very good apple..
        </p>
        <p style={styles.producthealth}>87% Health Ratio</p>
        <button style={styles.BuyButton}>BUY</button>
        <button style={styles.BuyButton} id="hist" >History</button>
      </div>
      <div style={styles.productHistory}>
        <p style={styles.productHistorypara} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae eos voluptatum fugiat fuga ullam dignissimos repellendus excepturi optio iure, ad sed tenetur blanditiis corporis expedita dolorem vitae! Natus nostrum quaerat laborum pariatur obcaecati!</p>
        <p style={styles.productHistorypara} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae eos voluptatum fugiat fuga ullam dignissimos repellendus excepturi optio iure, ad sed tenetur blanditiis corporis expedita dolorem vitae! Natus nostrum quaerat laborum pariatur obcaecati!</p>
        <p style={styles.productHistorypara} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae eos voluptatum fugiat fuga ullam dignissimos repellendus excepturi optio iure, ad sed tenetur blanditiis corporis expedita dolorem vitae! Natus nostrum quaerat laborum pariatur obcaecati!</p>
        <p style={styles.productHistorypara} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae eos voluptatum fugiat fuga ullam dignissimos repellendus excepturi optio iure, ad sed tenetur blanditiis corporis expedita dolorem vitae! Natus nostrum quaerat laborum pariatur obcaecati!</p>

        
      </div>

    </div>
    </>
  );
};

const styles = {
  container: {
    // maxWidth: '1200px',
    width:"100%",
    height:"100%",
    margin: 'auto',
    // display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItem:"center",
    padding: '20px',
    backgroundColor:"#191926",
    // margin:"auto"

  },
  productDetails: {
    flex: '1 1 100%',
    // marginBottom: '20px',
    color:"white"
  },
  productHistory: {
    position:"fixed",
    width:"100%",
    backgroundColor:"#333",
    height:"80%",
    bottom:"-100em"
    
    
  },
  productHistorypara: {
    color:"white",
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color:"white",
  },
  productDescription: {
    fontSize: '16px',
    marginBottom: '20px',
    color:"white",
  },
  producthealth: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  BuyButton: {
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin:"1rem",
    
  },
  productImage: {
    width:"10rem",
    marginLeft:"4rem",
    
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default ProductDetailPage;
