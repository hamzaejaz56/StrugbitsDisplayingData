import React, { useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { newItem, updateItem } from '../../Store/Reducers/taskReducer';

const EditModal = ({ onClose, id , nameA,emailA,imageA}) => {


  const store = useSelector(state => state.task.data);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const update = () => {
    // if(name || email) {
    //     let data = {
    //         id : store.id,
    //         first_name: name,
    //         email: email,
    //         photo: "photo",
    //     };
    //     dispatch(updateItem(data));
    //     onClose();
    // } else {
    //     alert("Enter all field");
    // }
    // alert(id);
    if (id == store[0].id){
        alert("correct");
    } else{
        alert("false");
    }
    // alert(store[0].email);
    // alert(emailA);
  }


  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Customer</h2>
          <span className="close-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">
          {/* <label htmlFor="customerName">Customer Name:</label> */}
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Customer Name'
            type="text"
            id="customerName"
          />
          {/* <label htmlFor="email">Email:</label> */}
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            type="email"
            id="email"
          />
          {/* <label htmlFor="uploadPhoto">Upload Photo:</label> */}
          <input
            placeholder='Upload Photo'
            type="file"
            id="uploadPhoto"
          />
          <button onClick={update} className="add-button">EDIT CUSTOMER</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
