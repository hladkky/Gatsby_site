/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql(`
        query {
            allCockpitItems {
                nodes {
                    cockpitId
                    id
                }
            }
        }
    `);

    data.allCockpitItems.nodes.forEach(node => {
        const slug = node.cockpitId;
        const id = node.id;
        actions.createPage({
            path: slug,
            component: require.resolve('./src/Templates/singleItem.tsx'),
            context: {
                id
            }
        })
    });
};