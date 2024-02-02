
import React, { useState } from "react";
import { Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { BiImageAdd } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import './Inf.css'
const Infulur = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <div>
      <Container>
        <Stack direction="horizontal" gap={3}>
          <div className="p"> <Form.Group controlId="formBasicEmail" className="custom-file-drop-area1 ">

            <Form.Label for="filephotos">
              <BiImageAdd className='bigimg1' />

            </Form.Label>

            <Form.Control type="file"
              name="images"
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg, image/webp" placeholder="Enter photos" id="filephotos" required />

          </Form.Group>
            {selectedImages.length > 0 &&
              (selectedImages.length > 10 ? (
                <p className="error">
                  You can't upload more than 10 images! <br />
                  <span>
                    please delete <b> {selectedImages.length - 10} </b> of them{" "}
                  </span>
                </p>
              )
                :
                (
                  <p

                  >
                    {/* UPLOAD {selectedImages.length} IMAGE
  {selectedImages.length === 1 ? "" : "S"} */}
                  </p>
                )
              )
            }</div>
          <div className="p"><div className="images">
            <Row>

              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (


                    <Col key={image} className="image" >

                      <Card className="acrdi ">
                        <button onClick={() => deleteHandler(image)} className="delet " style={{ margin: "0px 0px 0px 100px" }}><IoMdClose />
                        </button> <br></br>
                        <img src={image} height="130" alt="upload" style={{ margin: "-20px 0px 0px 0px" }} />
                      </Card>
                    </Col>




                  );
                })}

            </Row>
          </div></div>

        </Stack>





      </Container>
    </div>
  );
}

export default Infulur
