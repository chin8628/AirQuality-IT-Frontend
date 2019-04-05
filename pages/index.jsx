import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../comps/Layout'
import SensorCard from '../comps/SensorCard'
import Modal from '../comps/Modal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 360px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  margin-bottom: -2em;
`

const AboutBtn = styled.button`
  display: inline-block;
  cursor: pointer;
  background: none;
  border: none;
  color: #898989;
  font-size: 1em;
  font-family: -apple-system, 'Segoe UI', Roboto, Ubuntu, sans-serif;
`

const Bottom = styled.div`
  box-sizing: border-box;
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;

  img {
    display: block;
    width: 230px;
    margin: 0 auto 1em;
  }
`

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Layout>
      <Container>
        <Content>
          <SensorCard values={[52, 58, 69, 14, 85, 36]} />
        </Content>
        <Bottom>
          <img src="/static/img/itkmitl-logo.png" alt="IT KMITL Logo" />
          <AboutBtn type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
            About this project
          </AboutBtn>
        </Bottom>
      </Container>

      {isModalOpen ? (
        <Modal handleClose={() => setIsModalOpen(false)}>
          <center>
            <h1>Contributors</h1>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              <li>Assoc.Prof. Dr. Panwit Tuwanut</li>
              <li>Boonyarith Piriyothinkul</li>
              <li>Nathan Yiangsupapaanontr</li>
              <li>Nopparut Sae-Lim</li>
              <li>Wiput Poothong</li>
            </ul>
            <p style={{ color: '#b7b7b7' }}>With Material icons and Graph.js</p>
          </center>
        </Modal>
      ) : null}
    </Layout>
  )
}

export default Index
