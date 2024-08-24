import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CardProperty from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { RingLoader } from '../../../Loaders'

import { propertiesAction } from '../../../../redux/actions'

function Listings() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(propertiesAction.fetchAllProperties(1, 4))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const properties = useSelector(state => state.properties)
  
  // eslint-disable-next-line no-unused-vars
  const { listOfProperties, Next, Prev, getProperties } = properties


  // console.log(properties);
  

  const nextPagination = () => {
    const nextPage = Next.page
    console.log('NextPage', nextPage);
    if(nextPage) dispatch(propertiesAction.fetchAllProperties(nextPage, 12));
  };

  const prevPagination = (e) => {
    const prevPage = Prev.page
    console.log('PrevPage', prevPage);
    if(prevPage) dispatch(propertiesAction.fetchAllProperties(prevPage, 12))
  };
  return (
  <>
    <Row>
      {
        getProperties.loading ? (
          <RingLoader height="80" width="80" />
        ) : (
          properties && listOfProperties ? listOfProperties.map((item, key) => {
            return (
              <CardProperty property={item} key={key} />
            )
          }) : ''
        )
      }
      {/* <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty />
      <CardProperty /> */}
    </Row>
    <Row>
      <div className="col-12 d-flex justify-content-center">
        <button className="btn btn-primary mx-1" onClick={prevPagination}>Prev</button>
        <button className="btn btn-primary mx-1" onClick={nextPagination}>Next</button>
      </div>
    </Row>
  </>
  )
}

export default Listings