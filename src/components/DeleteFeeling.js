import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

const DeleteFeeling = (props) => {
    const [data, setData] = useState({
        feeling_title: '',
        feeling_description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:5000/all_feelings/${props.match.params.id}`
            );
            setData({ ...result.data});
        };
        fetchData();
    }, []);

    const onDeleteFeelingData = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/all_feelings/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/all_feelings');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Student</h3>
            <Form onSubmit={onDeleteFeelingData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Feeling Title </Label>
                        <Input
                            readOnly
                            type="text"
                            name="feeling_title"
                            className="form-control"
                            value={data.feeling_title} 
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Feeling Description </Label>
                        <Input
                            readOnly
                            type="text"
                            name="feeling_description"
                            className="form-control"
                            value={data.feeling_description} 
                        />
                    </Col>
                </FormGroup>
            </Form>

        </div>

    )

}

export default DeleteFeeling