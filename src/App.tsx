// import Container from "./components/Container";
import Header from "./components/Header";
import styles from "./App.module.css";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.firstSec}>
        <div className={styles.topGroup}>
          <div className={styles.textsTop}>
            <h1>Seu filho no centro do aprendizado:</h1>

            <h2>
              Ensino personalizado que desenvolve autonomia, pensamento crítico
              e autoconfiança
            </h2>
          </div>
        </div>
      </div>

      {/* METODOLOGIA DE ENSINO */}

      <div className={styles.metodologiaDeEnsino}>
        <div className={styles.title}>
          <h1>Metodologia de Ensino</h1>
        </div>

        <div className={styles.metodologiaDesc}>
          
          <div className={styles.desc1}>
            <h3>Inglês que faz sentido, aprendizado que transforma.</h3>

            <p>
              Seu filho vai aprender inglês com um objetivo claro:{" "}
              <strong>se comunicar com confiança no mundo real.</strong> Minhas
              aulas são personalizadas, levando em conta as necessidades
              específicas de cada aluno, respeitando seu ritmo e estilo de
              aprendizagem. Aqui, o ensino vai além do idioma, o desenvolvimento
              cognitivo acontece de maneira
              <strong> natural e significativa</strong>, sempre conectando o
              aprendizado com a realidade da criança. <br />
              <br /> As aulas são dinâmicas, interativas e cheias de estímulos
              para despertar o interesse e o prazer em aprender inglês. Mais do
              que aprender um idioma, seu filho desenvolverá habilidades
              essenciais para a vida, como autonomia, pensamento crítico e
              autoconfiança.{" "}
              <strong>
                Comigo, ele não apenas aprende inglês, mas também descobre o
                poder de se expressar no mundo
              </strong>
            </p>
          </div>

          {/*** CARDS ***/}

          <div className={styles.cards}>
            <Card
              modalidade="Modalidade on-line"
              descricao="As aulas online estimulam a autonomia da criança desde cedo, além de desenvolver habilidades tecnológicas essenciais para o futuro. Nessa modalidade as aulas são feitas para despertar o interesse natural da criança, são utilizadas músicas, jogos, histórias e outras atividades dinâmicas que tornam o aprendizado divertido e eficaz.
"
            />
            <Card
              modalidade="Modalidade presencial"
              descricao="No atendimento presencial, o vínculo emocional e o conforto do lar potencializam o aprendizado, tornando-o mais acolhedor e significativo. Aprender em um ambiente familiar, onde a criança se sente segura, pode aumentar sua confiança e engajamento, criando uma experiência única e significativa.
"
            />
          </div>
        </div>
      </div>
    </>
  );
}
