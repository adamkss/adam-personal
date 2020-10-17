const BlogPostPreview = ({ title, previewText, previewImageURL }) => {
  return (
    <article>
      <h1>{title}</h1>
      <span>{previewText}</span>
      <img src={previewImageURL} width="300" />
    </article>
  );
};

export default BlogPostPreview;
