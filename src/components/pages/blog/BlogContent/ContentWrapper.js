import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Column } from 'serverless-design-system'
import dotGridVertical from 'src/assets/images/dot-grid-vertical.png'

const ContentWrapper = styled(Column)`
  pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }

  video {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  p,
  li {
    font-family: 'SoleilBk';
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.63;
    color: #5b5b5b;
  }

  blockquote {
    margin: 0;
    margin-top: 10px;
    position: relative;

    & > p {
      margin-top: 5px;
      font-family: SoleilBk;
      font-size: 24px;
      font-weight: normal;
      font-style: italic;
      line-height: 1.33;
      color: #5b5b5b;
    }

    &:before {
      content: ' ';
      position: absolute;
      height: 39px;
      top: 0;
      width: 20px;
      background: url(${dotGridVertical});
      background-size: cover;
      left: -40px;
    }
  }

  a {
    color: #5b5b5b;
    text-decoration: none;
    border-bottom: 1px solid #fd5750;

    &:hover {
      color: #5b5b5b;
    }
  }

  img {
    object-fit: contain;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Soleil';
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #000000;
    margin-top: 35px;
    margin-bottom: 15px;
    word-wrap: break-word;
  }

  li {
    padding-top: 15px;
    padding-bottom: 8px;
  }

  @media screen and (max-width: 992px) {
    blockquote {
      & > p {
        padding-left: 40px;
      }

      &:before {
        left: 0;
        top: 0;
      }
    }

    iframe {
      width: 100%;
      height: 360px;
    }
  }

  @media screen and (max-width: 415px) {
    iframe {
      width: 100%;
      height: auto;
    }
  }
`

export default class BlogWrapper extends React.Component {
  componentDidMount() {
    const domNode = ReactDOM.findDOMNode(this.ref)
    domNode.querySelectorAll('a > img').forEach(node => {
      const { parentNode } = node
      parentNode.style.border = 0
      node.style.margin = 'auto'
    })
    domNode.querySelectorAll('iframe').forEach(node => {
      node.style.display = 'block'
      node.style.margin = 'auto'
    })
    domNode.querySelectorAll('code.hljs').forEach(code => {
      let number = 1
      const zero = `<a class="line">${number++}</a>`
      code.innerHTML =
        zero +
        code.innerHTML.replace(/\n/g, () => `\n<a class="line">${number++}</a>`)
    })
  }

  render() {
    return (
      <ContentWrapper
        ref={ref => {
          this.ref = ref
        }}
        {...this.props}
      />
    )
  }
}
