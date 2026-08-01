export function getDate() {
  const date = new Date();
  const day = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
    date,
  );
  const tanggal = date.getDate();
  const month = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
    date,
  );
  const year = date.getFullYear();

  const fullDate = `${day}, ${tanggal} ${month} ${year}`;
  return fullDate;
}

export function validateName(name) {
  if (!name) {
    return "Nama tidak boleh kosong.";
  }

  // Jika lolos semua validasi, kembalikan string kosong (artinya tidak ada error)
  return "";
}

export function validateEmail(email) {
  if (!email) {
    return "Alamat email tidak boleh kosong.";
  }

  if (email.includes(" ")) {
    return "Alamat email tidak boleh diawali, diakhiri, atau mengandung spasi.";
  }

  if (!email.endsWith("@gmail.com")) {
    return "Format email tidak valid. Harap gunakan akhiran domain '@gmail.com'.";
  }

  // Jika lolos semua validasi, kembalikan string kosong (artinya tidak ada error)
  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Kata sandi tidak boleh kosong.";
  }

  if (password.length < 8) {
    return "Kata sandi harus terdiri dari minimal 8 karakter.";
  }

  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    return "Kata sandi harus mengandung setidaknya satu angka.";
  }
  // Jika lolos semua validasi, kembalikan string kosong (artinya tidak ada error)
  return "";
}
