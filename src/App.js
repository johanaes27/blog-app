import './App.css';
import gatito from "../src/recurs/gatito.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1 className="landing-page__title">Notices Latinoamerica</h1>
        <p className="landing-page__subtitle">Siempre informado</p>
      </header>

      <section className="landing-page__main">
        <article className="landing-page__article">
          <img src={gatito} alt="Imagen de un blog" className="landing-page__article-image" />
          <h2 className="landing-page__article-title" >¡Datos curiosos sobre gatitos que te sorprenderán!</h2>
          <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Los gatitos son unas criaturas adorables llenas de travesuras,
           ronroneos y pelaje suave que nos cautivan con facilidad. Pero más allá de su ternura, existe un mundo fascinante por descubrir sobre estos 
           pequeños felinos. </p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Nacen sordos y ciegos: Al nacer, los gatitos no pueden ver 
           ni oír. Sus ojos y oídos permanecen cerrados durante las dos primeras semanas de vida, y no es hasta la tercera semana que comienzan a 
           desarrollar su audición. Durante este periodo vulnerable, dependen completamente de su madre para alimentarse y cuidarse.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Un olfato increíble: El sentido del olfato de los gatitos 
           es unas 14 veces más sensible que el nuestro. Esto les permite detectar olores que nosotros ni siquiera imaginamos, como las feromonas de 
           otros gatos o la presencia de presas.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Acrobatas natos: Los gatitos son expertos trepadores y 
           saltadores. Su cuerpo flexible y sus almohadillas acolchadas les permiten escalar cualquier superficie con facilidad. Además, poseen 
           un gran sentido del equilibrio que evita caídas.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Les encanta jugar: Son animales muy juguetones. Disfrutan 
           persiguiendo pelotas, jugando con cuerdas y explorando cualquier objeto nuevo que encuentren. El juego es fundamental para su desarrollo 
           físico y mental.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Duermen mucho: Los gatitos necesitan entre 16 y 20 
           horas de sueño al día para crecer y desarrollarse correctamente. A medida que maduran, duermen menos, pero siguen siendo animales 
           bastante dormilones.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Se comunican con la cola: La cola de los gatitos es un 
           importante medio de comunicación. Con ella expresan diferentes emociones, como felicidad, miedo o enfado. También la utilizan para
            mantener el equilibrio y saludar a otros gatos.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Ronronean para curarse: El adorable ronroneo de los 
           gatitos no solo nos enternece, sino que también tiene propiedades curativas. Se ha demostrado que ayuda a reducir el estrés,
           aliviar el dolor y acelerar la cicatrización de heridas.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Son muy independientes: A pesar de que les encanta 
           estar con sus humanos, los gatitos también son muy independientes. Disfrutan de su propio espacio y tiempo a solas.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Cada uno tiene su propia personalidad: Al igual que
            los humanos, los gatitos tienen su propia personalidad. Algunos son más tímidos, otros más extrovertidos, algunos más juguetones,
            otros más tranquilos. Lo importante es conocer y respetar la personalidad de cada gato.</p>
           <p className="landing-page__article-excerpt" style={{ textAlign: 'justify' }}>Nos traen alegría y compañía: Los gatitos son mucho
           más que simples mascotas. Son compañeros de vida que nos brindan alegría, compañía y amor incondicional.</p>

        </article>
      </section>

      <section className="landing-page__subscribe">
        <h2>Suscríbete a nuestro blog</h2>
        <p>Recibe nuevas publicaciones directamente en tu bandeja de entrada.</p>
        <form className="landing-page__subscribe-form">
          <input type="email" placeholder="Correo electrónico" className="landing-page__subscribe-input" />
          <button type="submit" className="landing-page__subscribe-button">Suscribirse</button>
        </form>
      </section>

      <footer className="landing-page__footer">
        <p>&copy; 2024 Tu nombre o el nombre de tu blog</p>
      </footer>
    </div>
  );
}

export default LandingPage;