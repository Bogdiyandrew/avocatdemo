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
    name: "Av. Dragoș Mateescu",
    phone: "0744 555 666", // PUNE NUMARUL LUI REAL AICI
    email: "avocat.mateescu@gmail.com",
    location: "Cabinet Autorizat Pitești",
    heroTitle: "Problemele penale cer o apărare agresivă și inteligentă.",
    review: {
      text: "Domnul avocat m-a salvat dintr-o situație imposibilă cu un dosar penal vechi. Recomand pentru profesionalism.",
      author: "Marian D.",
      role: "Client Mulțumit"
    }
  },

  // Client 2: Popescu (Exemplu)
  // Link-ul va fi: site.ro/popescu
  popescu: {
    name: "Cabinet Av. Popescu",
    phone: "0722 999 888",
    email: "contact@popescu.ro",
    location: "Cabinet București Sector 1",
    heroTitle: "Expertiză în litigii comerciale și recuperări creanțe.",
    review: {
      text: "Am colaborat pe partea de contracte comerciale. Foarte prompt.",
      author: "SC Tech S.R.L.",
      role: "Administrator"
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