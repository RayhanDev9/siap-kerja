import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import TopBar from "../../../ui/TopBar";
import Button from "../../../ui/Button";
import HeaderSection from "./../components/HeaderSection";
import dataSetting from "./components/dataSetting";
import OtherSettingsItems from "./components/OtherSettingsItems";

function Setting() {
  const { profilPengguna, keamanan, pengaturanLainnya } = dataSetting;
  const { namaLengkap, email, fotoProfil } = profilPengguna;

  const { kataSandiBaru, kataSandiSaatIni } = keamanan;

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        {/* Top bar Lg */}
        <TopBar placeholder="cari peran, keahlian, atau industri" isSerch={false}/>
        {/* Header Section */}
        <HeaderSection
          title="Pengaturan"
          description="Kelola preferensi akun dan aplikasi anda"
        ></HeaderSection>

        {/* Profile Penggunna */}
        <div className="space-y-5 rounded-2xl bg-white p-7">
          {/* Heading profile */}
          <H2 type="secondry">
            <i class="fa-solid fa-user pr-3 text-blue-400"></i>Profile Penggunna
          </H2>
          {/* foto profile and data diri */}
          <div className="flex gap-6">
            <img
              className="inline-block h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24 md:h-26 md:w-28 lg:h-32 lg:w-32"
              src={`${fotoProfil}`}
              alt={`${namaLengkap}`}
            />
            <div className="min-w-0 self-center">
              <p className="md:text-md truncate">{namaLengkap}</p>
              <p className="md:text-md w-full truncate">{email}</p>
              <button className="md:text-md font-semibold text-blue-900">
                Ganti foto
              </button>
            </div>
          </div>

          {/* input nama lengkap disable */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="namaLengkap" className="text-sm font-semibold">
              Nama Lengkap
            </label>
            <input
              type="text"
              name=""
              defaultValue={namaLengkap}
              id=""
              placeholder=""
              disabled={true}
              className="rounded-lg border border-slate-300 px-3 py-1.5 outline-none"
            />
          </div>
          {/* input email disable */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="namaLengkap" className="text-sm font-semibold">
              Gmail
            </label>
            <input
              type="text"
              name=""
              defaultValue={email}
              id=""
              placeholder=""
              disabled={true}
              className="rounded-lg border border-slate-300 px-3 py-1.5 outline-none"
            />
          </div>
          {/* Button */}
          <div className="inline-block">
            <Button type="generalPrimary">Simpan Perubahan</Button>
          </div>
        </div>

        {/* Keamanan Penggunna */}
        <div className="space-y-5 rounded-2xl bg-white p-7">
          {/* Heading profile */}
          <H2 type="secondry">
            <i class="fa-solid fa-lock pr-3 text-blue-400"></i>Keamanan
            Penggunna
          </H2>

          {/* input  Kata Sandi Saat Ini */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="namaLengkap" className="text-sm font-semibold">
              Kata Sandi Saat Ini
            </label>
            <input
              type="text"
              name=""
              defaultValue={kataSandiSaatIni}
              id=""
              placeholder=""
              disabled={true}
              className="rounded-lg border border-slate-300 px-3 py-1.5 outline-none"
            />
          </div>
          {/* input Kata Sandi Baru */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="namaLengkap" className="text-sm font-semibold">
              Kata Sandi Baru
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Masukan Kata Sandi Baru"

              className="rounded-lg border border-slate-300 px-3 py-1.5 outline-none"
            />
          </div>
          {/* Button */}
          <div className="inline-block">
            <Button type="generalSecondary">Simpan Perubahan</Button>
          </div>
        </div>

        {/* Pengaturan lainnya */}
        <div className="rounded-2xl bg-white px-7">
          {pengaturanLainnya.map((item) => (
            <OtherSettingsItems
              kategori={item.kategori}
              status={item.status}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Setting;
