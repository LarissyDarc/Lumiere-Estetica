import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowRight, Check, MapPin, Menu, MessageCircle, Sparkles, X } from 'lucide-react'
import './styles.css'
import './booking.css'
import './modern.css'
import './elegance.css'
import './whatsapp.css'
import './redesign.css'

const services = [
  { number: '01', title: 'Pele radiante', text: 'Limpeza de pele, hidrração profunda e protocolos faciais personalizados.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85' },
  { number: '02', title: 'Corpo em harmonia', text: 'Massagens, drenagem e cuidados que renovam sua energia e autoestima.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85' },
  { number: '03', title: 'Olhar que encanta', text: 'Design de sobrancelhas, cílios e maquiagem para expressar sua melhor versão.', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85' }
]
const whatsappUrl = 'https://wa.me/5561999999999?text=Olá%21%20Gostaria%20de%20agendar%20um%20horário%20na%20Lumière.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [bookingOpen, setBookingOpen] = useState(false)
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return <main>
    <header className="header">
      <button className="brand" onClick={() => scrollTo('#inicio')} aria-label="Voltar ao início">Lumière<span>.</span></button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <button onClick={() => scrollTo('#sobre')}>O espaço</button>
        <button onClick={() => scrollTo('#servicos')}>Tratamentos</button>
        <button onClick={() => scrollTo('#contato')}>Contato</button>
      </nav>
      <button className="booking top-booking" onClick={() => setBookingOpen(true)}>Agende seu momento <ArrowUpRight /></button>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={14} /> Estética que ilumina</p>
        <h1>Seu brilho<br /><i>mora aqui.</i></h1>
        <p className="hero-text">Um refúgio criado para você desacelerar, se cuidar e se reconhecer ainda mais bonita.</p>
        <div className="hero-actions">
        <button className="booking" onClick={() => setBookingOpen(true)}>Reservar horário <ArrowRight /></button>
          <button className="circle-button" onClick={() => scrollTo('#servicos')} aria-label="Ver tratamentos"><ArrowDownRight /></button>
        </div>
        <div className="location-pill"><MapPin size={15} /> Lago Sul · Brasília, DF</div>
        <div className="hero-meta"><div><strong>4.9<span>/5</span></strong><small>experiência avaliada</small></div><div><strong>+3 mil</strong><small>momentos de autocuidado</small></div></div>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-shape"></div>
        <img className="hero-image" src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1100&q=90" alt="Mulher com maquiagem natural" />
        <div className="floating-note"><span>desde</span><strong>2016</strong><small>cuidando de você</small></div>
      </div>
      <p className="vertical-note">BELEZA · PRESENÇA · AUTOCUIDADO</p>
    </section>

    <section id="sobre" className="intro section-pad">
      <p className="eyebrow">NOSSA ESSÊNCIA</p>
      <div className="intro-grid">
        <h2>Pequenos rituais.<br /><i>Grandes</i> transformações.</h2>
        <div><p>Na Lumière, cada atendimento começa com escuta. Entendemos a sua rotina, sua pele e seus desejos para criar uma experiência que é totalmente sua.</p><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollTo('#servicos') }}>Conheça nossos cuidados <ArrowRight /></a></div>
      </div>
    </section>

    <section id="servicos" className="services section-pad">
      <div className="section-heading"><div><p className="eyebrow">TRATAMENTOS</p><h2>Feitos para<br />você florescer.</h2></div><p>Escolha o seu momento de pausa.<br />Nós cuidamos de cada detalhe.</p></div>
      <div className="services-grid">
        {services.map((service, index) => <article className={`service-card ${active === index ? 'active' : ''}`} key={service.number} onMouseEnter={() => setActive(index)}>
          <img src={service.image} alt="" />
          <div className="service-overlay"><span>{service.number}</span><button aria-label={`Ver ${service.title}`}><ArrowUpRight /></button><div><h3>{service.title}</h3><p>{service.text}</p></div></div>
        </article>)}
      </div>
    </section>

    <section className="statement">
      <div className="statement-image"><img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1100&q=85" alt="Momento de relaxamento no salão" /></div>
      <div className="statement-copy"><p className="eyebrow">SEU TEMPO É PRECIOSO</p><h2>Quando você se cuida, tudo ao redor <i>floresce.</i></h2><blockquote>“Mais do que um salão: um convite para olhar para si com gentileza.”</blockquote><div className="signature">Lumière<span>estética & bem-estar</span></div></div>
    </section>

    <section className="benefits section-pad"><p className="eyebrow">A EXPERIÊNCIA LUMIÈRE</p><div className="benefits-grid"><div><strong>01</strong><h3>Atendimento<br />com propósito</h3><p>Você no centro de cada escolha.</p></div><div><strong>02</strong><h3>Protocolos<br />personalizados</h3><p>Seu cuidado, do seu jeito.</p></div><div><strong>03</strong><h3>Produtos<br />selecionados</h3><p>Qualidade que sua pele sente.</p></div></div></section>

    <section id="contato" className="cta"><div><p className="eyebrow">VAMOS COMEÇAR?</p><h2>Reserve um tempo<br /><i>para você.</i></h2><p>SHIS QI 9, Conjunto 12 · Lago Sul<br />Brasília — DF · Ter–Sáb, 9h às 19h</p></div><button className="cta-link" onClick={() => setBookingOpen(true)}>Solicitar agendamento <ArrowUpRight /></button></section>

    <section className="visit section-pad"><div className="visit-label"><MapPin /><p className="eyebrow">EM BRASÍLIA</p></div><div><h2>Um refúgio no<br /><i>coração do Lago Sul.</i></h2><p>Ambientes serenos, café especial e tratamentos pensados para acompanhar o seu ritmo.</p></div><a href="https://maps.google.com/?q=SHIS+QI+9+Lago+Sul+Brasilia+DF" target="_blank" rel="noreferrer">Ver localização <ArrowUpRight /></a></section>

    <footer><div className="brand">Lumière<span>.</span></div><p>© 2026 Lumière Estética. Feito com cuidado.</p><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> (61) 99999-9999</a></footer>
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle /><span>Fale conosco</span></a>
    {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
  </main>
}

function ArrowUpRight() { return <ArrowRight className="arrow-up" /> }
function BookingModal({ onClose }) {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true) }
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Fechar formulário"><X /></button>{sent ? <div className="confirmation"><span><Check /></span><p className="eyebrow">PEDIDO ENVIADO</p><h2>Seu momento está<br /><i>quase marcado.</i></h2><p>Obrigada pelo contato! Nossa equipe falará com você em breve para confirmar seu horário.</p><button className="booking" onClick={onClose}>Voltar para a página</button></div> : <><p className="eyebrow">SEU MOMENTO LUMIÈRE</p><h2 id="booking-title">Vamos cuidar<br /><i>de você.</i></h2><p className="modal-intro">Conte-nos como podemos tornar o seu dia mais leve.</p><form onSubmit={submit}><label>Seu nome<input required name="name" placeholder="Como podemos te chamar?" /></label><label>WhatsApp<input required name="phone" inputMode="tel" placeholder="(00) 00000-0000" /></label><label>Tratamento<select required name="service" defaultValue=""><option value="" disabled>Selecione um cuidado</option><option>Limpeza de pele</option><option>Massagem relaxante</option><option>Design de sobrancelhas</option><option>Outro tratamento</option></select></label><button className="booking" type="submit">Enviar solicitação <ArrowRight /></button></form></>}</section></div>
}
createRoot(document.getElementById('root')).render(<App />)
