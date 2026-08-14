const dataCourse = {
  courses: [
    {
      titleCourse: "HTML & CSS Dasar",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500",
      status: "completed",
      steps: [
        {
          step: 1,
          title: "Dasar HTML5",
          status: "completed",
          description: "Memahami struktur DOM dan Semantic HTML5.",
          content: `DOM (Document Object Model) adalah representasi struktur pohon dalam memori browser yang mengubah seluruh dokumen HTML menjadi objek-objek tersendiri sehingga dapat diakses, diubah, ditambahi, atau dihapus secara dinamis menggunakan JavaScript. Sementara itu, Semantic HTML adalah praktik penulisan kode HTML menggunakan tag-tag yang memiliki arti dan tujuan spesifik sesuai fungsinya (seperti <header>, <nav>, <main>, <article>, dan <footer>) menggantikan penggunaan tag generik <div> tanpa makna, yang berguna untuk meningkatkan peringkat SEO di mesin pencari, memberikan navigasi yang jelas bagi perangkat pembaca layar (screen reader) untuk pengidap disabilitas, serta membuat struktur kode lebih rapi dan mudah dipelihara oleh developer.`,
        },
        {
          step: 2,
          title: "CSS Flexbox & Grid",
          status: "completed",
          description: "Menguasai teknik tata letak modern yang responsif.",
          content:
            "Detail materi Flexbox layout, Grid template, dan media queries untuk tampilan mobile-friendly.",
        },
        {
          step: 3,
          title: "CSS Responsi & Media Queries",
          status: "in_progress",
          description:
            "Merancang tampilan web yang adaptif di berbagai ukuran layar.",
          content:
            "Materi mencakup penggunaan Meta Viewport, Breakpoint standar (Mobile, Tablet, Desktop), Fluid Typography (rem/em/vw), serta pendekatan Mobile-First Design menggunakan CSS Media Queries.",
        },
        {
          step: 4,
          title: "SASS / SCSS & Metodologi BEM",
          status: "locked",
          description:
            "Mengorganisir kode CSS berskala besar agar rapi dan reusable.",
          content:
            "Mempelajari CSS Preprocessor (SASS/SCSS) seperti Variables, Nesting, Mixins, dan Modules, dikombinasikan dengan arsitektur penamaan kelas BEM (Block Element Modifier) untuk efisiensi styling.",
        },
      ],
    },
    {
      titleCourse: "JavaScript Modern (ES6+)",
      img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500",
      status: "in_progress",
      steps: [
        {
          step: 1,
          title: "ES6 Syntax & Concepts",
          status: "completed",
          description: "Mempelajari Scope, Arrow Functions, Destructuring.",
          content:
            "Detail materi let/const, arrow functions, destructuring assignment, dan Spread/Rest operator.",
        },
        {
          step: 2,
          title: "Async JS & Fetch API",
          status: "in_progress",
          description:
            "Memahami Promises, Async/Await, dan integrasi REST API.",
          content:
            "Detail materi penanganan asynchronous code, penggunaan Fetch API, dan error handling menggunakan try...catch.",
        },
        {
          step: 3,
          title: "JavaScript Modules & Tooling",
          status: "locked",
          description: "Pengenalan ES Modules dan bundler modern.",
          content:
            "Detail materi import/export modules, skrip bundling dasar, dan pengenalan NPM.",
        },
      ],
    },
    {
      titleCourse: "Tailwind CSS Utility First",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
      status: "in_progress",
      steps: [
        {
          step: 1,
          title: "Instalasi & Konfigurasi",
          status: "completed",
          description: "Mempersiapkan Tailwind CSS dalam project.",
          content:
            "Detail materi instalasi via PostCSS, konfigurasi tailwind.config.js, dan directive @tailwind.",
        },
        {
          step: 2,
          title: "Responsive Layout & Styling",
          status: "in_progress",
          description: "Menggunakan utility class untuk layouting cepat.",
          content:
            "Detail materi breakpoint responsif (sm, md, lg), Flexbox/Grid di Tailwind, dan custom typography.",
        },
      ],
    },
    {
      titleCourse: "React JS Fundamentals",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      status: "locked",
      steps: [
        {
          step: 1,
          title: "JSX & Components",
          status: "locked",
          description: "Pengenalan struktur komponen di React.",
          content:
            "Detail materi pembuatan Functional Component, aturan JSX, dan props passing.",
        },
        {
          step: 2,
          title: "State & Lifecycle Hooks",
          status: "locked",
          description: "Mengelola state aplikasi dengan React Hooks.",
          content:
            "Detail materi useState, useEffect untuk side-effects, dan penanganan event.",
        },
      ],
    },
    {
      titleCourse: "Git & GitHub Workflow",
      img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500",
      status: "completed",
      steps: [
        {
          step: 1,
          title: "Dasar Version Control",
          status: "completed",
          description: "Mengelola revisi kode dengan perintah dasar Git.",
          content:
            "Detail materi git init, add, commit, log, dan konsep staging area.",
        },
        {
          step: 2,
          title: "Collaboration & Remote Repository",
          status: "completed",
          description: "Bekerja sama menggunakan GitHub.",
          content:
            "Detail materi git push, pull, branching strategy, handling merge conflicts, dan Pull Request.",
        },
      ],
    },
  ],
};

export default dataCourse;
