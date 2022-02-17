import { request } from "graphql-request";

const ResumeService = {
  getResume: async () => {
    const resmeurl = await request(
      "https://api-ca-central-1.graphcms.com/v2/ckznuhdcr0ni601xk3ezy8s0d/master",
      `query MyQuery {
        resumesConnection {
          edges {
            node {
              resume {
                url
              }
            }
          }
        }
      }
        `
    );

    return resmeurl.resumesConnection.edges;
  },
};

export default ResumeService;
