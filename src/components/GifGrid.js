import React from 'react'
import { GifCard } from './GifCard';
import { Col, Row } from "react-bootstrap";
import { useFetchGift } from '../hooks/useFetchGift';
import { Loading } from './Loading';

export const GifGrid = ({ category, setLoading }) => {

    const { data, loading } = useFetchGift(category);

    return (
        <Row style={{ marginBottom: 40 }}>

            <Col md={12}>
                <h3 className="animate__animated animate__fadeIn" >  {category}  </h3>
            </Col>


            {loading &&
                <Row style={{ marginBottom: 40 }}>
                    <Col md={12} className="center">
                        <Loading loading={loading} />
                    </Col>
                </Row>}


            {data.map(gif => (
                <Col key={gif.id} md={3} style={{ marginBottom: 20 }}>
                    <GifCard key={gif.id} {...gif} />
                </Col>
            ))}
        </Row>
    )
}
