import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Store/Reducers/taskReducer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

const DeleteModal = ({ onClose, id }) => {

  const dispatch = useDispatch();

  const del = () => {
    dispatch(removeItem(id));
    onClose();
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        {/* <span className="close-icon" onClick={onClose}>
          &times;
        </span> */}
        <CloseIcon style={{color:'black'}} className="close-icon" onClick={onClose} />
        <DeleteForeverIcon style={{color:'red'}} className="delete-icon" fontSize='large' />
        <div className="modal-content">
        <p>Are you sure?</p>
          <p>Do you really want to delete this customer?</p>
          <p>this process cannot be undone</p>
          <div className="buttons">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button onClick={del} className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
