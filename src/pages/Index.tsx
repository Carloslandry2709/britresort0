import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, Waves, UtensilsCrossed, PartyPopper, Sunrise, Hotel, Sparkles, ChevronDown, Navigation } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';
import suiteLuxury from '@/assets/suite-luxury.jpg';
import restaurantImage from '@/assets/restaurant.jpg';
import privateBeach from '@/assets/private-beach.jpg';
import sunsetImage from '@/assets/sunset.jpg';
import eventsImage from '@/assets/events.jpg';

const Index = () => {
  const phoneNumber = "+2250711119494";
  const whatsappLink = `https://wa.me/2250711119494`;
  const emailAddress = "brit.resort@gmail.com";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-semibold text-primary">BRIT RESORT</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Hôtel & Plage</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('experience')} className="text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline-animated">Expérience</button>
            <button onClick={() => scrollToSection('hebergements')} className="text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline-animated">Hébergements</button>
            <button onClick={() => scrollToSection('evenements')} className="text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline-animated">Événements</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline-animated">Contact</button>
          </div>
          <a href={`tel:${phoneNumber}`} className="btn-luxury-ghost">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Réserver</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Vue panoramique de Brit Resort sur la plage de Jacqueville" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary text-sm tracking-[0.4em] uppercase mb-6 font-body">Akrou Jacqueville, Côte d'Ivoire</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight"
          >
            Vivez l'expérience ultime du <span className="animate-shimmer">luxe</span> en bord de mer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Brit Resort – Hôtel & Plage | Détente, élégance et souvenirs inoubliables
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={`tel:${phoneNumber}`} className="btn-luxury-filled w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              Réserver maintenant
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-float"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Bienvenue</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              Un havre de paix d'exception
            </h2>
            <div className="divider-gold mb-8" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
              Situé à Akrou Jacqueville, Brit Resort est un complexe hôtelier d'exception où le confort moderne 
              rencontre la beauté naturelle de l'océan. Que ce soit pour un séjour romantique, familial ou événementiel, 
              chaque instant est une expérience inoubliable.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Star, label: "Toujours Ouvert" },
                { icon: MapPin, label: "Jacqueville, CI" },
                { icon: Waves, label: "Hôtel & Plage" },
                { icon: UtensilsCrossed, label: "Restaurant" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-3 p-6 border border-border/50 bg-card/50 hover:border-primary/50 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-body text-sm tracking-wider text-foreground/80">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Découvrez</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              L'Expérience Brit Resort
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: suiteLuxury, icon: Hotel, title: "Chambres & Suites", desc: "Élégance et confort absolu avec vue sur l'océan" },
              { image: privateBeach, icon: Waves, title: "Plage Privée", desc: "Un accès exclusif à notre plage de sable doré" },
              { image: restaurantImage, icon: UtensilsCrossed, title: "Restaurant", desc: "Cuisine raffinée et saveurs ivoiriennes authentiques" },
              { image: eventsImage, icon: PartyPopper, title: "Événements", desc: "Célébrations et soirées exclusives inoubliables" },
              { image: sunsetImage, icon: Sunrise, title: "Couchers de Soleil", desc: "Des panoramas à couper le souffle chaque soir" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden ${index === 3 || index === 4 ? 'lg:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-foreground/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="hebergements" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Nos Chambres</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              Hébergements d'Exception
            </h2>
            <div className="divider-gold mb-4" />
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Offre Spéciale Réveillon - Nuitée + Dîner | Buffet, barbecue, coupe de champagne offerte et soirée dansante
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Chambre Standard", price: "200 000", capacity: "2 personnes", ambiance: "Confort classique avec vue jardin" },
              { name: "Suite Orientale", price: "320 000", capacity: "4 personnes", ambiance: "Décor oriental et spacieux" },
              { name: "Suite Plage", price: "215 000", capacity: "2 personnes", ambiance: "Accès direct à la plage" },
              { name: "Suite Bohème", price: "230 000", capacity: "2 personnes", ambiance: "Ambiance bohème chic" },
              { name: "Suite Brit", price: "230 000", capacity: "2 personnes", ambiance: "Notre signature luxueuse" },
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-card border border-border/50 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs tracking-[0.2em] uppercase">Réveillon</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">{room.ambiance}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-3xl text-primary">{room.price}</span>
                  <span className="text-muted-foreground text-sm">FCFA</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6 flex items-center gap-2">
                  <span className="text-primary">✓</span> {room.capacity}
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full text-center">
                  Réserver cette chambre
                </a>
              </motion.div>
            ))}
            
            {/* Children pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-primary/10 border border-primary/30 p-8 flex flex-col justify-center"
            >
              <h3 className="font-display text-2xl text-foreground mb-4">Tarif Enfants</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-3xl text-primary">25 000</span>
                <span className="text-muted-foreground text-sm">FCFA</span>
              </div>
              <p className="text-muted-foreground font-body text-sm">À partir de 5 ans</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={eventsImage} alt="Événements au Brit Resort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Célébrations</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              Événements & Réveillons
            </h2>
            <div className="divider-gold mb-8" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
              Vivez des moments uniques avec nos soirées exclusives, dîners gastronomiques, 
              feux d'artifice et animations live. Chaque célébration devient un souvenir éternel.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: UtensilsCrossed, label: "Buffet & Barbecue" },
                { icon: Sparkles, label: "Champagne Offert" },
                { icon: PartyPopper, label: "Soirées Dansantes" },
                { icon: Star, label: "Feux d'Artifice" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-3 p-6 border border-primary/30 bg-card/30 backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="font-body text-sm tracking-wider text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury-filled">
              Réserver pour le Réveillon
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Témoignages</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              Ce Que Disent Nos Clients
            </h2>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { text: "Un lieu exceptionnel, service impeccable, cadre magnifique. On se sent vraiment privilégié.", author: "Marie K.", rating: 5 },
              { text: "Le meilleur resort de Jacqueville ! La plage privée est un vrai paradis. Nous reviendrons.", author: "Jean-Pierre D.", rating: 5 },
              { text: "Réveillon inoubliable ! L'équipe est aux petits soins. Un séjour magique en famille.", author: "Aminata S.", rating: 5 },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card border border-border/50 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground/80 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-display text-lg text-primary">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Localisation</span>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mt-4 mb-6">
              Nous Trouver
            </h2>
            <div className="divider-gold mb-4" />
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Akrou Jacqueville, Côte d'Ivoire – Un paradis accessible en bord de mer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative border border-border/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-4.4138861!3d5.2060916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTInMjEuOSJOIDTCsDI0JzUwLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Localisation de Brit Resort à Jacqueville"
              />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.google.com/maps/dir/5.3294747,-3.9776489/5.2060916,-4.4138861/@5.2860627,-4.526681,10z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-filled"
              >
                <Navigation className="w-4 h-4" />
                Obtenir l'itinéraire
              </a>
              <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Akrou Jacqueville, Côte d'Ivoire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">
              Réservez Dès Maintenant
            </h2>
            <div className="divider-gold mb-8" />
            <p className="font-body text-lg text-muted-foreground mb-12">
              Vivez une expérience inoubliable au Brit Resort. 
              Notre équipe est à votre disposition pour créer le séjour de vos rêves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href={`tel:${phoneNumber}`} className="btn-luxury-filled w-full sm:w-auto animate-pulse-glow">
                <Phone className="w-4 h-4" />
                +225 07 11 11 94 94
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full sm:w-auto">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a href={`mailto:${emailAddress}`} className="btn-luxury w-full sm:w-auto">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            <div className="inline-block px-6 py-3 border border-primary/30 bg-primary/5">
              <p className="text-sm text-primary tracking-wider">
                ⚡ Places limitées pour le Réveillon — Réservez vite !
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="mb-4">
                <span className="font-display text-2xl font-semibold text-primary">BRIT RESORT</span>
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mt-1">Hôtel & Plage</p>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Votre destination de luxe en bord de mer à Jacqueville, Côte d'Ivoire.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
              <div className="space-y-2 font-body text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Akrou Jacqueville, Côte d'Ivoire
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  +225 07 11 11 94 94
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  brit.resort@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Ouvert 24h/24, 7j/7
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-display text-lg text-foreground mb-4">Suivez-nous</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <span className="text-sm">FB</span>
                </a>
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <span className="text-sm">IG</span>
                </a>
                <a href={whatsappLink} className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="divider-gold mb-8" />
          
          <p className="text-center font-body text-xs text-muted-foreground">
            © 2025 Brit Resort Hôtel & Plage. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-pulse-glow"
        style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Floating Call Button (Mobile) */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors md:hidden"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
