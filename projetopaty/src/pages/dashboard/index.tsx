import { GetServerSideProps } from "next";
import styles from "./styles.module.css"
import Head from "next/head"
import { getSession } from "next-auth/react"
import { Textarea } from "../components/header/textarea"
import { FiShare2 } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"
import { ChangeEvent, FormEvent, useState } from "react"


export default function Dashboard() {
const [input, setInput] = useState("")
const [publicTask, setPublicTask] = useState(false)

function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
    setPublicTask(event.target.checked)

}

function handleRegisterTask( event: FormEvent) {
    event.preventDefault();

    if (input=== "") return;
    alert("TESTE");

}

    return (
        <div className={styles.container}>
            <Head>
                <title>Meu Painel de Tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        <form onSubmit={handleRegisterTask}>
                            <Textarea  placeholder="Digite qual sua tarefa..."
                            value={input}
                            onChange={(event:ChangeEvent <HTMLTextAreaElement>) => 
                            setInput(event.target.value)}/>

                            <div className={styles.checkboxArea}>
                                <input
                                 type="checkbox" 
                                 className={styles.checkbox}
                                 checked={publicTask}
                                 onChange={handleChangePublic}
                                />
                                <label>Deixar tarefa publica?</label>
                            </div>
                            <button className={styles.button} type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>
                <section className={styles.taskContainer}>
                    <h1>Minhas Tarefas</h1>
                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>Publico</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                size={22}
                                color="#3183ff"
                                />
                            </button>
                            </div>

                            <div className={styles.taskContent}>
                                <p>Minha primeira tarefa de exemplo</p>
                                <button className={styles.trashButton}>
                                    <FaTrash
                                    size={24}
                                    color="#ea3140"
                                    />

                                </button>
                            </div>
                    </article>

                </section>
            </main>
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
const session = await getSession({ req })
//console.log(session);

if (!session?.user) {
    // Se não tem usuário vamos direcionar para --/

    return{
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}
    
  return {
    props: {},
  };
};