import { request } from "graphql-request";

const PorjectService = {
  getProjects: async () => {
    const projects = await request(
      "https://api-ca-central-1.graphcms.com/v2/ckznuhdcr0ni601xk3ezy8s0d/master",
      `query MyQuery {
            projectsConnection {
            edges {
                node {
                description
                githublink
                id
                title
                isPublic
                coverImage {
                    url
                }
                }
            }
            }
            }
        `
    );

    return projects.projectsConnection.edges;
  },
};

export default PorjectService;
