import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>
      {`
        :root {
          --color-aqi-good: #76c626;
          --color-aqi-moderate: #fcde42;
          --color-aqi-sensitive: #ffa450;
          --color-aqi-unhealthy: #ff5050;
          --color-aqi-very-unhealthy: #c24ae0;
          --color-aqi-harzardous: #6700a6;
        }

        body {
          background: #f7f7f7;
          padding: 0;
          margin: 0;
          font-family: -apple-system, 'Segoe UI', Roboto, Ubuntu, sans-serif;
        }

        canvas {
          background: transparent;
        }
      `}
    </style>
    <style jsx>
      {`
        .layout {
          background: #f7f7f7;
          padding: 0;
          margin: 0;
          fontfamily: -apple-system, 'Segoe UI', Roboto, Ubuntu, sans-serif;
        }
      `}
    </style>
    <div className="layout">{children}</div>
  </>
)

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
