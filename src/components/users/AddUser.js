import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value}); //using ... - spread operator
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        navigate('/');
    }

  return (
    <>
        <div className="add-user">
            <h1>Add A User</h1>
            <form onSubmit={ e => onSubmit(e) }>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control form-control-lg'
                        placeholder='Enter Your Name'
                        name='name'    
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control form-control-lg'
                        placeholder='Enter Your Username'
                        name='username'    
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className='form-control form-control-lg'
                        placeholder='Enter Your E-mail Address'
                        name='email'    
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control form-control-lg'
                        placeholder='Enter Your Phone Number'
                        name='phone'    
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control form-control-lg'
                        placeholder='Enter Your Website Name'
                        name='website'    
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>

                <button className="btn btn-primary btn-block">Add User</button>
            </form>
        </div>
    </>
  )
}

export default AddUser