import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, Waves, UtensilsCrossed, PartyPopper, Sunrise, Hotel, Sparkles, ChevronDown, Navigation } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';
import suiteLuxury from '@/assets/suite-luxury.jpg';
import restaurantImage from '@/assets/restaurant.jpg';
import privateBeach from '@/assets/private-beach.jpg';
import sunsetImage from '@/assets/sunset.jpg';
import eventsImage from '@/assets/events.jpg';

// Animation variants defined outside component to avoid type issues
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};
const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};
const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};
const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};
const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const cardHover = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.4
    }
  }
};
const Index = () => {
  const phoneNumber = "+2250711119494";
  const whatsappLink = `https://wa.me/2250711119494`;
  const emailAddress = "brit.resort@gmail.com";
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.5
    }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl md:text-3xl font-semibold text-primary tracking-wider">BRIT RESORT</span>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">Hôtel & Plage</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['experience', 'hebergements', 'evenements', 'contact'].map((item, index) => <motion.button key={item} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8 + index * 0.1
          }} onClick={() => scrollToSection(item)} className="text-sm font-medium tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300 underline-animated uppercase">
                {item === 'hebergements' ? 'Hébergements' : item === 'evenements' ? 'Événements' : item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>)}
          </div>
          <motion.a initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 1.2
        }} href={`tel:${phoneNumber}`} className="btn-luxury-ghost text-secondary-foreground bg-accent border-secondary-foreground">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Réserver</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="absolute inset-0">
          <img src={heroImage} alt="Vue panoramique de Brit Resort sur la plage de Jacqueville" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)"
        }} animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} transition={{
          duration: 1,
          delay: 0.3
        }}>
            <span className="inline-block text-primary text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-body font-medium">
              Akrou Jacqueville, Côte d'Ivoire
            </span>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)"
        }} animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} transition={{
          duration: 1,
          delay: 0.5
        }} className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-[1.1] text-hero">
            Vivez l'expérience ultime du{' '}
            <span className="animate-shimmer font-medium">luxe</span>
            <br className="hidden md:block" /> en bord de mer
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)"
        }} animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} transition={{
          duration: 1,
          delay: 0.7
        }} className="font-body text-lg md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed text-readable font-light">
            Brit Resort – Hôtel & Plage | Détente, élégance et souvenirs inoubliables
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} href={`tel:${phoneNumber}`} className="btn-luxury-filled w-full sm:w-auto my-0 mx-0 px-[39px] text-center py-[13px]">
              <Phone className="w-5 h-5" />
              Réserver maintenant
            </motion.a>
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full sm:w-auto mr-0 px-[48px] py-[19px] my-[2px] mx-[53px]">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.a>
          </motion.div>
        </div>

        <motion.button initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-float">
          <ChevronDown className="w-10 h-10" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 md:py-40 bg-background relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold))_0%,_transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="max-w-5xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Bienvenue
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
              Un havre de paix d'exception
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold mb-10" />
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
              Situé à Akrou Jacqueville, Brit Resort est un complexe hôtelier d'exception où le confort moderne 
              rencontre la beauté naturelle de l'océan. Que ce soit pour un séjour romantique, familial ou événementiel, 
              chaque instant est une expérience inoubliable.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[{
              icon: Star,
              label: "Toujours Ouvert"
            }, {
              icon: MapPin,
              label: "Jacqueville, CI"
            }, {
              icon: Waves,
              label: "Hôtel & Plage"
            }, {
              icon: UtensilsCrossed,
              label: "Restaurant"
            }].map((item, index) => <motion.div key={index} variants={scaleIn} whileHover={{
              scale: 1.05,
              y: -5
            }} className="flex flex-col items-center gap-4 p-8 border border-border/50 bg-card/30 hover:border-primary/50 transition-all duration-500 glow-gold-hover">
                  <motion.div whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.6
              }}>
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <span className="font-body text-sm md:text-base tracking-wider text-foreground/90 font-medium">{item.label}</span>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 md:py-40 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center mb-20">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Découvrez
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              L'Expérience Brit Resort
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            image: suiteLuxury,
            icon: Hotel,
            title: "Chambres & Suites",
            desc: "Élégance et confort absolu avec vue sur l'océan"
          }, {
            image: privateBeach,
            icon: Waves,
            title: "Plage Privée",
            desc: "Un accès exclusif à notre plage de sable doré"
          }, {
            image: restaurantImage,
            icon: UtensilsCrossed,
            title: "Restaurant",
            desc: "Cuisine raffinée et saveurs ivoiriennes authentiques"
          }, {
            image: eventsImage,
            icon: PartyPopper,
            title: "Événements",
            desc: "Célébrations et soirées exclusives inoubliables"
          }, {
            image: sunsetImage,
            icon: Sunrise,
            title: "Couchers de Soleil",
            desc: "Des panoramas à couper le souffle chaque soir"
          }].map((item, index) => <motion.div key={index} variants={fadeInUp} initial="rest" whileHover="hover" animate="rest" className={`group relative overflow-hidden cursor-pointer ${index === 3 || index === 4 ? 'lg:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <motion.div variants={cardHover} className="aspect-[4/3] overflow-hidden rounded-sm">
                  <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover" whileHover={{
                scale: 1.15
              }} transition={{
                duration: 0.8
              }} />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <motion.div className="absolute bottom-0 left-0 right-0 p-8" initial={{
              y: 20,
              opacity: 0.8
            }} whileHover={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.4
            }}>
                  <motion.div whileHover={{
                scale: 1.2,
                rotate: 10
              }} transition={{
                duration: 0.3
              }}>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                  </motion.div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-base text-foreground/80 leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="hebergements" className="py-28 md:py-40 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center mb-20">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Nos Chambres
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              Hébergements d'Exception
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Offre Spéciale Réveillon - Nuitée + Dîner | Buffet, barbecue, coupe de champagne offerte et soirée dansante
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: "Chambre Standard",
            price: "200 000",
            capacity: "2 personnes",
            ambiance: "Confort classique avec vue jardin"
          }, {
            name: "Suite Orientale",
            price: "320 000",
            capacity: "4 personnes",
            ambiance: "Décor oriental et spacieux"
          }, {
            name: "Suite Plage",
            price: "215 000",
            capacity: "2 personnes",
            ambiance: "Accès direct à la plage"
          }, {
            name: "Suite Bohème",
            price: "230 000",
            capacity: "2 personnes",
            ambiance: "Ambiance bohème chic"
          }, {
            name: "Suite Brit",
            price: "230 000",
            capacity: "2 personnes",
            ambiance: "Notre signature luxueuse"
          }].map((room, index) => <motion.div key={index} variants={fadeInUp} whileHover={{
            y: -10,
            scale: 1.02
          }} className="group bg-card border border-border/50 p-10 hover:border-primary/50 transition-all duration-500 hover-lift">
                <motion.div className="flex items-center gap-2 text-primary mb-6" whileHover={{
              scale: 1.1
            }}>
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs tracking-[0.3em] uppercase font-medium">Réveillon</span>
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{room.name}</h3>
                <p className="text-muted-foreground font-body text-base mb-6">{room.ambiance}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl md:text-5xl text-primary">{room.price}</span>
                  <span className="text-muted-foreground text-base font-medium">FCFA</span>
                </div>
                <p className="text-base text-foreground/70 mb-8 flex items-center gap-3">
                  <span className="text-primary text-lg">✓</span> {room.capacity}
                </p>
                <motion.a whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full text-center">
                  Réserver cette chambre
                </motion.a>
              </motion.div>)}
            
            {/* Children pricing */}
            <motion.div variants={fadeInUp} whileHover={{
            y: -10
          }} className="bg-primary/10 border border-primary/30 p-10 flex flex-col justify-center animate-border-glow">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">Tarif Enfants</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-4xl md:text-5xl text-primary">25 000</span>
                <span className="text-muted-foreground text-base font-medium">FCFA</span>
              </div>
              <p className="text-muted-foreground font-body text-base">À partir de 5 ans</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={eventsImage} alt="Événements au Brit Resort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="max-w-5xl mx-auto text-center">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Célébrations
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              Événements & Réveillons
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold mb-10" />
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
              Vivez des moments uniques avec nos soirées exclusives, dîners gastronomiques, 
              feux d'artifice et animations live. Chaque célébration devient un souvenir éternel.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[{
              icon: UtensilsCrossed,
              label: "Buffet & Barbecue"
            }, {
              icon: Sparkles,
              label: "Champagne Offert"
            }, {
              icon: PartyPopper,
              label: "Soirées Dansantes"
            }, {
              icon: Star,
              label: "Feux d'Artifice"
            }].map((item, index) => <motion.div key={index} variants={scaleIn} whileHover={{
              scale: 1.08,
              y: -5
            }} className="flex flex-col items-center gap-4 p-8 border border-primary/30 bg-card/30 backdrop-blur-sm glow-gold-hover">
                  <motion.div whileHover={{
                rotate: 360,
                scale: 1.2
              }} transition={{
                duration: 0.6
              }}>
                    <item.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <span className="font-body text-base tracking-wider text-foreground font-medium">{item.label}</span>
                </motion.div>)}
            </motion.div>

            <motion.a variants={fadeInUp} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury-filled inline-flex">
              Réserver pour le Réveillon
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 md:py-40 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center mb-20">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Témoignages
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              Ce Que Disent Nos Clients
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[{
            text: "Un lieu exceptionnel, service impeccable, cadre magnifique. On se sent vraiment privilégié.",
            author: "Marie K.",
            rating: 5
          }, {
            text: "Le meilleur resort de Jacqueville ! La plage privée est un vrai paradis. Nous reviendrons.",
            author: "Jean-Pierre D.",
            rating: 5
          }, {
            text: "Réveillon inoubliable ! L'équipe est aux petits soins. Un séjour magique en famille.",
            author: "Aminata S.",
            rating: 5
          }].map((testimonial, index) => <motion.div key={index} variants={fadeInUp} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-card border border-border/50 p-10 hover-lift">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <motion.div key={i} initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.1 * i
              }}>
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>)}
                </div>
                <p className="font-body text-lg text-foreground/90 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-display text-xl text-primary">{testimonial.author}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-28 md:py-40 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-primary text-sm md:text-base tracking-[0.4em] uppercase font-body font-medium mb-4">
              Localisation
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              Nous Trouver
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto">
              Akrou Jacqueville, Côte d'Ivoire – Un paradis accessible en bord de mer
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="max-w-5xl mx-auto">
            <div className="relative border border-border/50 overflow-hidden glow-gold">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-4.4138861!3d5.2060916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTInMjEuOSJOIDTCsDI0JzUwLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890" width="100%" height="450" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" title="Localisation de Brit Resort à Jacqueville" />
            </div>
            
            <motion.div variants={staggerContainer} className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a variants={fadeInUp} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} href="https://www.google.com/maps/dir/5.3294747,-3.9776489/5.2060916,-4.4138861/@5.2860627,-4.526681,10z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-luxury-filled">
                <Navigation className="w-5 h-5" />
                Obtenir l'itinéraire
              </motion.a>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-muted-foreground font-body text-base">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Akrou Jacqueville, Côte d'Ivoire</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-28 md:py-40 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold))_0%,_transparent_60%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8">
              Réservez Dès Maintenant
            </motion.h2>
            <motion.div variants={scaleIn} className="divider-gold mb-10" />
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-muted-foreground mb-14 leading-relaxed">
              Vivez une expérience inoubliable au Brit Resort. 
              Notre équipe est à votre disposition pour créer le séjour de vos rêves.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14">
              <motion.a variants={fadeInUp} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} href={`tel:${phoneNumber}`} className="btn-luxury-filled w-full sm:w-auto animate-pulse-glow">
                <Phone className="w-5 h-5" />
                +225 07 11 11 94 94
              </motion.a>
              <motion.a variants={fadeInUp} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a variants={fadeInUp} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.98
            }} href={`mailto:${emailAddress}`} className="btn-luxury w-full sm:w-auto">
                <Mail className="w-5 h-5" />
                Email
              </motion.a>
            </motion.div>

            <motion.div variants={scaleIn} className="inline-block px-8 py-4 border border-primary/30 bg-primary/5 animate-border-glow">
              <p className="text-base text-primary tracking-wider font-medium">
                ⚡ Places limitées pour le Réveillon — Réservez vite !
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-muted/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-3 gap-16 mb-16">
            <motion.div variants={fadeInLeft} className="text-center md:text-left">
              <div className="mb-6">
                <span className="font-display text-3xl font-semibold text-primary tracking-wider">BRIT RESORT</span>
                <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mt-2">Hôtel & Plage</p>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Votre destination de luxe en bord de mer à Jacqueville, Côte d'Ivoire.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <h4 className="font-display text-xl text-foreground mb-6">Contact</h4>
              <div className="space-y-4 font-body text-base text-muted-foreground">
                <p className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  Akrou Jacqueville, Côte d'Ivoire
                </p>
                <p className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  +225 07 11 11 94 94
                </p>
                <p className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  brit.resort@gmail.com
                </p>
                <p className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  Ouvert 24h/24, 7j/7
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="text-center md:text-right">
              <h4 className="font-display text-xl text-foreground mb-6">Suivez-nous</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <motion.a whileHover={{
                scale: 1.1,
                y: -3
              }} href="https://web.facebook.com/brbritresort" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300">
                  <span className="text-sm font-medium">FB</span>
                </motion.a>
                <motion.a whileHover={{
                scale: 1.1,
                y: -3
              }} href="#" className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300">
                  <span className="text-sm font-medium">IG</span>
                </motion.a>
                <motion.a whileHover={{
                scale: 1.1,
                y: -3
              }} href={whatsappLink} className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} className="divider-gold mb-10" />
          
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center font-body text-sm text-muted-foreground">
            © 2025 Brit Resort Hôtel & Plage. Tous droits réservés.
          </motion.p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      delay: 2,
      type: "spring",
      stiffness: 200
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-pulse-glow" style={{
      boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)'
    }}>
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

      {/* Floating Call Button (Mobile) */}
      <motion.a initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      delay: 2.2,
      type: "spring",
      stiffness: 200
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} href={`tel:${phoneNumber}`} className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors md:hidden glow-gold">
        <Phone className="w-7 h-7 text-primary-foreground" />
      </motion.a>
    </div>;
};
export default Index;