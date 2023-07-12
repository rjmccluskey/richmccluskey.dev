import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `./projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    url: {
      type: 'string',
    },
    repository: {
      type: 'string',
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
});
