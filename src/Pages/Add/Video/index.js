import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/Templates/DefaultPage';

function AddVideo() {
    return (
      <DefaultPage>
        <h1>Add a new video</h1>

        <Link to="/Add/Category">
          Add category
        </Link>
      </DefaultPage>
    )
  }

  export default AddVideo;