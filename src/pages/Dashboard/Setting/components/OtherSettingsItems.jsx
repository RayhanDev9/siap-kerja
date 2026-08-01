function OtherSettingsItems({ kategori, status, icon }) {
  return (
    <div className="flex gap-3 border-b border-slate-200 py-7">
      <i className={`fa-solid ${icon} self-center text-2xl`}></i>
      <div>
        <p className="font-semibold">{kategori}</p>
        <p className="font-light">{status}</p>
      </div>
    </div>
  );
}

export default OtherSettingsItems;
