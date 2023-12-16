import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.leftCorner}>
        <span style={styles.name}>Block Supplier</span>
      </div>
      <div style={styles.rightCorner}>
        <button style={styles.button}>Profile</button>
        <button style={styles.button}>Home</button>
        <button style={styles.button}>Notification</button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    position:"sticky",
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:"100%",
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  leftCorner: {
    display: 'flex',
    alignItems: 'center',
  },
  rightCorner: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    marginRight: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    margin: '0 10px',
    cursor: 'pointer',
    fontSize: '14px',

    "&:hover": {
        backgroundColor:"rgba(131,153,167,0.99)",
        color: "black",
    }
  },
  
};

export default Navbar;
