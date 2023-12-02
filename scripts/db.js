const servicos = [
    {
        id: 0,
        img:'',
        nome:'',
    },
    {
        id: 1,
        img:'',
        nome:'',
    },
    {
        id: 2,
        img:'',
        nome:'',
    },
];
const diferenciais = [
    {
        id: 0,
        img:'',
        titulo: '',
        paragrafo: ''
    },
    {
        id: 1,
        img:'',
        titulo: '',
        paragrafo: ''
    },
    {
        id: 2,
        img:'',
        titulo: '',
        paragrafo: ''
    },
];
const avaliacao = [
    {
        id: 0,
        nome: '',
        avaliacao:'',
        img: ''
    },
    {
        id: 1,
        nome: '',
        avaliacao:'',
        img: ''
    },
    {
        id: 2,
        nome: '',
        avaliacao:'',
        img: ''
    }
]
const faqData = [
    {
        pergunta: "Como posso agendar um serviço na Sandro Oficina?",
        resposta: "Agendar um serviço conosco é fácil e conveniente. Você pode ligar para o nosso número de atendimento ao cliente durante o horário comercial ou utilizar a nossa plataforma online de agendamento no site. Basta escolher a data e hora que melhor se adequam à sua agenda."
    },
    {
        pergunta: "Quais tipos de serviços a Sandro Oficina oferece?",
        resposta: "Na Sandro Oficina, oferecemos uma ampla gama de serviços automotivos, desde manutenção preventiva até reparos complexos. Isso inclui troca de óleo, freios, suspensão, alinhamento, balanceamento, e diagnósticos eletrônicos, entre outros. Estamos comprometidos em fornecer soluções abrangentes para as necessidades do seu veículo."
    },
    {
        pergunta: "A Sandro Oficina utiliza peças originais nos reparos?",
        resposta: "Sim, na Sandro Oficina priorizamos a qualidade e durabilidade. Utilizamos peças originais e de alta qualidade em todos os nossos reparos. Isso garante que seu veículo receba componentes confiáveis e que atendam aos padrões de fábrica."
    },
    {
        pergunta: "Qual é o prazo médio para a conclusão dos serviços na Sandro Oficina?",
        resposta: "O prazo para a conclusão dos serviços pode variar com base na complexidade do trabalho. No entanto, nos esforçamos para concluir a maioria dos serviços em um prazo razoável. Ao agendar o serviço, forneceremos uma estimativa do tempo necessário, garantindo transparência e planejamento adequado."
    },
    {
        pergunta: "A Sandro Oficina oferece garantia nos serviços realizados?",
        resposta: "Sim, na Sandro Oficina, oferecemos garantia nos serviços realizados. Estamos confiantes na qualidade do nosso trabalho e nas peças que utilizamos. Caso surjam problemas após o reparo, entre em contato conosco, e faremos o necessário para resolver a situação de acordo com nossa política de garantia."
    }
];
const display = document.getElementById('faq-container')
for (let i = 0; i < faqData.length; i++) {
    faqHTML += `
            <div class="faq-question" onclick="toggleAnswer(this)">
                ${faqData[i].pergunta}
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                ${faqData[i].resposta}
            </div>`;
};
display.innerHTML = faqHTML;