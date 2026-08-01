import Section from "../../../ui/Section";
import dataProfile from "./components/dataProfile";
import SkillsItems from "./components/SkillsItems";
import H2 from "./../../../ui/H2";
import H3 from "./../../../ui/H3";
import TopBar from "./../../../ui/TopBar";
import Button from "./../../../ui/Button";
import Progres from "./../../../ui/Progres";
import ExperienceItems from "./components/ExperienceItems";
import EducationItems from "./components/EducationItems";

function Profile() {
  const { profile, aiMatchScore, skills, experience, educations } = dataProfile;

  const { name, headline, availabilityStatus, location, bio, avatarUrl } =
    profile;

  const { title, description, scorePercentage } = aiMatchScore;
  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />
        <div className="grid grid-cols-1 justify-items-center gap-7 lg:grid-cols-3">
          {/* data profile mobile*/}
          <div className="lg:col-span-2 col-span-1 flex flex-col items-center gap-7 lg:hidden">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center rounded-full">
                <img
                  className="inline-block h-36 w-36 rounded-full object-cover ring-3 ring-blue-700 ring-offset-4"
                  src={`${avatarUrl}`}
                  alt={`${name}`}
                />
              </div>
              <div className="mt-4">
                <H2 type="netural">{name}</H2>
              </div>
              <p className="text-xl">{headline}</p>
            </div>
            <div className="flex justify-center gap-3">
              <p className="truncate rounded-2xl bg-blue-500 px-3 py-1 font-semibold text-white">
                {availabilityStatus}
              </p>
              <p className="truncate rounded-2xl bg-slate-300 px-3 py-1 font-semibold text-black">
                <i className="fa-solid fa-location-dot pr-2"></i>
                {location}
              </p>
            </div>
            <p className="c text-center">{bio}</p>
          </div>

          {/* data profile destop*/}
          <div className="col-span-2 hidden w-full flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row lg:flex">
            {/* Kolom Kiri: Foto Profil */}
            <div className="shrink-0">
              <img
                className="h-28 w-28 rounded-full object-cover ring-4 ring-slate-100"
                src={avatarUrl}
                alt={name}
              />
            </div>

            {/* Kolom Kanan: Detail Informasi */}
            <div className="flex flex-1 flex-col">
              {/* Baris 1: Nama dan Lokasi */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <H2 type="netural" className="text-3xl font-bold text-gray-900">
                  {name}
                </H2>

                {/* Pill Lokasi (Otomatis terdorong ke kanan karena justify-between di parent) */}
                <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  <i className="fa-solid fa-location-dot text-slate-500"></i>
                  <span>{location}</span>
                </div>
              </div>

              {/* Baris 2: Headline / Posisi */}
              <div className="mt-1 flex items-center gap-2 text-lg font-medium text-blue-600">
                <i className="fa-solid fa-briefcase"></i>
                <span>{headline}</span>
              </div>

              {/* Baris 3: Label Judul Bio */}
              <p className="mt-6 text-sm font-semibold tracking-wide text-slate-500 uppercase">
                Professional Bio
              </p>

              {/* Baris 4: Teks Bio */}
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {bio}
              </p>
            </div>
          </div>

          {/* Resume */}
          <div className="col-span-1 justify-self-center flex w-full max-w-xl flex-col items-center gap-7 rounded-2xl bg-white p-7  self-center">
            <div className="flex w-full justify-between">
              <H2 type="netural">Resume</H2>
              <p>
                <i className="far fa-file-alt self-center text-2xl text-purple-500"></i>
              </p>
            </div>

            <div className="flex w-full justify-around rounded-2xl bg-blue-50 px-3 py-4">
              <p className="self-center rounded-2xl bg-white">
                <i className="fa-regular fa-file-pdf text-2xl text-blue-600"></i>
              </p>

              <div className="flex flex-col flex-wrap">
                <p className="xl:w-min-0 xs:min-w-0 w-24 truncate font-bold lg:w-20">
                  Budi_Santoso_Cv.Pdf
                </p>
                <p className="xl:w-min-0 xs:min-w-0 w-24 truncate lg:w-20">
                  {" "}
                  Update 2 weeks ego
                </p>
              </div>

              <p className="self-center">
                <i className="fas fa-download text-2xl"></i>
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 self-start">
              <div className="flex justify-between">
                <p className="self-start text-start font-semibold capitalize">
                  All parsing complate
                </p>
                <span>100%</span>
              </div>
              <Progres progressPercentage={100} />
              <Button type="generalSecondary">
                <i className="fas fa-upload"></i> Uploud New Version
              </Button>
            </div>
          </div>
        </div>

        {/* Ai match score */}

        <div className="flex justify-between gap-5 rounded-2xl bg-white p-7 lg:hidden">
          <div className="w-full min-w-0 flex-1">
            <H2 type="netural">
              {" "}
              <div className="flex gap-2">
                <i class="fa-solid fa-robot pr-2 text-2xl text-purple-600"></i>
                <p className="truncate"> {title}</p>
              </div>
            </H2>
            <p className="line-clamp-2">{description}</p>
          </div>
          <div className="self-center text-end">
            <p className="inline-block rounded-full text-xl font-bold text-blue-500 ring-4 ring-offset-8">
              {scorePercentage}%
            </p>
          </div>
          <div className="col-span-2">
            <Progres progressPercentage={scorePercentage} />
          </div>
        </div>

        {/* Skills */}
        <div className="">
          <H2 type="secondry">Keahlian Utama</H2>
          <div className="mt-7 flex flex-wrap gap-4">
            {skills.primary.map((skill) => (
              <SkillsItems skill={skill} />
            ))}
            <p className="inline-block rounded-md bg-slate-50 p-2 text-blue-500">
              +{skills.additionalCount} Lainnya
            </p>
          </div>
        </div>

        {/* experience */}
        <div>
          <H2 type="secondry">Experience</H2>
          <div className="mt-7">
            {experience.map((item) => (
              <ExperienceItems
                key={item.id}
                role={item.role}
                company={item.company}
                period={item.period}
                description={item.description}
                isCurrent={item.isCurrent}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <H2 type="secondry">Pendidikan</H2>
          <div className="mt-7 space-y-5">
            {educations.map((education) => (
              <EducationItems
                institution={education.institution}
                degree={education.degree}
                period={education.period}
                gpa={education.gpa}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Profile;
