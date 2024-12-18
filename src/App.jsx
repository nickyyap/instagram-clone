import { Col, Row, Container, Tabs, Tab } from 'react-bootstrap';
import IconButton from './components/IconButton';
import ProfileHeader from './components/ProfileHeader';
import { createContext, useState } from 'react';
import { PROFILE_DATA } from './data';
import ImageGrid from './components/ImageGrid';
import ImageList from './components/ImageList';
import './App.css';
import AddPostModal from './components/AddPostModal';

export const ProfileContext = createContext(null);

const imageData = [
  {
    src: "https://sig1.co/logo-1",
    title: "Meet-ups",
  },
  {
    src: "https://sig1.co/logo-1",
    title: "Reviews",
  },
  {
    src: "https://sig1.co/logo-1",
    title: "Shoutouts",
  },
  {
    src: "https://sig1.co/logo-1",
    title: "Hiring",
  },
  {
    src: "https://sig1.co/logo-1",
    title: "Events",
  },
  {
    src: "https://sig1.co/logo-1",
    title: "FAQs",
  },
];

function App() {
  const [key, setKey] = useState('posts');

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}>

          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-square" onClick={openModal} />
          <IconButton className="bi bi-person-circle" />
          <IconButton className="bi bi-list" isBottom />

        </Col>

        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <ImageList images={imageData} />
            <Tabs
              id="controlled-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="custom-tabs mb-3 d-flex justify-content-center">
              <Tab
                eventKey="posts"
                title={
                  <span>
                    <i className="bi bi-grid-3x3" style={{ fontSise: "10px" }}></i>
                    <span className="ms-2">POSTS</span>
                  </span>
                }>
                <ImageGrid />
              </Tab>
              <Tab
                eventKey="reels"
                title={
                  <span>
                    <i className="bi bi-film" style={{ fontSise: "10px" }}></i>
                    <span className="ms-2">REELS</span>
                  </span>
                }>
              </Tab>
              <Tab
                eventKey="tagged"
                title={
                  <span>
                    <i className="bi bi-person-square" style={{ fontSise: "10px" }}></i>
                    <span className="ms-2">TAGGED</span>
                  </span>
                }>
              </Tab>
            </Tabs>
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  )
}

export default App
