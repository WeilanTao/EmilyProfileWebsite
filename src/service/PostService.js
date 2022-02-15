import { request } from "graphql-request";

const PostService = {
  getPosts: async () => {
    const posts = await request(
      "https://api-ca-central-1.graphcms.com/v2/ckznuhdcr0ni601xk3ezy8s0d/master",
      `query MyQuery {
        postsConnection {
          edges {
            node {
              content
              id
              isPublic
              title
              createdAt
              photo {
                url
              }
            }
          }
        }
      }      
    `
    );

    return posts.postsConnection.edges;
  },
};

export default PostService;
