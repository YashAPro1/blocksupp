import React, { useState } from 'react';
import Navbar from './components/Navbar';

const Applyform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: 'admin', // Default position is admin
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <> 
    <Navbar/>
    {/* <div style={styles.cover}> */}
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.header}>Apply for a Position</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label className='lab' style={styles.lab}>
              Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            
            <label className='lab' style={styles.lab}>What's the Name Of your Organization?</label>
             
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            
            <label className='lab' style={styles.lab}>
              Position:
              
            </label>
            <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="admin">Admin</option>
                <option value="supplier">Supplier</option>
                <option value="worker">Worker</option>
              </select>
            <button type="submit" style={styles.submitButton}>
              Apply
            </button>
          </form>
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

const styles = {
  cover: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        // height: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
  container: {
    width: '100%',
    // height:"50%",
    // maxWidth: '400px',
    // position: 'fixed'    ,
    // marginRight:"1rem",
    // marginTop:"8rem"

  },
  formContainer: {
    padding: '20px',
    // border: '1px solid #ccc',
    // borderRadius: '5px',
    backgroundColor: '#191926',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width:"100%",
    height:"100%",
    // marginTop:"1rem" 
  },
  header: {
    textAlign: 'center',
    color: '#ffffff',
    // marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    // marginTop: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  submitButton: {
    marginTop: '80%',
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  lab: {
    marginLeft:"0px",
    color:"white",
    marginTop:"1rem",
    marginBottom:"0.20rem"
    
  }
};

export default Applyform;
