import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import './index.scss'
import FormInput from '../../../Form/FormInput'
import FormCheck from '../../../Form/FormCheck'
import FormSelect from '../../../Form/FormSelect'
import location2SVG from '../../../../assets/svg/card/location_2.svg'
import homeSVG from '../../../../assets/svg/card/home.svg'
import dollarSVG from '../../../../assets/svg/card/dollar_sign.svg'
import resizeSVG from '../../../../assets/svg/card/resize.svg'


function Search() {
  return (
    <Col className='mt-4 property_search'>
      <div className='d-flex flex-column px-3'>
        <div className='d-flex'>
          <h4 className='search_title_2'>Advanced Search</h4>
        </div>
        <Row className='d-flex justify-content-around align-content-center px-2'>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={location2SVG} /><span className='form_title'>Location</span></span>
            <FormInput
              name="location"
              label="Location"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={homeSVG} /><span className='form_title'>Property Type</span></span>
            {/* <FormInput
              name="property_type"
              label="Property type"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            /> */}
            <FormSelect
              name='property_type'
              label='Property Type'
              options={[
                'Residential',
                'Appartment',
                'Villa',
                'Condo',
                'Single Family',
                'Multi-Family',
                'Other',
              ]}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={dollarSVG} /><span className='form_title'>Price Range</span></span>
            {/* <FormInput
              name="price_range"
              label="Price Range"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            /> */}
            <FormSelect
              name='price_range'
              label='Price Range'
              options={[
                'Any',
                '10 - 20 million RWF',
                '20 - 100 million RWF',
                '100 - 200 million RWF',
                '200+',
              ]}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={resizeSVG} /><span className='form_title'>Property Size</span></span>
            <FormSelect
              name='property_size'
              label='Property Size'
              options={[
                'Any',
                '25 - 70 sqm',
                '70 - 100 sqm',
                '100 - 150 sqm',
                '150+',
              ]}
            />
            {/* <FormInput
              name="location"
              label="Property Size"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            /> */}
          </Col>
        </Row>
        <div className='d-flex'>
          <h4 className='search_title_2'>Would you like more filter?</h4>
        </div>
        <Row>
          <Col className='pb-4'>
            <div className='d-flex justify-content-start gap-2'>
              <FormCheck
                name='residential'
                label='Residential House'
                type='checkbox'
              />
              <FormCheck
                name='commercial'
                label='Commercial'
                type='checkbox'
              />
              <FormCheck
                name='office'
                label='Office'
                type='checkbox'
              />
            </div>
            <div className='d-flex justify-content-start gap-2'>
              <FormCheck
                variant='tertiary-color'
                name='appartment'
                label='Appartment'
                type='checkbox'
              />
              <FormCheck
                variant='tertiary-color'
                name='villa'
                label='Villa'
                type='checkbox'
              />
              <FormCheck
                variant='tertiary-color'
                name='land'
                label='Land'
                type='checkbox'
              />
              <FormCheck
                variant='tertiary-color'
                name='cottage'
                label='Cottage'
                type='checkbox'
              />
            </div>
          </Col>
          <Col>
            <div className='d-grid'>
              <Button variant='tertiary-color'>Search</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Search