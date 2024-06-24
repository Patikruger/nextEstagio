import styles from "./styles.module.css"
import Head from "next/head"
export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Meu Painel de TarefasS</title>
        </Head>

        <h1>Página Painel</h1>
        </div>
        
    )
}