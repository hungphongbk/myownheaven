import React from "react"
import PropTypes from "prop-types"
import One from "./PostItemOne"

const components = [null, One]

const PostItem = props => React.createElement(components[props.itemType], props)
PostItem.propTypes = {
  itemType: PropTypes.number.isRequired,
}

export default PostItem
