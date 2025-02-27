import { ReactNode, useRef, useState } from "react";
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
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  function sendMessage() {
    const message = `Olá! Me chamo ${name}, vim pelo seu site e gostaria de conversar sobre as aulas!
    \n\n
    
    Meu e-mail: ${email};
    Assunto: ${mensagem}
    
    `;
    const whatsappURL = `https://wa.me/555184874339?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  }

  const tela = window.innerWidth;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setmensagem] = useState("");

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
            <img src="/Kids_funny.jpg" alt="Criança estudando" />
          </div>
        </div>

        {/*** CARDS ***/}

        <div className={styles.cards}>
          <Card
            modalidade="Modalidade On-Line"
            descricao="Nessa modalidade as aulas são feitas para despertar o interesse natural dos alunos, estimulando a autonomia e a independência nos estudos. Além disso, contribui para o desenvolvimento de habilidades tecnológicas essenciais para o futuro. Para tornar o ensino mais atrativo e envolvente, são utilizadas diversas ferramentas interativas, como músicas, jogos, histórias, trechos de filmes e séries. Dessa forma, o aprendizado se torna mais dinâmico, prazeroso e eficiente."
          />
          <Card
            modalidade="Modalidade Presencial"
            descricao="No atendimento presencial, o vínculo emocional e o ambiente familiar desempenham um papel fundamental no desenvolvimento cognitivo. O conforto do lar potencializa o aprendizado, tornando-o mais acolhedor e significativo. Estudar em um espaço onde o aluno se sente seguro e à vontade fortalece a confiança e o engajamento, proporcionando uma experiência única e transformadora."
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
            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
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
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* QUEM SOU EU  */}

      <div id="hoIam" className={styles.quemSouEu}>
        <div className={styles.quemSouEuTitle}>
          <h1>Quem sou eu?</h1>
        </div>

        <div className={styles.wrapper}>
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

          <div className={styles.photo}>
              <img src="/Sobre.jpeg" alt="" />
          </div>
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
                <Input
                  focusBorderColor="#464646"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <FormControl border="gray">
                  <FormLabel>Nome:</FormLabel>
                  <Input
                    focusBorderColor="#464646"
                    type="nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>

                <FormControl border="gray">
                  <FormLabel>Mensagem:</FormLabel>
                  <Input
                    focusBorderColor="#464646"
                    type="mensagem"
                    onChange={(e) => setmensagem(e.target.value)}
                    value={mensagem}
                  />
                </FormControl>

                <button type="submit" className={styles.formBtn}>
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
