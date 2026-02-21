import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Award,
  Sparkles,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-2xl font-serif font-bold tracking-widest text-gold">BRIGHT BEAUTY</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">Zone • Lucknow</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest shimmer-btn shadow-lg"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-luxury-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-beige overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gold text-white py-3 rounded-xl uppercase tracking-widest shimmer-btn">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax and Cinematic Zoom Effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 15, 
            ease: [0.33, 1, 0.68, 1], // Custom smooth ease-out
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Bride" 
          className="w-full h-[125%] object-cover brightness-[0.8]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-offwhite"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs mb-4 font-semibold">
            Luxury Bridal Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Where Every Bride Becomes a <span className="italic">Masterpiece</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Luxury Bridal Makeup & Premium Beauty Services in the heart of Lucknow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold shimmer-btn shadow-2xl"
            >
              Book Bridal Consultation
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-white/20 transition-all"
            >
              View Bridal Gallery
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { label: "4.7 Google Rating", icon: <Star className="text-gold" size={16} /> },
              { label: "Women-Owned", icon: <Heart className="text-gold" size={16} /> },
              { label: "LGBTQ+ Friendly", icon: <Sparkles className="text-gold" size={16} /> },
              { label: "Certified Pros", icon: <ShieldCheck className="text-gold" size={16} /> },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-widest">
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Bridal Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Personalized Experience for Your <span className="italic">Special Day</span>
            </h2>
            <div className="space-y-6 text-luxury-dark/80 leading-relaxed text-lg">
              <p>
                At Bright Beauty Zone, we believe that bridal makeup is not just about products; it's about storytelling. We craft a look that reflects your personality, heritage, and the joy of your union.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized bridal consultation & trial",
                  "Premium international products (MAC, Huda, Dior)",
                  "In-depth skin tone and texture analysis",
                  "Pre-wedding skin prep & glow packages"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="italic font-serif text-gold text-xl pt-4">
                “Because your wedding day deserves nothing less than perfection.”
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop" 
                alt="Makeup Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-beige rounded-2xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 border border-gold/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { title: "Certified Artists", desc: "Trained by international masters of the craft.", icon: <Award size={32} /> },
    { title: "Premium Products", desc: "Only the finest imported luxury brands touch your skin.", icon: <Sparkles size={32} /> },
    { title: "Hygienic Space", desc: "Strict sanitization protocols for your safety.", icon: <ShieldCheck size={32} /> },
    { title: "100+ Happy Brides", desc: "A legacy of smiles and stunning transformations.", icon: <Users size={32} /> },
  ];

  return (
    <section className="py-24 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Why Brides Trust Us</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
            >
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{f.title}</h3>
              <p className="text-luxury-dark/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const packages = [
    { 
      name: "The Royal Bride", 
      price: "₹25,000+", 
      features: ["HD Airbrush Makeup", "Premium Hair Styling", "Draping & Jewelry Setting", "Luxury Pre-Prep Facial", "Trial Included"],
      popular: true
    },
    { 
      name: "Elegant Minimalist", 
      price: "₹15,000+", 
      features: ["HD Traditional Makeup", "Classic Hair Styling", "Draping Service", "Skin Glow Treatment", "Premium Lashes"],
      popular: false
    },
    { 
      name: "Engagement Glow", 
      price: "₹10,000+", 
      features: ["Party HD Makeup", "Designer Hair Style", "Draping Service", "Basic Skin Prep", "Mac/Huda Products"],
      popular: false
    },
  ];

  return (
    <section id="packages" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-bold">Our Collections</span>
          <h2 className="text-4xl font-serif mt-2">Bridal Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl border ${p.popular ? 'border-gold bg-white shadow-2xl' : 'border-beige bg-white/50'} flex flex-col`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1 rounded-full font-bold">
                  Most Preferred
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2">{p.name}</h3>
              <div className="text-3xl font-serif text-gold mb-8">{p.price}</div>
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-luxury-dark/70">
                    <CheckCircle2 size={16} className="text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl uppercase tracking-widest text-xs font-bold transition-all ${p.popular ? 'bg-gold text-white shimmer-btn' : 'border border-gold text-gold hover:bg-gold hover:text-white'}`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Ananya Sharma", role: "Lucknow Bride", text: "Bright Beauty Zone made me feel like a queen on my wedding day. The makeup was flawless and stayed perfect for 12 hours!", rating: 5 },
    { name: "Priya Verma", role: "Destination Bride", text: "The team is so professional and calm. They understood exactly what I wanted—a natural yet regal look.", rating: 5 },
    { name: "Sanya Gupta", role: "Engagement Bride", text: "Best bridal studio in Lucknow! Their attention to detail and hygiene is unmatched. Highly recommended.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-blush/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif">Real Bride Stories</h2>
          <p className="text-luxury-dark/60 mt-4">Trusted by 100+ Brides in Lucknow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm italic text-center relative"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-luxury-dark/80 leading-relaxed mb-8">"{r.text}"</p>
              <div>
                <div className="font-serif text-lg">{r.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-bold mt-1">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519415510236-8559b1985622?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596433809252-260c2745dfdd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold uppercase tracking-widest text-xs font-bold">Our Portfolio</span>
            <h2 className="text-4xl font-serif mt-2">Bridal Gallery</h2>
          </div>
          <button className="flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold border-b border-gold pb-1 hover:gap-4 transition-all">
            Follow on Instagram <Instagram size={16} />
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-gold/20 via-blush/10 to-beige/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-gold rounded-full"></div>
        </div>

        <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready To Glow On Your Big Day?</h2>
        <p className="text-luxury-dark/70 text-lg mb-10 max-w-xl mx-auto">
          Limited bridal slots available for the upcoming wedding season. Book your consultation today to secure your date.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold shimmer-btn shadow-2xl mb-6"
        >
          Book Your Bridal Slot Now
        </motion.button>
        
        <div className="text-[10px] uppercase tracking-widest text-gold font-bold">
          * Limited bridal bookings per month to ensure quality.
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white/80 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-widest text-gold">BRIGHT BEAUTY</span>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">Zone • Lucknow</span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Lucknow's premier luxury bridal studio dedicated to making your wedding day dreams a reality through artistry and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-gold transition-colors">Experience</a></li>
              <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>Hazratganj, Lucknow, Uttar Pradesh 226001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Get bridal tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-2 w-full focus:outline-none focus:border-gold text-sm"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-r-xl">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
          <p>© 2026 Bright Beauty Zone. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-widest">
        Chat with us
      </span>
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <WhyUs />
        <Packages />
        <Testimonials />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Sticky Book Now for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 bg-white/80 backdrop-blur-md border-t border-beige">
        <button className="w-full bg-gold text-white py-4 rounded-xl uppercase tracking-[0.2em] font-bold shimmer-btn shadow-lg">
          Book Bridal Slot
        </button>
      </div>
    </div>
  );
}
