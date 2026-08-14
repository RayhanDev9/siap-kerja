import Text from "./Text";

function Footer() {
  return (
    <footer className="hidden flex-col justify-between gap-10 bg-white px-8 py-10 md:flex-row md:items-start lg:flex dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      {/* Bagian Kiri: Logo dan Deskripsi */}
      <div className="flex max-w-sm flex-col gap-3">
        <h4 className="text-2xl font-extrabold text-blue-800 dark:text-blue-500">SiapKerja</h4>
        <Text className="text-gray-600">
          &copy; 2024 SiapKerja. Menavigasi masa depan Anda dengan kecerdasan.
        </Text>
      </div>

      {/* Bagian Kanan: Kolom Menu */}
      {/* Gunakan gap untuk memberi jarak antar kolom, bukan padding */}
      <div className="flex gap-16 md:gap-32">
        {/* Kolom 1 */}
        <div className="flex flex-col gap-3 text-gray-600">
          <Text className="cursor-pointer hover:text-blue-800">
            Kebijakan Privasi
          </Text>
          <Text className="cursor-pointer hover:text-blue-800">
            Ketentuan Layanan
          </Text>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-col gap-3 pr-24 text-gray-600">
          <Text className="cursor-pointer hover:text-blue-800">
            Pusat Bantuan
          </Text>
          <Text className="cursor-pointer hover:text-blue-800">
            Hubungi Kami
          </Text>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
