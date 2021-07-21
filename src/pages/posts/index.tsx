import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title> Posts | Ignews </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quisquam. Deleniti ducimus totam, ad qui nulla obcaecati cupiditate doloremque minus officiis molestias eius illum ipsam est. Distinctio voluptatum qui alias.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quisquam. Deleniti ducimus totam, ad qui nulla obcaecati cupiditate doloremque minus officiis molestias eius illum ipsam est. Distinctio voluptatum qui alias.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quisquam. Deleniti ducimus totam, ad qui nulla obcaecati cupiditate doloremque minus officiis molestias eius illum ipsam est. Distinctio voluptatum qui alias.</p>
                    </a>
                </div>
            </main>
        </>
    );
}