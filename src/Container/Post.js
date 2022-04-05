import React, { useState, useEffect } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import './Post.css';
import axios from 'axios';




const Post = (props) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [show, setShow] = useState(false);

  const postBlog = () => {

    var data = {
      title: title,
      description: description,
      category: category
    }
    axios.post("http://mi-linux.wlv.ac.uk/~2032521/rahul/api/blogs/post",
      {

        title: title,
        description: description,
        category: category


      }).then(() => setShow(true))

  }

  const closeAlert = () => {
    setShow(false)
    window.location.reload(true)

  }
  return (

    <div className='container'>
      {show == true ?
        <Alert show={show} variant="success">
          <Alert.Heading>news posted sucessfully!</Alert.Heading>

          <div className="d-flex justify-content-end">
            <Button onClick={() => closeAlert()} variant="outline-success">
              Close me!
            </Button>
          </div>
        </Alert> :
        <Form className='form' >

          <Form.Group className="mb-3" controlId="formGroupText">

            <Col sm={3} className="my-1">

              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(text) => setTitle(text.target.value)} placeholder="news title" style={{ width: 300 }} />

            </Col>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText" >
            <Col sm={3} className="my-1">

              <Form.Label>Descrition</Form.Label>
              <Form.Control onChange={(text) => setDescription(text.target.value)} as="textarea" placeholder="description" style={{ height: '100px', width: 300 }} />
            </Col>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">

            <Col sm={3} className="my-1">
              
              <Form.Select aria-label="Default select example" onChange={(evt) => setCategory(evt.target.value)}
               style={{width:160}}>
                <option>select category</option>
                <option value="stock" >stock</option>
                <option value="crypto">crypto</option>

              </Form.Select>
            </Col>

          </Form.Group>
          <Button variant='danger' onClick={() => postBlog()}
      >Post</Button>


        </Form>}
    </div>


  )
}
export default Post;