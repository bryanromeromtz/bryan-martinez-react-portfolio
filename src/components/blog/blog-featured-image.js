import React from 'react'

const BlogFeaturedImage = (props) => {
  if (!props.featuredImage) {
    return null;
  }
  return (
    <div className="featured-image-wrapper">
      <img src={props.featuredImage} />
    </div>
  );
}

export default BlogFeaturedImage;
