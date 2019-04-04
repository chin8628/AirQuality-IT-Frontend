import React from 'react'
import styled from 'styled-components'
import Layout from '../comps/Layout'
import SensorCard from '../comps/SensorCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: 0px 0px 20px 0px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  margin-bottom: 2em;
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
  padding-bottom: 2em;
  text-align: center;

  img {
    display: block;
    width: 230px;
    margin: 0 auto 1em;
  }
`

const Index = () => (
  <Layout>
    <Container>
      <Content>
        <SensorCard />
      </Content>
      <Bottom>
        <img src="/static/img/itkmitl-logo.png" alt="IT KMITL Logo" />
        <AboutBtn type="button">About this project</AboutBtn>
      </Bottom>
    </Container>
  </Layout>
)

export default Index
