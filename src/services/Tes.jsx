// function Tes() {
//   const tombolCekConsole = () => {
//     console.log("🚀 Sedang menembak API Laravel...");

//     // Menembak rute POST /login
//     fetch('http://127.0.0.1:8000/api/v1/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       // Data dummy yang dikirim langsung ke backend
//       body: JSON.stringify({
//         email: 'rayhan@example.com',
//         password: 'password123'
//       })
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Tampilkan hasil murni di Console
//         console.log("✅ Balasan dari Backend:", data);
//       })
//       .catch((error) => {
//         console.error("❌ Gagal nyambung ke API:", error);
//       });
//   };

//   return (
//     <div className="p-10 text-center">
//       <button
//         onClick={tombolCekConsole}
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
//       >
//         Tembak API (Cek Console)
//       </button>
//       <p className="mt-4 text-sm text-gray-500">
//         Klik tombol di atas, lalu buka <strong>Inspect Element ➡️ tab Console</strong>.
//       </p>
//     </div>
//   );
// }

// export default Tes;

// function Tes() {
//   const tombolTesRegister = () => {
//     console.log("🚀 Sedang mendaftarkan user baru...");

//     fetch('http://127.0.0.1:8000/api/v1/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         name: 'Muhamad Rayhan',
//         email: 'rayhan@example.com',
//         password: 'password123',
//         password_confirmation: 'password123'
//       })
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("✅ Balasan Register dari Backend:", data);
//       })
//       .catch((error) => {
//         console.error("❌ Gagal nyambung ke API:", error);
//       });
//   };

//   return (
//     <div className="p-10 text-center">
//       <button
//         onClick={tombolTesRegister}
//         className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
//       >
//         Tes Register (Cek Console)
//       </button>
//     </div>
//   );
// }

// export default Tes;

function Tes() {
  const tombolTesLogin = () => {
    console.log("🚀 Sedang mencoba Login...");

    fetch("http://127.0.0.1:8000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Mengirim email dan password yang baru saja didaftarkan
      body: JSON.stringify({
        email: "rayhan@example.com",
        password: "password123",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ Balasan Login dari Backend:", data);
      })
      .catch((error) => {
        console.error("❌ Gagal nyambung ke API:", error);
      });
  };

  return (
    <div className="p-10 text-center">
      <button
        onClick={tombolTesLogin}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Tes Login (Cek Console)
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Klik dan cek Console. Kali ini tidak akan dibilang salah lagi!
      </p>
    </div>
  );
}

export default Tes;
