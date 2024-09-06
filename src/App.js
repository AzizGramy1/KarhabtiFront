import Contenue from "./componentBackOffice/Contenue";
import Footer from "./componentBackOffice/Footer";
import NavBar from "./componentBackOffice/NavBar";
import SideBar from "./componentBackOffice/SideBar";



function App() {
  return (
    <div className='wrapper'>
      <NavBar /> {/* Appel de la NavBar */}
      <SideBar /> {/* Appel de la SideBar */}
      
      {/* Tu peux ajouter d'autres composants ici si nécessaire */}

      <div className='content'>
       
         <Contenue /> {/* Exemple d'ajout de composant */}
        
      </div>

      <div className="footer">



      </div>

      
    

    </div>

    

  

    
  );

  
}

export default App;
 