import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './searchbox.module.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <div className='position-relative'>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Product'
          className={`mr-sm-2 ml-sm-5 ${styles.searchbox} ${styles.form_control}`}
        ></Form.Control>
        <Button
          type='submit'
          variant='outline-success'
          className={`p-2 ${styles.searchBtn}`}
        >
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchBox
