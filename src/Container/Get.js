import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Form, Col, CardColumns, Row, CardGroup } from 'react-bootstrap';
import './Get.css';



const Get = (props) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [blogId, setBlogId] = useState();



    const deleteNews = (id) => {
        fetch(`http://mi-linux.wlv.ac.uk/~2032521/rahul/api/blogs/delete/${id}`).then(() => alert('deleted')).then(() => allProduct())
    }

    useEffect(() => {
        allProduct();
    }, [])

    const editNews = (id) => {


        setShow(true)
        setBlogId(id);
        console.log(id);

    }

    const updateBlog = () => {
        fetch(`http://mi-linux.wlv.ac.uk/~2032521/rahul/api/blogs/update/${blogId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                category: category
            })
        }).then(() => alert('updated')).then(() => allProduct());


    }

    const allProduct = () => {
        fetch("http://mi-linux.wlv.ac.uk/~2032521/rahul/api/blogs").then((resp) => resp.json()).then((resp) => setData(resp));
   
    
    }
    return (

        props.option=='all' ? 
        
            show == true ?
                <Alert show={show} variant="success" style={{ position: 'absolute' }}>
                    <Alert.Heading>blog with ID: {blogId} is being edited </Alert.Heading>
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

                                <Form.Label>category</Form.Label>
                                <Form.Control onChange={(text) => setCategory(text.target.value)} type="text" placeholder="news category" style={{ width: 300 }} />

                            </Col>

                        </Form.Group>
                        <Button variant='danger' onClick={() => updateBlog()}>Post</Button>


                    </Form>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close me!
                        </Button>
                    </div>
                </Alert> :



                  
                    <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: data.length }).map((_, idx) => (
                      <Col>
                        <Card className='all'>
                        <Card.Img variant="top" src={data[idx].category == 'stock' ?
                            "https://wallpaperaccess.com/full/5569190.jpg"
                            : "https://www.newsbtc.com/wp-content/uploads/2018/08/cryptofalling.jpg"} />
                          <Card.Body style={{height:210}}>
                            <Card.Title>{data[idx].title}</Card.Title>
                            <Card.Text className='text'>
                             {data[idx].description}.
                            </Card.Text>
                          </Card.Body>
 
                          <Card.Footer className="text-muted">
                          <Button variant="primary" onClick={({})=>deleteNews(data[idx].id)} style={{marginRight:5}}>Delete</Button>
          <Button variant="primary" onClick={({})=>editNews(data[idx].id)}>Edit</Button><hr/>
                              published at: {data[idx].created}</Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>



                
            






     : props.option=='stock' ? 


     show == true ?
     <Alert show={show} variant="success" style={{ position: 'absolute' }}>
         <Alert.Heading>blog with ID: {blogId} is being edited </Alert.Heading>
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

                     <Form.Label>category</Form.Label>
                     <Form.Control onChange={(text) => setCategory(text.target.value)} type="text" placeholder="news category" style={{ width: 300 }} />

                 </Col>

             </Form.Group>
             <Button variant='danger' onClick={() => updateBlog()}>Post</Button>


         </Form>
         <div className="d-flex justify-content-end">
             <Button onClick={() => setShow(false)} variant="outline-success">
                 Close me!
             </Button>
         </div>
     </Alert> :



       
         <Row xs={1} md={3} className="g-4">
         {Array.from({ length: data.length }).map((_, idx) => (
           data[idx].category=='stock' ?
           <Col>
             <Card>
             <Card.Img variant="top" src={data[idx].category == 'stock' ?
                 "https://retirewire.com/wp-content/uploads/2016/01/stock-investing-background.jpg"
                 : "https://www.newsbtc.com/wp-content/uploads/2018/08/cryptofalling.jpg"} />
               <Card.Body style={{height:210}}>
                 <Card.Title>{data[idx].title}</Card.Title>
                 <Card.Text className='text'>
                  {data[idx].description}.
                 </Card.Text>
               </Card.Body>
                     
               <Card.Footer className="text-muted">
               <Button variant="primary" onClick={({})=>deleteNews(data[idx].id)} style={{marginRight:5}}>Delete</Button>
          <Button variant="primary" onClick={({})=>editNews(data[idx].id)}>Edit</Button><hr/>
                   published at: {data[idx].created}</Card.Footer>
             </Card>
           </Col>: null
         ))}
       </Row>
:


show == true ?
<Alert show={show} variant="success" style={{ position: 'absolute' }}>
    <Alert.Heading>blog with ID: {blogId} is being edited </Alert.Heading>
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

                <Form.Label>category</Form.Label>
                <Form.Control onChange={(text) => setCategory(text.target.value)} type="text" placeholder="news category" style={{ width: 300 }} />

            </Col>

        </Form.Group>
        <Button variant='danger' onClick={() => updateBlog()}>Post</Button>


    </Form>
    <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
            Close me!
        </Button>
    </div>
</Alert> :



  
    <Row xs={1} md={3} className="g-4">
    {Array.from({ length: data.length }).map((_, idx) => (
      data[idx].category=='crypto' ?
      <Col>
        <Card>
        <Card.Img variant="top" src={data[idx].category == 'stock' ?
            "https://retirewire.com/wp-content/uploads/2016/01/stock-investing-background.jpg"
            : "https://www.newsbtc.com/wp-content/uploads/2018/08/cryptofalling.jpg"} />
          <Card.Body style={{height:210}}>
            <Card.Title>{data[idx].title}</Card.Title>
            <Card.Text className='text'>
             {data[idx].description}.
            </Card.Text>
          </Card.Body>
                
          <Card.Footer className="text-muted">
              
          <Button variant="primary" onClick={({})=>deleteNews(data[idx].id)} style={{marginRight:5}}>Delete</Button>
          <Button variant="primary" onClick={({})=>editNews(data[idx].id)}>Edit</Button><hr/>
              published at: {data[idx].created}</Card.Footer>
        </Card>
      </Col>: null
    ))}
  </Row>



    )
}
export default Get;