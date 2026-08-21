/**
 * =============================================================================
 * CLIENT CONFIG — Centro Especializado en Sonrisas
 * =============================================================================
 * Edit THIS FILE ONLY when customizing content for this practice.
 *
 * IMAGE ASSETS: Drop files under assets/images/centro/ (see comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // SEO / METADATA
  // ---------------------------------------------------------------------------
  seo: {
    description:
      "Centro Especializado en Sonrisas, clinica dental multiespecialidad en Tegucigalpa. Ortodoncia, endodoncia, cirugia maxilofacial y periodoncia. Sonries mejor, vives mejor!",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Centro Especializado en Sonrisas",

    tagline: {
      en: "Smile better, Live better!",
      es: "Sonríes mejor, Vives mejor!",
    },

    phone: "+504 3369-8970",
    phoneTel: "50433698970",

    address: {
      street: "Santa Mónica Miraflores",
      city: "Tegucigalpa",
      state: "Francisco Morazán, Honduras",
      zip: "",
      // Exact Google Maps pin from the clinic's place link
      mapsQuery: "place_id:ChIJebMcPOu9b48Rc3Wz-qgkKqo",
    },

    hours: {
      mon: "9:00 AM – 6:00 PM",
      tue: "9:00 AM – 6:00 PM",
      wed: "9:00 AM – 6:00 PM",
      thu: "9:00 AM – 6:00 PM",
      fri: "9:00 AM – 6:00 PM",
      sat: "9:00 AM – 5:00 PM",
      sun: "", // Dom Cerrado — empty hides the day
    },

    // OPTIONAL — leave blank to hide email in footer
    email: "",

    // OPTIONAL — leave blank to hide trust bar stats
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#1B2A41",
    accentColor: "#C9A66B",
    primaryDark: "",
    softBg: "",
    // TODO: Add logo — drop transparent PNG/SVG at assets/images/centro/logo.png
    logoUrl: "",
    // TODO: Add hero photo — drop image at assets/images/centro/hero.jpg then update path
    heroImageUrl: "assets/images/hero.jpg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Multi-specialty dental care in Tegucigalpa.",
        dentists: "Meet Our Team",
        dentistsLead: "Specialists dedicated to your smile.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "We work with BAC and Ficohsa to make care more accessible.",
        location: "Visit Us",
        locationLead: "Santa Mónica Miraflores, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Atención dental multiespecialidad en Tegucigalpa.",
        dentists: "Nuestro Equipo",
        dentistsLead: "Especialistas dedicados a tu sonrisa.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Trabajamos con BAC y Ficohsa para hacer el cuidado más accesible.",
        location: "Visítanos",
        locationLead: "Santa Mónica Miraflores, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  // Empty array hides the entire "Our Team" section until doctor profiles are added.
  // TODO: Add each doctor with name, title, bio, and photoUrl, e.g.:
  //   photoUrl: "assets/images/centro/doctors/doctor-name.jpg"
  dentists: [],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Orthodontics", es: "Ortodoncia" },
      description: {
        en: "Straighten teeth and correct bite alignment with personalized orthodontic plans for children and adults.",
        es: "Endereza dientes y corrige la mordida con planes de ortodoncia personalizados para niños y adultos.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Endodontics", es: "Endodoncia" },
      description: {
        en: "Root canal therapy and pulp care to relieve pain and save natural teeth whenever possible.",
        es: "Tratamiento de conducto y cuidado pulpar para aliviar el dolor y conservar tus dientes naturales.",
      },
      icon: "general",
    },
    {
      name: { en: "Maxillofacial Surgery", es: "Cirugía Maxilofacial" },
      description: {
        en: "Surgical care for jaw, facial, and oral conditions — from extractions to complex reconstructive procedures.",
        es: "Atención quirúrgica para condiciones de mandíbula, rostro y boca — desde extracciones hasta procedimientos reconstructivos.",
      },
      icon: "general",
    },
    {
      name: { en: "Periodontics", es: "Periodoncia" },
      description: {
        en: "Diagnosis and treatment of gum disease to protect the foundation of a healthy, lasting smile.",
        es: "Diagnóstico y tratamiento de enfermedades de encías para proteger la base de una sonrisa sana y duradera.",
      },
      icon: "cleaning",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  // Empty array hides the Testimonials section until patient reviews are added.
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  // TODO: Replace placeholder SVGs with BAC and Ficohsa logos:
  //   assets/images/centro/financing/bac.jpg
  //   assets/images/centro/financing/ficohsa.jpg
  financingImages: [
    {
      src: "assets/images/financing/financing-01.svg",
      alt: {
        en: "BAC financing",
        es: "Financiamiento BAC",
      },
    },
    {
      src: "assets/images/financing/financing-02.svg",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  // Empty array hides the Gallery section until before/after photos are added.
  // TODO: Add gallery images, e.g. assets/images/centro/gallery/smile-01.jpg
  gallery: [],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://instagram.com/clinicaespecializadaensonrisas",
    facebook: "https://facebook.com/centroespecializadoensonrisa",
  },
};

window.SITE_CONFIG = config;
