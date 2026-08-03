const initialState = {
  // Menyimpan seluruh isi objek "data" dari respons API
  profileData: {
    id: null,
    name: "",
    email: "",
    // Bagian relasi "profile"
    profile: {
      education_background: null,
      interests: null,
      portofolio_link: null,
      work_experience: null,
    },
    // Bagian relasi "skills"
    skills: [],
  },

  // Status untuk mengatur animasi loading saat fetch data
  isLoading: false,

  // Menyimpan pesan error jika API gagal
  error: null,

  // (Opsional) Menyimpan pesan sukses dari API
  message: "",
};
