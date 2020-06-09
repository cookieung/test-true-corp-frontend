import React, {useState, useEffect} from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

const contentLayout = {
    width : "100%",
    padding : "10%"
}

const buttonLayout = {
    padding : "15px"
}

export const List = () => {


    const [data,setData] = useState([]);

    useEffect(async() => {
        const response = await axios('http://localhost:5000/users');
        setData(response.data)
    },[])

    function dateFormat(date_string) {
        let date = new Date(date_string);
        return date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }

    function getFormat(a_data) {
        let res = [];

        for (const key in a_data) {
            const index = parseInt(key);
            const data = a_data[index];
            res.push(
                <tr key={key}>
                <td>{index+1}</td>
                <td>{data.user_id}</td>
                <td>{data.username}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.create_by}</td>
                <td>{dateFormat(data.create_at)}</td>
                <td>{data.update_by}</td>
                <td>{dateFormat(data.update_at)}</td>
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
                {getFormat(data)}
            </tbody>
        </Table>
    </div>
  
  );
};