import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { newItem, updateItem } from "../../Store/Reducers/taskReducer";

const Modal = ({ text, onClose, edit, customer }) => {
  const store = useSelector((state) => state.task.data);
  const dispatch = useDispatch();
  const [name, setName] = useState(edit ? customer.first_name : "");
  const [email, setEmail] = useState(edit ? customer.email : "");
  const [images, setImages] = useState(edit ? customer.avatar : "");

  const handleImageChange = (e) => {
    e.preventDefault();
    const ProductImg = [...e.target.files];
    const images = ProductImg.map((image) => URL.createObjectURL(image));
    setImages(images);
  };

  const add = () => {
    if (edit) {
      dispatch(
        updateItem({
          id: customer.id,
          updatedUserData: { first_name: name, email: email, avatar: images },
        })
      );
      onClose();
    } else {
      if (name && email) {
        let data = {
          id: store.length + 1,
          first_name: name,
          email: email,
          avatar: images,
        };
        dispatch(newItem(data));
        onClose();
      } else {
        alert("Enter all field");
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          {text ? <h2>Edit Customer</h2> : <h2>Add New Customer</h2>}
          {/* <h2>Add New Customer</h2> */}
          <span className="close-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Customer Name"
            type="text"
            id="customerName"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            id="email"
          />
          <input
            placeholder="Upload Photo"
            // type="file"
            id="uploadPhoto"
            type="file"
            // id="file"
            onChange={handleImageChange}
            accept="image/png, image/jpg, image/jpeg"
          />
          {text ? (
            <button onClick={add} className="add-button">
              EDIT Customer
            </button>
          ) : (
            <button onClick={add} className="add-button">
              ADD Customer
            </button>
          )}
          {/* <button onClick={add} className="add-button">
            ADD Customer
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
