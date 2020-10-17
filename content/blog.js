import contentful from './contentful';

export const getBlogPosts = async () => {
  const entries = await contentful.getEntries({
    content_type: 'blogPost',
  });
  return entries.items.map(({ fields }) => {
    const blogEntryMappedData = {
      ...fields,
      previewImageURL: fields.previewImage
        ? fields.previewImage.fields.file.url
        : null,
    };
    delete blogEntryMappedData.previewImage;
    return blogEntryMappedData;
  });
};
