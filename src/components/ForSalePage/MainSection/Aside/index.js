import React from 'react'

import './index.scss'
import { Col, Row, Card, Image, Button } from 'react-bootstrap'
import locationSVG from '../../../../assets/svg/card/location.svg'

function Aside() {
  const properties = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Property 1',
      location: 'This is the location for Property 1.',
      price: '$500,000'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Property 2',
      location: 'This is the location for Property 2.',
      price: '$600,000'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Property 3',
      location: 'This is the location for Property 3.',
      price: '$700,000'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Property 4',
      location: 'This is the location for Property 4.',
      price: '$800,000'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Property 5',
      location: 'This is the location for Property 5.',
      price: '$900,000'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Property 6',
      location: 'This is the location for Property 6.',
      price: '$1,000,000'
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150',
      title: 'Property 7',
      location: 'This is the location for Property 7.',
      price: '$1,100,000'
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150',
      title: 'Property 8',
      location: 'This is the location for Property 8.',
      price: '$1,200,000'
    }
  ];

  return (
    <Col className='mt-4 property_aside_list'>
      <div className='d-flex section-title-div'>
        <p className="text-start section-title mt-1">Recent Listings</p>
      </div>

      {properties.map((property) => (
        <Card key={property.id} className="mb-3">
          <Row>
            <Col md={4}>
              <Card.Img style={{width: '100%', height: '100%'}} variant="top" src={property.image} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className='aside-card-title'>{property.title}</Card.Title>
                <Card.Text className='mb-0'>
                  <Image style={{width: '25px', height: '20px'}} src={locationSVG} />
                  <span className='aside-card-location'>{property.location}</span>
                </Card.Text>
                <Card.Text className='mt-0'><span className='aside-card-price'>Price: </span><span className='aside-card-numbers'>{property.price}</span></Card.Text>
                <div className='d-grid'>
                  <Button style={{fontSize: '15px'}} variant='tertiary-color' className="btn-sm">View Details</Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  )
}

export default Aside