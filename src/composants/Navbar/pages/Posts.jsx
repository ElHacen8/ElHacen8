import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Button, Modal, Form} from "react-bootstrap";

import axios from 'axios'


const baseURL = "http://localhost:3000";


const Posts = () => {

  const [post, setPost] = useState([]);
  const [title, setTitile] = useState("");
  const [author, setAuthor] = useState("");
  const [authorUpdate, setAuthorUpdate] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [show, setShow] = useState(false);
  
  const [idToUpdate,setIdToUpdate] = useState();
  const handleShow = (item) => {
     console.log(item)
     //setPostSelected(item)
     setAuthorUpdate(item.author);
     setTitleUpdate(item.title)
     setIdToUpdate(item.id)
    setShow(true)
  
  };
  const handleClose = () => {setShow(false)};



  const getPosts = () => {
    axios.get(`${baseURL}/posts`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    })
  }

  useEffect(() => {

   getPosts();

  }, []);



  function updatePost() {
    axios.put(`${baseURL}/posts/${idToUpdate}`, {
      title: titleUpdate,
      author: authorUpdate,
    }).then((res) => {
      setShow(false)
      alert("post updated")
      console.log(res)
      getPosts();
    });
  }


  function deletePost(id) {
    axios 
      .delete(`${baseURL}/posts/${id}`)
      .then(() => {
        alert("Post deleted!");
        getPosts();
       
      });
  }



  function createPost () {
    axios.post(`${baseURL}/posts`,{
      title: title,
      author: author
    }).then((response) => {
      console.log(response.data);
      getPosts();

    });
  }


  return (
    
    <div style={{ display: "flex 10em 30px content", maxHeight:'200px', width:'100%'}}>
      <form>
        <input type='text' value={title} onChange={(e) => setTitile(e.target.value)} /> <br></br>
        <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} /> <br></br>
        <button 
            style={{ backgroundColor:'black', color:'white', fontSize:'10px', padding:'5px 30px', margin:'5px 0px', cursor:'pointer' }}
            onClick={() => createPost()}>CREATE
          </button>
      </form>
      <Container>
        <Row className="justify-content-md-center">
          {post.map((item, key) => {  
            return (

              <Col xs={3} key={key} style={{
                border: "1px solid gray",
                backgroundColor: "",
                margin: "2px",
              }}
              >
                
                
                <div><h3>ID: {item.id}</h3></div>
                <div><h3>Title: {item.title}</h3></div>
                <div><h3>Author: {item.author}</h3></div>


      <>
                <Button variant="primary" 
                  style={{ backgroundColor:'red', color:'white', fontSize:'10px', padding:'5px 30px', margin:'5px 0px', cursor:'pointer' }}
                  onClick={()=>handleShow(item)}>
                   UPDATING
                </Button>

      
      </>
                <button 
                  style={{ backgroundColor:'blue', color:'white', fontSize:'10px', padding:'5px 30px', margin:'5px 0px', cursor:'pointer' }}
                  onClick={() => deletePost(item.id)}>DELETE
                </button>
                     
    
              </Col>
                  
                  
      )
    })};

        </Row>
          </Container>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>UPDATE POST</Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    autoFocus
                    value={authorUpdate}
                    onChange={(e) => setAuthorUpdate(e.target.value)} />
                </Form.Group>
                
              
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1" >
                    <Form.Label>Title</Form.Label>
                      <Form.Control as="textarea" rows={3}  
                        value={titleUpdate}
                        onChange={(e) => setTitleUpdate(e.target.value)}/>   
                </Form.Group>
              </Form>
            
            </Modal.Body>

              
            <Modal.Footer>
              <Button variant="secondary" 
                style={{ backgroundColor:'blue', color:'white', fontSize:'10px', padding:'5px 30px', margin:'5px 0px', cursor:'pointer' }}
                onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" 
                style={{ backgroundColor:'red', color:'white', fontSize:'10px', padding:'5px 30px', margin:'5px 0px', cursor:'pointer' }}
                onClick={() => updatePost()}>
               UPDATE
            </Button>
            </Modal.Footer>
              
      </Modal>
    </div>
  );
}

export default Posts;
              
                
             

      
                