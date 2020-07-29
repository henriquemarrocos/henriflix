import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/Templates/DefaultPage';

function AddCategory() {
    return (
      <DefaultPage>
        <h1>Add a new category</h1>

        <form>
          <label>
            Category's name:
            <input
              type="text"
            />
          </label>
          
          <button>
            Add
          </button>
        </form>

        <Link to="/">
          Go back home
        </Link>
      </DefaultPage>
    )
  }

  export default AddCategory;