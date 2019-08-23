import styled from 'styled-components'
import { Row } from 'serverless-design-system'
import breadcrumbArrow from 'src/assets/images/pages/docs/breadcrumb-arrow.svg'

export default styled(Row)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .breadcrumbs {
    margin: 0;
    padding: 0;
    margin-top: 6px;
  }
  .item {
    display: inline-flex;
    position: relative;
    a {
      text-decoration: none;
      border: none !important;
    }
    &:after {
      content: url(${breadcrumbArrow});
      color: #a1a1a1;
      width: 20px;
      margin: 2px 2px;
      display: inline-flex;
      justify-content: center;
    }
    &:first-of-type {
      margin-left: 0px;
    }
    &:last-of-type:after {
      content: '';
    }
  }
`
