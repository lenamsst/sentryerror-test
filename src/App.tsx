import Routes from "./Routes";
import GlobalStyles from "./assets/styles/Global"
import * as Sentry from "@sentry/react"

function App() {
  return (
    <>   
     <GlobalStyles/>
     <Routes />  
     <button type="button" onClick={() => {
       throw Error("Oops, deu algo de errado");
     }}>
       Não clique neste botão
     </button>
   </>
  );
}

export default Sentry.withProfiler(App);
