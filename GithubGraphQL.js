{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Riched20 10.0.19041}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 // import \{ useEffect \} from 'react'\par
// import axios from 'axios'\par
\par
// const api = axios.create(\{\par
//     baseURL: '{{\field{\*\fldinst{HYPERLINK https://api.github.com }}{\fldrslt{https://api.github.com\ul0\cf0}}}}\f0\fs22 ',\par
//    // baseURL: '{{\field{\*\fldinst{HYPERLINK https://api.github.com }}{\fldrslt{https://api.github.com\ul0\cf0}}}}\f0\fs22 ',      // Github\par
//     headers: \{\par
//         Authorization: `bearer $\{process.env.REACT_APP_GITHUB_ACCESS_TOKEN\}`\par
//        // Authorization: `bearer $\{process.env.REACT_APP_GITHUB_ACCESS_TOKEN\}`,  // access token\par
//     \}\par
// \});\par
\par
//  function GithubAPI() \{\par
//     // \}\par
\par
//     const fetchData_ql = async (organizationName) => \{\par
\par
//         const QUERY_ORGANIZATION = `query queryOrganization($organizationName: String!)\{\par
//             organization(login: $organizationName) \{\par
//                 name\par
//  function GithubAPI() \{\par
//             \}\par
//         \}`;\par
\par
//        // const res = await api.post('/graphql', \{ query: QUERY_ORGANIZATION, variables: \{ organizationName \} \})\par
//         const res = await api.post('/graphql', \{\par
//             query: QUERY_ORGANIZATION,\par
//             variables: \{\par
//                 organizationName\par
//             \}\par
//         \})\par
//         console.log('GraphQL Response: ', res);\par
//     \}\par
\par
//     const addStart = async(repositoryId) => \{\par
//         const MUTATION_ADD_START = `mutation addStart($repositoryId: ID!) \{\par
//             addStar(input: \{starrableId: $repositoryId\}) \{\par
//     const addStart = async (repositoryId) => \{\par
//         const MUTATION_ADD_START = mutation AddStarToMyRepo($organizationName: ID!) \{\par
//             addStar(input: \{starrableId: $organizationName\}) \{\par
//                 starrable \{\par
//                     viewerHasStarred\par
//                 \}\par
//             \}\par
//         \}`;\par
\par
//         const res = await api.post('/graphql', \{ query: MUTATION_ADD_START, variables: \{ repositoryId \} \})\par
Github GraphQL\par
//         console.log('GraphQL Response: ', res);\par
//         const \{ data: \{ data \} \} = await api.post('/graphql', \{\par
//             variables: \{\par
//                 abc: repositoryId\par
//             \},\par
//             query: MUTATION_ADD_START,\par
//         \})\par
//         console.log('GraphQL Response: ', data);\par
//     \}\par
\par
//     useEffect(() => \{\par
//         fetchData_ql("qutbITech")\par
//         // fetchData_ql("qutbITech")\par
//         addStart(' MDEwOlJlcG9zaXRvcnkzODc1MTIzNjA=')\par
//     \}, [])\}\par
//     export default GithubAPI\par
}
 