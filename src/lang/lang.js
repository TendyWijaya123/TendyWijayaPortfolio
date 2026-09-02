import { m } from "motion/react";

const lang = {
  en: {
    about: "About Me",
    home: "Home",
    contact: "Contact",
    education: "Education",
    certification: "Certification",
    experience: "Experience",
    introduction: "Hey I'm,",
    contactMe: "Contact Me",
    profileDescription:
      "Fresh graduate with a strong passion for building intuitive website.",
    aboutMeDescription:
      "I am a graduate of Informatics Engineering from Politeknik Negeri Bandung with a GPA of 3.64, and I am currently pursuing a Bachelor's degree through BINUS Online. I have a strong interest in software development and enjoy understanding how software systems are designed, built, and continuously improved to solve real-world problems. I believe that a solid understanding of fundamental concepts is just as important as the ability to implement them effectively. Therefore, I continuously develop my skills through self-directed learning, personal projects, and documenting my learning process to deepen my understanding and improve my technical abilities. I enjoy learning new things, working in a systematic manner, and building solutions that are easy to understand, maintain, and further develop.",

    educationHistory: [
      {
        degree: "Senior High School",
        school: "SMAN 1 Garut",
        period: "2019 - 2022",
        major: "Science",
        grade: "89.85",
        status: "Graduated",
        image: "Logo_sman_1_garut.png",
      },
      {
        degree: "Diploma 3",
        school: "Bandung State Polytechnic",
        major: "Informatics Engineering",
        period: "2022 - 2025",
        grade: "3.62",
        status: "Graduated",
        image: "logo-polban.png",
      },
      {
        degree: "Bachelor's Degree",
        school: "BINUS Online",
        major: "Computer Science",
        period: "2026 - Present",
        grade: "",
        status: "Currently Studying",
        image: "binus-online-logo.webp",
      },
    ],

    frontEndTech: [
      {
        name: "CSS",
        icon: "css-logo.svg",
      },
      {
        name: "HTML",
        icon: "html-logo.svg",
      },
      {
        name: "Javascript",
        icon: "javascript-logo.svg",
      },
      {
        name: "React",
        icon: "react-logo.svg",
      },
      {
        name: "Tailwind",
        icon: "tailwind-logo.svg",
      },
    ],

    backEndTech: [
      {
        name: "Express",
        icon: "express-logo.svg",
      },
      {
        name: "Node JS",
        icon: "nodejs-logo.svg",
      },
      {
        name: "PHP",
        icon: "php-logo.svg",
      },
      {
        name: "Laravel",
        icon: "laravel-logo.svg",
      },

      {
        name: "Python",
        icon: "python-logo.svg",
      },
      {
        name: "PostgreSQL",
        icon: "postgressql-logo.svg",
      },
      {
        name: "MySQL",
        icon: "mysql-logo.svg",
      },
    ],

    experienceHistory: [
      {
        companyName: "Rolling Glory",
        role: "Backend Developer",
        description:
          "Contributed to server-side development for internal company projects, including building and developing APIs as well as assisting in designing database structures and requirements. Also contributed to bug fixing and maintenance across several client-based projects to ensure applications continued to function properly.",
        duration: "June 2024 - October 2024",
        skill: [
          "Laravel",
          "NestJS",
          "TypeScript",
          "Node.js",
          "Express.js",
          "TypeORM",
          "Authentication",
          "Authorization",
          "OAuth",
          "Redis",
          "Swagger",
        ],
        icon: "roling-glory-logo.png",
      },
    ],
    certificationHistories: [
      {
        title: "Frontend Developer React HackerRank",
        filePath: "/Certifications/frontend_developer_react certificate.webp",
      },
      {
        title: "JavaScript (Intermediate)",
        filePath: "/Certifications/javascript_intermediate certificate.webp",
      },
      {
        title: "Awarded PKM-KC Funding",
        filePath: "/Certifications/PKM-KC.webp",
      },
      {
        title: "Arutala Junior Back End Spring Boot Developer",
        filePath: "/Certifications/springboot.webp",
      },
      {
        title: "SQL (Basic)",
        filePath: "/Certifications/sql_basic certificate.webp",
      },
      {
        title: "Complete Python Developer in 2026: Zero to Mastery",
        filePath:
          "/Certifications/the-complete-python-developer-zero-to-mastery.webp",
      },
      {
        title: "Complete Web Developer in 2026: Zero to Mastery",
        filePath:
          "/Certifications/the-complete-web-developer-zero-to-mastery.webp",
      },
    ],
  },
  id: {
    about: "Tentang Saya",
    home: "Beranda",
    contact: "Kontak",
    education: "Pendidikan",
    certification: "Sertifikasi",
    experience: "Pengalaman",
    introduction: "Hallo  saya,",
    contactMe: "Hubungi Saya",
    profileDescription:
      "Saya adalah fresh graduate yang memiliki minat kuat dalam membangun aplikasi web yang sederhana dan mudah digunakan.",
    aboutMeDescription:
      "Saya merupakan lulusan Teknik Informatika dari Politeknik Negeri Bandung dengan IPK 3,64 dan saat ini sedang melanjutkan pendidikan Sarjana di BINUS Online. Saya memiliki ketertarikan yang besar terhadap pengembangan perangkat lunak serta menikmati proses memahami bagaimana sebuah sistem dirancang, dibangun, dan terus dikembangkan untuk menyelesaikan permasalahan nyata. Saya percaya bahwa pemahaman konsep yang kuat sama pentingnya dengan kemampuan mengimplementasikannya dalam sebuah solusi. Oleh karena itu, saya terus mengembangkan diri melalui pembelajaran mandiri, pengembangan proyek pribadi, serta mendokumentasikan setiap proses belajar sebagai sarana untuk memperdalam pemahaman dan meningkatkan kemampuan. Saya senang mempelajari hal-hal baru, bekerja secara sistematis, serta berusaha membangun solusi yang mudah dipahami, dipelihara, dan dikembangkan.",
    educationHistory: [
      {
        degree: "SMA",
        school: "SMAN 1 Garut",
        period: "2019 - 2022",
        major: "MIPA",
        grade: "89.85",
        status: "Graduated",
        image: "Logo_sman_1_garut.png",
      },
      {
        degree: "Diploma 3",
        school: "Politeknik Negeri Bandung",
        major: "Teknik Informatika",
        period: "2022 - 2025",
        grade: "3.62",
        status: "Graduated",
        image: "logo-polban.png",
      },
      {
        degree: "Sarjana",
        school: "Binus Online University",
        major: "Computer Science",
        period: "2026 - Present",
        grade: "",
        status: "Currently Studying",
        image: "binus-online-logo.webp",
      },
    ],

    frontEndTech: [
      {
        name: "CSS",
        icon: "css-logo.svg",
      },
      {
        name: "HTML",
        icon: "html-logo.svg",
      },
      {
        name: "Javascript",
        icon: "javascript-logo.svg",
      },
      {
        name: "React",
        icon: "react-logo.svg",
      },
      {
        name: "Tailwind",
        icon: "tailwind-logo.svg",
      },
    ],

    backEndTech: [
      {
        name: "Express",
        icon: "express-logo.svg",
      },
      {
        name: "Node JS",
        icon: "nodejs-logo.svg",
      },
      {
        name: "PHP",
        icon: "php-logo.svg",
      },
      {
        name: "Laravel",
        icon: "laravel-logo.svg",
      },

      {
        name: "Python",
        icon: "python-logo.svg",
      },
      {
        name: "PostgreSQL",
        icon: "postgressql-logo.svg",
      },
      {
        name: "MySQL",
        icon: "mysql-logo.svg",
      },
    ],
    experienceHistory: [
      {
        companyName: "Rolling Glory",
        role: "Backend Developer",
        description:
          "Berperan dalam pengembangan sisi server untuk project internal perusahaan, termasuk membangun dan mengembangkan API serta membantu merancang struktur dan kebutuhan database. Selain itu, turut melakukan bug fixing dan maintenance pada beberapa project berbasis client untuk memastikan aplikasi tetap berjalan dengan baik.",
        duration: "Juni 2024 - Oktober 2024",
        skill: [
          "Laravel",
          "NestJS",
          "TypeScript",
          "Node.js",
          "Express.js",
          "TypeORM",
          "Authentication",
          "Authorization",
          "OAuth",
          "Redis",
          "Swagger",
        ],
        icon: "roling-glory-logo.png",
      },
    ],
    certificationHistories: [
      {
        title: "Frontend Developer React HackerRank",
        filePath: "/Certifications/frontend_developer_react certificate.webp",
      },
      {
        title: "JavaScript (Intermediate) HackerRank ",
        filePath: "/Certifications/javascript_intermediate certificate.webp",
      },
      {
        title: "Lolos Pendanaan PKM KC",
        filePath: "/Certifications/PKM-KC.webp",
      },
      {
        title: "Arutala Junior Back End Spring Boot Developer",
        filePath: "/Certifications/springboot.webp",
      },
      {
        title: "SQL (Basic)",
        filePath: "/Certifications/sql_basic certificate.webp",
      },
      {
        title: "Complete Python Developer in 2026: Zero to Mastery",
        filePath:
          "/Certifications/the-complete-python-developer-zero-to-mastery.webp",
      },
      {
        title: "Complete Web Developer in 2026: Zero to Mastery",
        filePath:
          "/Certifications/the-complete-web-developer-zero-to-mastery.webp",
      },
    ],
  },
};

export default lang;
