import React from "react";
import style from './Home.module.css';

const Home = () => {
    return (
        <section className={style.home_container}>
            <header className={style.header}>
                <h1>Bem-vindo à <span>Nice Lingerie</span></h1>
                <p>Sua loja de roupas!</p>
                <img src="./Decoracao-de-loja.png" alt="Banner da loja" className={style.bannerImage}/>
            </header>

            <section className={style.featuredSection}>
                <h2>Destaques</h2>
                <img src="./Decoracao-de-loja.png" alt="Produtos da loja" className={style.featuredImage}/>
                <p>Confira nossos produtos mais populares e as últimas tendências em moda.</p>
                <a href="/produtos" className={style.button}>Veja mais</a>
            </section>

            <section className={style.newArrivalsSection}>
                <h2>Novidades</h2>
                <img src="./Decoracao-de-loja.png" alt="Novidades da loja" className={style.newArrivalsImage}/>
                <p>Explore as últimas adições à nossa coleção. Sempre algo novo para descobrir!</p>
                <a href="/novidades" className={style.button}>Explore Novidades</a>
            </section>

            <section className={style.saleSection}>
                <h2>Promoções</h2>
                <img src="./Decoracao-de-loja.png" alt="Promoções da Loja" className={style.saleImage}/>
                <p>Aproveite descontos imperdíveis em itens selecionados. Não perca!</p>
                <a href="/promocoes" className={style.button}>Ver Promoções</a>
            </section>

            <footer className={style.footer}>
                <p>&copy; 2024 Nice Lingerie. Todos os direitos reservados.</p>
            </footer>
        </section>
    );
};

export default Home;