// lib/clients.ts

export interface ClientData {
  name: string;        // Numele din Logo (ex: Avocat Mateescu)
  phone: string;       // Telefonul (ex: 0722 123 456)
  email: string;       // Email-ul
  location: string;    // Orașul (ex: Pitești)
  heroTitle: string;   // Titlul mare (ex: Drepturile tale merită...)
  review: {
    text: string;      // Textul recenziei reale
    author: string;    // Numele clientului care a lăsat recenzia
    role: string;      // (Opțional) ex: Proprietar SRL
  }
}

export const clients: Record<string, ClientData> = {
  // Client 1: Mateescu
  // Link-ul va fi: site.ro/mateescu
  mateescu: {
    name: "Av. Dragoș Ioan Mateescu",
    phone: "0722 177 473",
    email: "contact@avocatmateescu.ro", // PUNE MAIL-UL LUI REAL DACA IL GASESTI, altfel lasa-l pe asta generic
    location: "Str. Mihai Eminescu nr.11, Pitești",
    heroTitle: "Expertiză completă în Drept Civil, Penal și Comercial.",
    review: {
      text: "Un avocat de nota 10. Profesionalism și dedicare totală în sala de judecată. Recomand cu încredere pentru rezultate concrete.",
      author: "Client Google",
      role: "Recenzie 5.0 ★"
    }
  },

  // Client 2: Popescu (Exemplu)
  // Link-ul va fi: site.ro/popescu
  ormenisanu: {
    name: "Av. Alina Ormenișanu",
    phone: "0788 168 798",
    email: "office@avocatormenisanu.ro", // Email placeholder (nu apare pe maps, schimbă dacă îl afli)
    location: "Strada Exercițiu 70, Pitești",
    heroTitle: "Asistență juridică promptă și soluții legale clare.",
    review: {
      text: "Un avocat de nota 10, foarte implicată. Mi-a explicat totul pe înțelesul meu și am rezolvat problema rapid. Recomand!",
      author: "Client Google",
      role: "Recenzie 5.0 ★"
    }
  },
  mocanu: {
    name: "Av. Elena Pana Mocanu",
    phone: "0742 163 326",
    email: "office@avocatpanamocanu.ro", // Email placeholder
    location: "Str. Mihai Eminescu 11, Pitești",
    heroTitle: "Consultanță juridică solidă și reprezentare dedicată.",
    review: {
      text: "Un avocat excepțional, cu multă răbdare și profesionalism. M-a ajutat să câștig un proces care părea imposibil. Mulțumesc!",
      author: "Client Google",
      role: "Recenzie 5.0 ★"
    }
  },

  leca: {
    name: "Av. Laura Leca",
    phone: "0745 096 418",
    email: "office@avocatlecalaura.ro", // Email placeholder
    location: "Bulevardul Eroilor nr 12, Pitești",
    heroTitle: "Servicii juridice complete și reprezentare corectă.",
    review: {
      text: "Am apreciat promptitudinea și claritatea cu care mi s-a explicat situația. Un avocat care pune interesul clientului pe primul loc.",
      author: "Client Mulțumit",
      role: "Recenzie"
    }
  },

  // CLIENTUL 5: Corina Iunker
  // Link-ul va fi: site.ro/iunker
  iunker: {
    name: "Av. Corina Iunker",
    phone: "0745 139 017",
    email: "office@avocatiunkercorina.ro", // Email placeholder
    location: "Strada Popa Șapcă, Pitești",
    heroTitle: "Reprezentare juridică la cele mai înalte standarde.",
    review: {
      text: "Doamna avocat m-a ajutat într-un moment dificil cu mult calm și profesionalism. O recomand pentru seriozitate și implicare.",
      author: "Client Mulțumit",
      role: "Recenzie 5.0 ★"
    }
  },


  // CLIENTUL 6: Anca Moiceanu
  // Link-ul va fi: site.ro/moiceanu
  moiceanu: {
    name: "Av. Anca Moiceanu",
    phone: "0735 533 554",
    email: "office@avocatancamoiceanu.ro", // Email placeholder
    location: "Bulevardul Eroilor 6, Pitești",
    heroTitle: "Soluții juridice eficiente și reprezentare de încredere.",
    review: {
      text: "O doamnă avocat foarte bine pregătită. Am rezolvat rapid o problemă cu actele casei. Recomand cu drag!",
      author: "Client Google",
      role: "Recenzie 5.0 ★"
    }
  },

  // Aici adaugi următorii clienți...
};

// Date default (dacă intră cineva pe prima pagină)
export const defaultClient: ClientData = {
  name: "AvocatDemo",
  phone: "0750 488 329",
  email: "contact@avocatdemo.ro",
  location: "Cabinet Autorizat",
  heroTitle: "Drepturile tale merită o apărare serioasă.",
  review: {
    text: "M-au scos dintr-un litigiu pe care îl tăram de 2 ani. Direct la subiect, fără perdea de timp. Recomand.",
    author: "Mihai C.",
    role: "Proprietar SRL"
  }
};