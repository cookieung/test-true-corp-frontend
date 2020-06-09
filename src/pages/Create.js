import React, { useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from "axios";

const contentLayout = {
    padding: "10px"
}

const fullWidth = {
    width : "500px"
}

const getProvinceList = async function () {
    const response = await axios('http://localhost:5000/provinces');
    return response.data;
}

const getKhetList = async function () {
    const response = await axios('http://localhost:5000/khets');
    return response.data;
}

function formatOptions(datas,type) {
    let res = []
    for (const key in datas) {
        const element = datas[key];
        res.push(
            <option value={element[type+'_id']}>{element[type+"_name"]}</option>
        )
    }
    return res;
}

const getKhwangList = async function () {
    const response = await axios('http://localhost:5000/khwangs');
    return response.data;
}


export const Create = () => {

    const [provinceList,setProvinceList] = useState([]);
    const [khetList,setKhetList] = useState([]);
    const [khwangList,setKhwangList] = useState([]);

    useEffect(async() => {
        setProvinceList(await getProvinceList());
        setKhetList(await getKhetList());
        setKhwangList(await getKhwangList());
    },[]);

    return (
        <div>
        <form >
            <Row>
                <Col lg="12" md="12" xs="12">
                    <label className={contentLayout}>
                        Username:
                        <input style={fullWidth} className="form-control" type="text" name="username" />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                <label className={contentLayout}>
                    Firstname:
                    <input style={fullWidth} className="form-control" type="text" name="first_name" />
                </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                <label className={contentLayout}>
                    Lastname:
                    <input style={fullWidth} className="form-control" type="text" name="last_name" />
                </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                    <label className={contentLayout}>
                        Email:
                        <input style={fullWidth} className="form-control" type="text" name="email" />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                    <label className={contentLayout}>
                        Province:
                        <select  style={fullWidth} className="form-control" name="province_id">
                            {formatOptions(provinceList,'province')}
                        </select>
                    </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                    <label className={contentLayout}>
                        Khet:
                        <select  style={fullWidth} className="form-control" name="khet_id">
                            {formatOptions(khetList,'khet')}
                        </select>
                    </label>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" xs="12">
                    <label className={contentLayout}>
                        Khwang:
                        <select  style={fullWidth} className="form-control" name="khwang_id">
                            {formatOptions(khwangList,'khwang')}
                        </select>
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className={contentLayout}>
                        Zipcode:
                        <input style={fullWidth} className="form-control" type="text" name="zipcode" />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className={contentLayout}>
                        <input style={fullWidth} className="form-control" type="submit" value="Submit" />
                    </label>
                </Col>
            </Row>

        </form>
        </div>
    )
};