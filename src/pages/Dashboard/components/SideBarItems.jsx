function SideBarItems({ icon, description }) {
  return (
    <div className="flex  gap-3 p-2 font-bold">
      <i class={`fa-solid text-xl self-center ${icon}`}></i>
      <p className="self-center text-center text-xs font-medium">
        {description}
      </p>
    </div>
  );
}

export default SideBarItems;
