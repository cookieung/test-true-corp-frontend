import React, {useState} from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';

const contentLayout = {
    width : "100%",
    padding : "10%"
}

const buttonLayout = {
    padding : "15px"
}

export const List = (props) => {


    const [data,setData] = useState([]);

    function getFormat(data) {
        let res = [];

        for (const key in data) {
            res.push(
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><Button variant="primary">แก้ไข</Button></td>
                <td><Button variant="primary">ลบ</Button></td>
                </tr>
            )
        }
        return res;
        
    }

  return (
    <div style={contentLayout}>
        <Form>
        <Row style={buttonLayout}>
            <Col lg="6" md="6" xs="6" style={buttonLayout}>
                <Form.Control placeholder="First name" />
            </Col>
            <Col style={buttonLayout}>
                <Button variant="primary">ค้นหา</Button>
            </Col>
            <Col style={buttonLayout}>
                <Button variant="primary">เพิ่ม</Button>
            </Col>
        </Row>
        </Form>
        <Table>
            <thead>
                <tr>
                <th>No</th>
                <th>UserID</th>
                <th>UserName</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Create by</th>
                <th>Create date</th>
                <th>last update by</th>
                <th>last update date</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {getFormat(props.data)}
            </tbody>
        </Table>
    </div>
  
  );
};