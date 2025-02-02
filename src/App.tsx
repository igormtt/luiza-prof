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
            <h1>Seu filho no centro do aprendizado</h1>

            <h2>
              Ensino personalizado que desenvolve autonomia, pensamento crítico
              e autoconfiança
            </h2>

            <div className={styles.buttonDiv}>
              <button>Conheça nossa metodologia de ensino</button>
            </div>
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

          <div className={styles.metodologiaIMG}>
            <img src="/kid.jpg" alt="Criança estudando" />
          </div>
        </div>

        {/*** CARDS ***/}

        <div className={styles.cards}>
          <Card
            modalidade="Modalidade On-Line"
            descricao="As aulas online estimulam a autonomia da criança desde cedo, além de desenvolver habilidades tecnológicas essenciais para o futuro. Nessa modalidade as aulas são feitas para despertar o interesse natural da criança, são utilizadas músicas, jogos, histórias e outras atividades dinâmicas que tornam o aprendizado divertido e eficaz."
          />
          <Card
            modalidade="Modalidade Presencial"
            descricao="No atendimento presencial, o vínculo emocional e o conforto do lar potencializam o aprendizado, tornando-o mais acolhedor e significativo. Aprender em um ambiente familiar, onde a criança se sente segura, pode aumentar sua confiança e engajamento, criando uma experiência única e significativa."
          />
        </div>
      </div>

      {/** Aacompanhe o progresso do seu filho **/}
      <div className={styles.childrenPogress}>
        <div className={styles.childrenProgressTitle}>
          <h1>Acompanhe o Progresso do Seu Filho</h1>
        </div>

        <div className={styles.childrenPogressContainer}>
          <div className={styles.childrenProgressImg}>
            <img src="/kid_learning.jpg" alt="Criança americana" />
          </div>

          <div className={styles.childrenProgressText}>
            <p>
              Acompanhe o progresso do seu filho por meio de relatórios
              trimestrais detalhados, que mostram os avanços em leitura,
              escrita, compreensão e outras habilidades essenciais. Esses
              relatórios oferecem uma visão clara do que foi conquistado e das
              áreas que ainda podem ser aprimoradas. Além disso, mantenho um
              canal de suporte exclusivo para esclarecer dúvidas, fornecer
              materiais extras e garantir que o aprendizado continue evoluindo
              entre as aulas.
            </p>
          </div>
        </div>

        <div className={styles.vantagens}>
          <div className={styles.vantagensTitle}>
            <h1>Vantagens de Estudar Inglês Comigo</h1>
          </div>

          <div className={styles.checkboxContainer}>
            <div className={styles.chekboxs}>
              <input type="checkbox"  checked={true} name="" id="" />
              <p> Aulas Personalizadas: Cada aula é feita sob medida para o ritmo e as necessidades do aluno.</p>
            </div>
            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
                <p>Metodologia Interativa: Uso de jogos, músicas e histórias para tornar o aprendizado divertido.</p>
            </div>
            
            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Desenvolvimento de Habilidades: Ensino inglês e também promove autonomia, confiança e pensamento crítico.</p>
            </div>

            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Experiência e Empatia: Com anos de experiência em educação, sei como adaptar meu ensino para atender diferentes necessidades, sempre com paciência e cuidado.</p>
            </div>

            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Flexibilidade de Modalidades: Ofereço aulas online ou presenciais no conforto do lar.</p>
            </div>

            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Ambiente Virtual: Arquivo de interação e registro dos conteúdos e recursos utilizados durante as aulas onlines. Livre acesso aos alunos e responsáveis. </p>
            </div>

            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Canal de Suporte: Comunicação rápida e eficaz via WhatsApp para esclarecer dúvidas e tratar de qualquer outro assunto relacionado ao aprendizado.</p>
            </div>
            
            <div className={styles.chekboxs}>
              <input type="checkbox" checked={true} name="" id="" />
              <p>Avaliação de Progresso Trimestral: Acompanhe a evolução do seu filho em leitura, escrita, compreensão e outras habilidades essenciais</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
