import  { Post } from "./componentes/Post";
// import { Post } from "./post"
import { Header } from "./componentes/header";
import styles from './app.module.css'
// import css
import './global.css';
import { Sidebar } from "./componentes/sidebar";



function App() {

  return (
    <div>
      
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author='Julia Santos'
            content='Adoro comer pastel de pizza com caldo de cana'    


          />
        </main>
      </div>
    
    </div>
    
      
  )
}

export default App


//componente é uma função que retorna HTML
// todos os componentes react, precisam ter uma extensão .jsx
// jsx = javascript e xml