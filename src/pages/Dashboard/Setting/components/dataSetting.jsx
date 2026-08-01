const dataSetting = {
  profilPengguna: {
    namaLengkap: "Budi Santoso",
    email: "budi.santoso@example.com",
    fotoProfil:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Representasi untuk tombol "Ganti Foto"
  },
  keamanan: {
    kataSandiSaatIni: "********",
    kataSandiBaru: "", // Placeholder untuk input "Masukkan kata sandi baru"
  },
  pengaturanLainnya: [
    {
      id: 1,
      kategori: "Notifikasi",
      status: "Email & Push",
      icon: "fa-bell", // Estimasi icon FontAwesome
    },
    {
      id: 2,
      kategori: "Tampilan",
      status: "Mode Terang",
      icon: "fa-palette",
    },
    {
      id: 3,
      kategori: "Privasi & Data",
      status: "Kelola izin",
      icon: "fa-shield-halved",
    },
  ],
};

export default dataSetting;
