/* eslint-disable no-unused-vars */
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Col, Image, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './index.scss'
import imageSVG from '../../../../../assets/svg/card/bx-images.svg'
import shareSVG from '../../../../../assets/svg/card/bxs-share.svg'
import sqmSVG from '../../../../../assets/svg/card/sqm.svg'
import bathroomSVG from '../../../../../assets/svg/card/bathroom.svg'
import bedroomSVG from '../../../../../assets/svg/card/bedroom.svg'
import poolSVG from '../../../../../assets/svg/card/pool.svg'
import starSVG from '../../../../../assets/svg/card/star_ratings.svg'
import caretSVG from '../../../../../assets/svg/card/caret.svg'

function CardProperty({property}) {
  const {
    imageUrl,
    title,
    price,
    property_type,
    isForSale,
    isForRent,
    location,
    bedrooms,
    bathrooms,
    createdAt
  } = property
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mt-4'>
      <div className="card" style={{borderRadius: '10px'}}>
        <Image style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} src={imageUrl[0]? imageUrl[0]: 'https://via.placeholder.com/150'} className="card-img-top" alt="image_property" />
        <div className='d-flex flex-column-reverse' style={{position: 'absolute', top: 5, right: 5}}>
          <Button className='share_button_here'><Image style={{width: '20px', height: '20px'}} src={shareSVG} alt='image_svg' /></Button>
          <Button className='share_button_here'><FontAwesomeIcon icon={faFacebook} /></Button>
          <Button className='share_button_here'><FontAwesomeIcon icon={faInstagram} /></Button>
          <Button className='share_button_here'><FontAwesomeIcon icon={faWhatsapp} /></Button>
          <Button className='share_button_here'><FontAwesomeIcon icon={faTiktok} /></Button>
        </div>
        <div className="card-body details_area">
          <div className='d-flex gap-2'>
            <div className='d-flex justify-content-center align-items-center'><Badge style={{lineHeight: '15px'}} className='price'>RWF {price}</Badge></div>
            <div className='d-flex justify-content-center align-items-center'><Badge className='images'><Image style={{width: '15px'}} src={imageSVG} alt='image_svg' /> {imageUrl.length}</Badge></div>
          </div>
          <div className='title'>{title}</div>
          <div className='d-flex justify-content-between gap-2 mb-2'>
            <div className='d-flex justify-content-center align-items-center gap-1'>
              <Image style={{width: '15px', height: '15px'}} src={starSVG} alt='star_svg' /> 
              <span style={{fontWeight: 700}}> 4.5</span> 
              <span style={{fontSize: '0.6em'}}>{` (150 shared)`}</span>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
              {
                isForSale ? <Badge className='for_sale'> For Sale </Badge> : ''
              }
              {
                isForRent ? <Badge className='for_rent'> For Rent </Badge> : ''
              }
            </div>
          </div>
          <div style={{border: '1px solid #ccc', borderRadius: '7px', padding: '5px'}} className='d-flex justify-content-between'>
            {/* <div className='bedroom'>3 Bedroom</div>
            <div className='bathroom'>2 Bathroom</div>
            <div className='area'>100m<sup>2</sup></div> */}
            <Stack direction="horizontal" gap={3}>
              <div className="p-2 area"><Image style={{width: '15px'}} src={sqmSVG} alt='sqm_svg' /> 3 sqm</div>
              <div className="p-2 ms-auto bathroom">
                <Image style={{width: '15px'}} src={bathroomSVG} alt='bathroom_svg' /> {bathrooms}
              </div>
              <div className="p-2 bedroom">
                <Image style={{width: '15px'}} src={bedroomSVG} alt='bedroom_svg' /> {bedrooms}
              </div>
              <div className="p-2 pool">
              <Image style={{width: '15px'}} src={poolSVG} alt='pool_svg' /> 0
              </div>
            </Stack>
          </div>
          {/* <div className='d-grid gap-2'>
            <Link to='/detail_property'>
              <Button variant="primary" size="lg">
                Detail
              </Button>
            </Link>
          </div> */}
          <div className='d-flex justify-content-between gap-2 mt-2'>
            <div className='d-flex justify-content-center align-items-center gap-1'>
              <Image style={{width: '25px'}} src={require('../../../../../assets/avatar.png')} roundedCircle />
              <span style={{fontSize: '0.5em'}}>Posted by</span>
              <span style={{fontSize: '0.5em', fontWeight: 700, color: '#3524FC'}}> John Doe</span>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Link to='/detail_property'>
                <span style={{
                  textDecoration: 'none',
                  color: '#265733',
                  fontSize: '0.8em',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                  View details
                </span>
                <Image style={{width: '15px', marginRight: '10px'}} src={caretSVG} />
              </Link>
            </div>
          </div>
          {/* <div className='d-flex justify-content-between'>
            <div className='date_post'>12/12/2022</div>
            <div className='author'>By. John Doe</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='view'>1,234 Views</div>
            <div className='save'>Save</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='share'>Share</div>
            <div className='report'>Report</div>
          </div> */}
        </div>
      </div>
    </Col>
  )
}

export default CardProperty