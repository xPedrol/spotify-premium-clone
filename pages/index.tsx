import type {NextPage} from 'next';
import styles from '../styles/Index.module.scss';
import Navbar from "../components/Navbar/Navbar";
import {plans} from "../constants/plans";

const Home: NextPage = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.banner}>
                <div className={styles.bannerContainer}>
                    <div className={styles.bannerText}>
                        <h1 className={styles.bannerTextH}>Tá acabando: 3 meses de Premium por R$ 0,00</h1>
                        <p className={styles.bannerTextP}>Curta músicas sem anúncios, modo offline e muito mais. Cancele
                            quando quiser.</p>
                        <br/>
                        <p className={styles.bannerTextP}>A oferta termina em 7d: 11h: 18min.</p>
                        <div className={styles.bannerButtons}>
                            <button className={styles.freeMonthsBtn}>Aproveite 3 meses grátis</button>
                            <button className={styles.plansBtn}>Ver planos</button>
                        </div>
                        <div className={styles.bannerFooter}>
                            <p className={styles.bannerFooterP}>
                                Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições.
                                Disponível apenas para quem nunca usou o Premium. A oferta termina em 11/09/2022.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bannerImg}>
                        <img src={'https://i.scdn.co/image/ab678e040000ed3a3fd916d6bf69a2028dadff6b'} alt={'banner'}/>
                    </div>
                </div>
            </div>
            <main className={styles.container}>
                <div className={styles.premium}>
                    <h1 className={styles.premiumH}>Por que ser Premium?</h1>
                    <div className={styles.premiumAdvs}>
                        <div className={styles.premiumAdv}>
                            <img className={styles.premiumAdvImg}
                                 src={'https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f'}
                                 alt={'premium adv'}/>
                            <h4 className={styles.premiumAdvH}>Modo offline.</h4>
                            <p className={styles.premiumAdvP}>Ouça música onde estiver.</p>
                        </div>
                        <div className={styles.premiumAdv}>
                            <img className={styles.premiumAdvImg}
                                 src={'https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137'}
                                 alt={'premium adv'}/>
                            <h4 className={styles.premiumAdvH}>Ouça músicas sem anúncios.</h4>
                            <p className={styles.premiumAdvP}>Curta música, sem parar.</p>
                        </div>
                        <div className={styles.premiumAdv}>
                            <img className={styles.premiumAdvImg}
                                 src={'https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67'}
                                 alt={'premium adv'}/>
                            <h4 className={styles.premiumAdvH}>Ouça o que quiser.</h4>
                            <p className={styles.premiumAdvP}>Mesmo no celular ou tablet.</p>
                        </div>
                        <div className={styles.premiumAdv}>
                            <img className={styles.premiumAdvImg}
                                 src={'https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012'}
                                 alt={'premium adv'}/>
                            <h4 className={styles.premiumAdvH}>Troque de música o quanto quiser.</h4>
                            <p className={styles.premiumAdvP}>Pule quando quiser.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.plans}>
                    <div className={styles.plansContent}>
                        <div className={styles.plansHeader}>
                            <h1 className={styles.plansHeaderH}>Escolha seu plano Premium</h1>
                            <p className={`${styles.premiumAdvP} ${styles.plansHeaderP}`}>Ouça sem limites no seu
                                celular, alto-falante e em outros dispositivos.</p>
                            <div className={styles.plansHeaderCardsList}>
                                <div className={styles.plansHeaderCard}>
                                    <img
                                        src={'https://content-tooling.spotifycdn.com/images/52f004ea-a49a-420b-8dca-14f5304ff4bf_visa.svg'}
                                        alt={'card'}/>
                                </div>
                                <div className={styles.plansHeaderCard}>
                                    <img
                                        src={'https://content-tooling.spotifycdn.com/images/3a865441-c6d4-4f92-a4be-6c96c0e96d1f_mastercard.svg'}
                                        alt={'card'}/>
                                </div>
                                <div className={styles.plansHeaderCard}>
                                    <img
                                        src={'https://content-tooling.spotifycdn.com/images/d4dd3e5b-f7d9-4cd0-80f1-b65f19c5e55c_amex.svg'}
                                        alt={'card'}/>
                                </div>
                                <div className={styles.plansHeaderCard}>
                                    <img
                                        src={'https://content-tooling.spotifycdn.com/images/0a5cdc06-7024-4d04-999f-18e8b225b581_elo.svg'}
                                        alt={'card'}/>
                                </div>
                                <div className={styles.plansHeaderCard}>
                                    <img
                                        src={'https://content-tooling.spotifycdn.com/images/46c5bd7a-bdb3-43a8-916d-889887b02d80_hiper.svg'}
                                        alt={'card'}/>
                                </div>
                                <div className={styles.plansHeaderCard}>
                                    + outros 11
                                </div>
                            </div>
                        </div>
                        <div className={styles.plansList}>
                            {plans.map((plan, i) =>
                                <div key={i} className={styles.plansCard}>
                                    <p className={styles.plansCardTopTag}>{plan.tag}</p>
                                    <h1 className={styles.plansCardH}>{plan.title}</h1>
                                    <p className={styles.plansCardP}>{plan.description}</p>
                                    <p className={styles.plansCardPAccounts}>{plan.accounts}</p>
                                    <hr className={styles.plansCardHr}/>
                                    <div className={styles.plansCardProsList}>
                                        {plan.pros.map((pro, i) =>
                                            <div key={i} className={styles.plansCardProsItem}>
                                                <div className={styles.plansCardProsItemCheck}>
                                                    <svg role="img" height="24" width="24"
                                                         viewBox="0 0 24 24"
                                                         aria-label="" className="Svg-ytk21e-0 fJEWJR">
                                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none"
                                                                  stroke="#181818"></polyline>
                                                    </svg>
                                                </div>
                                                <p className={styles.plansCardProsItemP}>{pro}</p>
                                            </div>
                                        )}
                                    </div>
                                    <button className={styles.plansCardStartBtn}>Começar</button>
                                    <p className={styles.plansCardFooterP}>Somente no plano Individual. Depois, é só R$
                                        19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou
                                        o
                                        Premium. A oferta termina em 11/09/2022.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
