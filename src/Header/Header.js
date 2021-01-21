import Navigation from './Navigation/Navigation'

function Header(props) {
     return (
          <>
               <h1>{props.title}</h1>
               <Navigation />
          </> 
     )
}

export default Header