import React from "react"
import styled from "styled-components"
import { mediaMin } from "../utils/helpers"
import { postGridGutterLarger } from "../utils/consts"

export const LyricTranslator = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${postGridGutterLarger}rem;
`

export const LyricTranslatorPanel = styled.div`
  padding: 0 ${postGridGutterLarger}rem;
  flex: 0 0 100%;
  width: 100%;
  ${mediaMin.tablet(`
    flex: 0 0 50%;
    width: 50%;
  `)}
`
