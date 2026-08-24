import Text from "../../../ui/Text";

function SideBarItems({ icon, description }) {
  return (
    <div className="flex gap-3 p-2 font-bold">
      <i className={`fa-solid self-center text-lg ${icon}`}></i>
      <p className="text-base self-center text-center font-medium ">
        {description}
      </p>
    </div>
  );
}

export default SideBarItems;
