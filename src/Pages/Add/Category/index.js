import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/Templates/DefaultPage';
import FormField from '../../../components/FormField';

function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
  const [value, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...value,
      [key]: value,
    })
  }

  function handleChange(eventsInfo) {
    setValue(
      eventsInfo.target.getAttribute('name'),
      eventsInfo.target.value
    );
  }

  return (
    <DefaultPage>
      <h1>Add a new category: {value.name}</h1>

      <form onSubmit={function handleSubmit(eventsInfo) {
          eventsInfo.preventDefault();
          setCategories([
            ...categories,
            value
          ]);

          setValues(initialValues)
      }}>

        <FormField
          label="Category's name"
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="????"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Description:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Color"
          type="color"
          name="color"
          value={value.color}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Color:
            <input
              type="color"
              value={values.color}
              name="color"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Add
        </button>
      </form>
      

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Back to the main page
      </Link>
    </DefaultPage>
  )
}

export default AddCategory;