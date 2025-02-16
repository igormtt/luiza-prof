// import Container from "./components/Container";
import Header from "./components/Header";
import styles from "./App.module.css";
import Card from "./components/Card";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { LuClipboardList } from "react-icons/lu";
import { FormEvent } from "react";

export default function App() {
  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const tela = window.innerWidth;

  return (
    <>
      <Header />

      <div className={styles.firstSec}></div>

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
            <img src="/newcolor.png" alt="Criança estudando" />
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
            <img src="/childAndMother.jpg" alt="Criança americana" />
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
              {window.innerWidth > 800 ? (
                <div className={styles.list}>
                  <img src="checkbox-icon-lg.png" />
                </div>
              ) : (
                <></>
              )}
              <p className={styles.checkTexts}>
                {" "}
                {tela <= 800
                  ? `- Aulas Personalizadas: Cada aula é feita sob medida para o ritmo
                e as necessidades do aluno.`
                  : `Aulas Personalizadas: Cada aula é feita sob medida para o ritmo
                e as necessidades do aluno.`}
              </p>
            </div>
            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Metodologia Interativa: Uso de jogos, músicas e histórias para
                tornar o aprendizado divertido.`
                  : `Metodologia Interativa: Uso de jogos, músicas e histórias para
                tornar o aprendizado divertido.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `-  Desenvolvimento de Habilidades: Ensino inglês e também promove
                autonomia, confiança e pensamento crítico.`
                  : ` Desenvolvimento de Habilidades: Ensino inglês e também promove
                autonomia, confiança e pensamento crítico.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Experiência e Empatia: Com anos de experiência em educação, sei
                como adaptar meu ensino para atender diferentes necessidades,
                sempre com paciência e cuidado.`
                  : `Experiência e Empatia: Com anos de experiência em educação, sei
                como adaptar meu ensino para atender diferentes necessidades,
                sempre com paciência e cuidado.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Flexibilidade de Modalidades: Ofereço aulas online ou
                presenciais no conforto do lar.`
                  : `Flexibilidade de Modalidades: Ofereço aulas online ou
                presenciais no conforto do lar.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Ambiente Virtual: Arquivo de interação e registro dos conteúdos
                e recursos utilizados durante as aulas onlines. Livre acesso aos
                alunos e responsáveis.`
                  : `Ambiente Virtual: Arquivo de interação e registro dos conteúdos
                e recursos utilizados durante as aulas onlines. Livre acesso aos
                alunos e responsáveis.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Canal de Suporte: Comunicação rápida e eficaz via WhatsApp para
                esclarecer dúvidas e tratar de qualquer outro assunto
                relacionado ao aprendizado.`
                  : `Canal de Suporte: Comunicação rápida e eficaz via WhatsApp para
                esclarecer dúvidas e tratar de qualquer outro assunto
                relacionado ao aprendizado.`}
              </p>
            </div>

            <div className={styles.chekboxs}>
              <div className={styles.list}>
                {window.innerWidth > 800 ? (
                  <div className={styles.list}>
                    <img src="checkbox-icon-lg.png" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className={styles.checkTexts}>
                {tela <= 800
                  ? `- Avaliação de Progresso Trimestral: Acompanhe a evolução do seu
                filho em leitura, escrita, compreensão e outras habilidades
                essenciais`
                  : `Avaliação de Progresso Trimestral: Acompanhe a evolução do seu
                filho em leitura, escrita, compreensão e outras habilidades
                essenciais`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUEM SOU EU  */}

      <div className={styles.quemSouEu}>
        <div className={styles.quemSouEuTitle}>
          <h1>Quem sou eu?</h1>
        </div>

        <div className={styles.quemSouEuContent}>
          <p>
            Oi! Eu sou a professora Luíza, formada em Letras - Licenciatura pela
            PUCRS e pós-graduada em Metodologias de Ensino, também pela PUCRS.
            Tenho quase 10 anos de experiência com alfabetização bilíngue e sou
            apaixonada por descobrir novas formas de tornar o aprendizado mais
            acessível e prazeroso para cada aluno. Acredito que cada criança
            aprende de um jeito e no seu próprio tempo. Meu objetivo é criar um
            ambiente leve e acolhedor, onde elas se sintam seguras para aprender
            e se desenvolver com confiança. Se você busca um acompanhamento
            personalizado e feito com carinho, estou aqui para ajudar!
          </p>
        </div>
      </div>

      {/* FORMULARIO PARA CONTATO */}

      <ChakraProvider resetCSS={false}>
        <div className={styles.contactForm}>
          <div className={styles.formTitle}>
            <h1>Entre em contato!</h1>
          </div>

          <form onSubmit={sendMessage} className={styles.formControl}>
            <div className={styles.form}>
              <FormControl className="formControl" border="gray">
                <FormLabel>Email:</FormLabel>
                <Input focusBorderColor="#464646" type="email" />

                <FormControl border="gray">
                  <FormLabel>Nome:</FormLabel>
                  <Input focusBorderColor="#464646" type="nome" />
                </FormControl>

                <FormControl border="gray">
                  <FormLabel>Mensagem:</FormLabel>
                  <Input focusBorderColor="#464646" type="mensagem" />
                </FormControl>

                <button className={styles.formBtn}>
                  Enviar
                  <LuClipboardList stroke="#FFFFFF" />
                </button>
              </FormControl>
            </div>
          </form>
        </div>
      </ChakraProvider>
    </>
  );
}
