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
      id: 3,
      kategori: "Nama Pengguna",
      status: "Ubah nama", // Khusus untuk nama dan foto
      icon: "fa-user",
    },
    {
      id: 4,
      kategori: "Alamat Email", // Menjadi menu tersendiri
      status: "Ubah alamat email",
      icon: "fa-envelope", // Gunakan icon amplop FontAwesome
    },
    {
      id: 5,
      kategori: "Keamanan Pengguna",
      status: "Ubah kata sandi",
      icon: "fa-lock",
    },
  ],
};

export default dataSetting;
