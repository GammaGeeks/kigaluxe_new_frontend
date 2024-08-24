/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row } from 'react-bootstrap'
import moment from 'moment'

import './index.scss'

function FooterPart() {
  return (
  <div className="footer">
    <Container>
      <footer className="py-5">
        <Row>
          <div className="col mb-3 justify-content-around align-content-center gap-2">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img className="bi me-2" src={require('../../assets/logo.png')} alt="Logo"/>
            </a>
            <p className="text-muted">&copy; {moment().format('YYYY')} KigaluXe, Ltd. All rights reserved.</p>
          </div>

          <div className="col mb-3">

          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column gap-2">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column gap-2">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <ul className="nav flex-column gap-2">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faInstagram} size='2x' color='#F9F871'/></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faFacebook} size='2x' color='#F9F871' /></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faTiktok} size='2x' color='#F9F871' /></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FontAwesomeIcon icon={faTwitter} size='2x' color='#F9F871' /></a></li>
            </ul>
          </div>
        </Row>
      </footer>
    </Container>
  </div>
  )
}

export default FooterPart