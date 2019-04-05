import React from "react"
import styled from "styled-components"
import { postGridGutter } from "../utils/consts"
import { mediaMin } from "../utils/helpers"

const respColumn = (props, index, mediaSelect) =>
    mediaSelect(`
  flex: 0 0 ${100.0 / props.columns[index]}%;
  width: ${100.0 / props.columns[index]}%};
`),
  PostGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: ${-postGridGutter}rem;
    > * {
      ${props => respColumn(props, 0, mediaMin.phone)}
    }
    > * {
      ${props => respColumn(props, 1, mediaMin.tablet)}
    }
    > * {
      ${props => respColumn(props, 2, mediaMin.desktop)}
    }
  `

export default PostGrid
