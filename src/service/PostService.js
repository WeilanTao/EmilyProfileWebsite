import { request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

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
            }
          }
        }
      }
    `
    );

    console.log(posts.postsConnection.edges);
    return posts.postsConnection.edges;
  },
};

export default PostService;
