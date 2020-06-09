import React, {useState, useEffect, useCallback} from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import {
    Link,
    useHistory
  } from "react-router-dom";

const contentLayout = {
    width : "100%",
    padding : "10%"
}

const buttonLayout = {
    padding : "15px"
}

export const Dashboard = () => {


    const history = useHistory();
    const [keyword,setKeyword] = useState('');
    const [data,setData] = useState([]);

    async function deleteUser(user_id) {
        const response = await axios.delete('http://localhost:5000/user/'+user_id);
    }

    useEffect(async() => {
        const response = await axios('http://localhost:5000/users');
        setData(response.data)
    },[keyword])

    function dateFormat(date_string) {
        let date = new Date(date_string);
        return date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }

    function getFormat(a_data) {
        let res = [];

        for (const key in a_data) {
            const index = Number(key);
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
                <td><Link to={"/edit/"+index}><Button variant="primary">แก้ไข</Button></Link></td>
                <td><Button variant="primary">ลบ</Button></td>
                </tr>
            )
        }
        return res;
        
    }

    function handleCreate() {
        history.push('/create')
    }

  return (
    <div style={contentLayout}>
        <Form>
        <Row style={buttonLayout}>
            <Col lg="6" md="6" xs="6" style={buttonLayout}>
                <input onChange={e => setKeyword(e.target.value)} placeholder="First name" className="form-control"/>
            </Col>
            <Col style={buttonLayout}>
                <Button type="submit" variant="primary">ค้นหา</Button>
            </Col>
            <Col style={buttonLayout}>
            <button onClick={() => history.push("/create")} type="button" class="btn btn-primary">เพิ่ม</button>
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