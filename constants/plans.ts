import {TPlan} from "../models/Plan";

export const plans: TPlan[] = [
    {
        tag: '3 meses grátis com a assinatura',
        title: 'Individual',
        description: 'R$ 19,90/mês após o período da oferta',
        accounts: '1 conta',
        pros: [
            'Ouça músicas sem anúncios',
            'Ouça em qualquer lugar — até no modo offline',
            'Escolha a música que quer ouvir',
            'Faça um plano pré-pago ou uma assinatura'
        ],
        footerMsg: 'Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. A oferta termina em 11/09/2022.'
    },
    {
        tag: '1 mês grátis ao assinar',
        title: 'Duo',
        description: 'R$ 24,90/mês após o período da oferta',
        accounts: '2 contas',
        pros: [
            '2 contas Premium para um casal que mora junto',
            'Ouça sem anúncios, no modo offline e sob demanda',
            'Faça um plano pré-pago ou uma assinatura'
        ],
        footerMsg: 'Sujeito a Termos e Condições. O mês grátis não está disponível para usuários que já experimentaram o Premium.'
    },
    {
        tag: '1 mês grátis ao assinar',
        title: 'Família',
        description: 'R$ 34,90/mês após o período da oferta',
        accounts: 'Até 6 contas',
        pros: [
            '6 contas Premium para familiares que moram no mesmo endereço',
            'Bloqueie músicas com conteúdo explícito',
            'Spotify Kids: um aplicativo separado, feito especialmente para crianças',
        ],
        footerMsg: 'Sujeito a Termos e Condições. O mês grátis não está disponível para usuários que já experimentaram o Premium.'
    },
    {
        tag: '3 meses grátis com a assinatura',
        title: 'Universitário',
        description: 'R$ 9,90/mês após o período da oferta',
        accounts: '1 conta',
        pros: [
            'Desconto especial para estudantes universitários que tenham direito à oferta',
            'Ouça músicas sem anúncios',
            'Ouça em qualquer lugar — até no modo offline',
            'Escolha a música que quer ouvir'
        ],
        footerMsg: 'Oferta disponível somente para estudantes de instituições de ensino superior aprovadas. Depois, é só R$ 9,90/mês. Oferta não disponível para quem já usou o Premium. Sujeito a Termos e Condições'
    }
];