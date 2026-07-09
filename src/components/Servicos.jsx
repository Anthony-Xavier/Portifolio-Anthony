import React from "react";
import "./Servico.scss";

const Servicos = () => {
  const servicos = [
    {
      id: 1,
      badge: "01 · Landing Page",
      title: "Página de Conversão",
      text: "Uma página focada em apresentar seu negócio e transformar visitantes em clientes. Ideal para lançamentos, produtos ou serviços específicos.",
    },
    {
      id: 2,
      badge: "02 · Site Institucional",
      title: "Presença Digital Completa",
      text: "Site com múltiplas páginas — Quem somos, Serviços, Blog, Contato. Representa sua empresa de forma profissional na internet.",
    },
    {
      id: 3,
      badge: "03 · Sistema / E-commerce",
      title: "Plataforma Completa",
      text: "Sistema personalizado com painel de controle, área de pagamento, integração com ERPs e tudo o que sua operação precisa para funcionar online.",
    },
    {
      id: 4,
      badge: "04 · Chatbot IA",
      title: "Atendimento Inteligente 24h",
      text: "Assistente virtual integrado ao seu site que atende clientes, tira dúvidas e qualifica leads automaticamente — mesmo fora do horário comercial.",
      tag: "EM BREVE",
    },
  ];

  return (
    <section className="servicos" id="servicos">
      <div className="servicos__intro">
        <div className="servicos__kicker">— O QUE EU FAÇO</div>
        <h2 className="servicos__title">Serviços</h2>
        <p className="servicos__lead">
          Do site de apresentação até o sistema completo — com suporte mensal
          incluso.
        </p>
      </div>

      <div className="servicos__cards-wrapper">
        <div className="servicos__cards">
          {servicos.map((s) => (
            <article key={s.id} className="servico">
              {s.tag && <span className="servico__pill">{s.tag}</span>}
              <div className="servico__badge">{s.badge}</div>
              <h3 className="servico__title">{s.title}</h3>
              <p className="servico__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="servicos__included">
        <div className="servicos__included-title">
          O QUE ESTÁ INCLUSO NA MENSALIDADE (SUPORTE & MANUTENÇÃO)
        </div>
        <div className="servicos__included-grid">
          <ul>
            <li>Hospedagem em servidores em nuvem de alta performance</li>
            <li>Banco de dados seguro com backups automáticos diários</li>
            <li>Monitoramento para garantir o site no ar 24h por dia</li>
          </ul>
          <ul>
            <li>Correção de bugs sem custo adicional</li>
            <li>Pequenas alterações de conteúdo (textos, imagens, banners)</li>
            <li>Segurança e monitoramento contra invasões</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
