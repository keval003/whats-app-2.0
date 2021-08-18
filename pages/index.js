import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Whatsapp 2.0 by Keval</title>
                <meta
                    name="description"
                    content="This is a one on one chat application with privacy"
                />
                <link rel="icon" href="/icon.png" />
            </Head>
            <h1>Lets Build whatsapp 2.0</h1>
        </div>
    );
}
