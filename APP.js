{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.19041}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 app.js\par
import GithubAPI from './GithubAPI';\par
// import GithubGraphQL from './GithubGraphQL'\par
// import GithubAPI from './GithubAPI';\par
import GithubGraphQL from './GithubGraphQL'\par
\par
function App() \{\par
  return (\par
    <div className="App">\par
      <GithubAPI />\par
      \{ <GithubGraphQL /> \}\par
      \{ <GithubAPI /> \}\par
      <GithubGraphQL />\par
    </div>\par
  );\par
\}\par
\par
export default App;\par
}
 