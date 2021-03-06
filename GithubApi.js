{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Riched20 10.0.19041}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 GithubAPIjs\par
import \{ useEffect, useState \} from 'react'\par
//import axios from 'axios'\par
import axios from 'axios'       // for API Calling\par
\par
\par
const api = axios.create(\{\par
    baseURL: '{{\field{\*\fldinst{HYPERLINK https://api.github.com }}{\fldrslt{https://api.github.com\ul0\cf0}}}}\f0\fs22 '\par
\})\par
\par
 function GithubAPI() \{\par
     const [userData, setUserData] = useState(null)\par
     const [userRepos, setUserRepos] = useState(null)\par
\par
        // Immediately Invoked Function Expression - IIFE\par
        (async () => \{\par
            const \{ data: user \} = await api.get('/users/uqutub')\par
           // const \{ data: user \} = await api.get('/users/uqutub')           // user Data\par
            console.log('user ', user)\par
            setUserData(user);      // update state of the userData\par
\par
            const \{ data: repo \} = await api.get('/users/uqutub/repos')\par
            console.log('repos: ', repo)\par
           // setUserRepos(repo);     // update state of the userRepos\par
            setUserRepos(repo);     // update state of the userRepos        // user repos\par
        \})()\par
        return (\par
            <div>\par
                User Data\par
                <pre>\par
                    \{userData && JSON.stringify(userData, null, 4)\}\par
                </pre>\par
                <hr />\par
                User Repo Data\par
                <pre>\par
                    \{userRepos && JSON.stringify(userRepos, null, 4)\}\par
                </pre>\par
                </div>)\par
\par
    \} \par
      \par
}
 