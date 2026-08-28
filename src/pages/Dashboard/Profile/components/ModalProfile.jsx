import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

function ModalProfile({ isOpen, onClose, initialData, onSubmit }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (isOpen && initialData) {
  //     setName(  "");
  //     setBio("");
  //     setPhotoPreview( "");
  //     setPhotoFile(null);
  //     setIsSubmitting(false);
  //   }
  // }, [isOpen, initialData]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Ubah tombol jadi Menyimpan...

    try {
      // Tunggu proses pengiriman data selesai
      await onSubmit({ name, bio, photo: photoFile });

      setName("");
      setBio("");
      setPhotoPreview("");
      setPhotoFile(null);
      // Jika berhasil, matikan loading (modal otomatis tertutup dari Profile.jsx)
      setIsSubmitting(false);
    } catch (error) {
      // Jika gagal/error, matikan loading agar user bisa klik lagi
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px]" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-900">
                <div className="mb-6 flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold text-slate-900 dark:text-white"
                  >
                    Edit Profil
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10"
                  >
                    <i className="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Foto Profil Berada di Tengah */}
                  <div className="flex w-full flex-col items-center justify-center pb-4">
                    <input
                      type="file"
                      accept="image/*"
                      id="photo-upload"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                    <label
                      htmlFor="photo-upload"
                      className="group flex cursor-pointer flex-col items-center gap-3"
                    >
                      <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-slate-100 transition-colors group-hover:bg-slate-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                        {photoPreview ? (
                          <>
                            <img
                              src={photoPreview}
                              alt="Preview"
                              className="h-full w-full object-cover"
                            />
                            {/* Overlay Hitam + Ikon Kamera saat di-hover */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                              <i className="fa-solid fa-camera-rotate text-2xl text-white"></i>
                            </div>
                          </>
                        ) : (
                          <i className="fa-solid fa-camera-rotate text-4xl text-slate-400 dark:text-slate-500"></i>
                        )}
                      </div>
                      <span className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                        Unggah Foto
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nama Lengkap
                    </label>
                    <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-white/15 dark:bg-black">
                      <div className="flex px-3 text-slate-400">
                        <i className="fa-regular fa-user"></i>
                      </div>
                      <input
                        type="text"
                        value={name}
                        placeholder={initialData.fullName}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent py-2.5 pr-3 text-sm text-slate-900 outline-none dark:text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Professional Bio
                    </label>
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-white/15 dark:bg-black">
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        placeholder={initialData.description}

                        className="w-full resize-none bg-transparent p-3 text-sm text-slate-900 outline-none dark:text-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="rounded-xl bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                    >
                      Tutup
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalProfile;
