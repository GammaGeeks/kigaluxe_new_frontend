/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Image, Badge, Tabs, Tab, Table, Pagination } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'

import "./index.scss"

let active = 1;
let items1 = [];
for (let number = 1; number <= 5; number++) {
  items1.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


let active2 = 3;
let items2 = [];
for (let number = 1; number <= 5; number++) {
  items2.push(
    <Pagination.Item key={number} active={number === active2}>
      {number}
    </Pagination.Item>,
  );
}

function SectionOne() {
  const user = JSON.parse(localStorage.getItem('user'))
  // eslint-disable-next-line no-unused-vars
  // const dispatch = useDispatch()

//   const { firstname } = profile

  return (
    <div className='section_1 pt-5'>
      <div className="container">
        <div className='d-flex justify-content-center'>
          <Image src={user && user.profileImg? user.profileImg : require('../../../assets/avatar.png')} roundedCircle />
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <h4>Welcome, {user && user.firstname ? user.firstname : 'user'}</h4>
        </div>
        <div className='d-flex justify-content-center mt-2 gap-2'>
          <h5>{user && user.role ? (<Badge bg='main-color'>Role: {user.role}</Badge>) : ""}</h5>
          <h5>{user && user.role ? (<Badge bg='warning' text='dark'>Pending wallet: {`50,000 Rwf`}</Badge>) : ""}</h5>
          <h5>{user && user.role ? (<Badge bg='success'>Current wallet: {`50,000 Rwf`}</Badge>) : ""}</h5>
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <p>200 shared links | 300 received links</p>
        </div>
        <div>
          <Tabs
            defaultActiveKey="sharedLinks"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="sharedLinks" title="Shared links">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
              <div className='d-flex justify-content-center mt-2'>
                <Pagination size="sm">{items1}</Pagination>
              </div>
            </Tab>
            <Tab eventKey="receivedLinks" title="Received links">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
              <div className='d-flex justify-content-center mt-2'>
                <Pagination size="sm">{items2}</Pagination>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
