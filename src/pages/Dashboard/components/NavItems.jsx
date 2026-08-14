import Text from "../../../ui/Text";

function NavItems({ icon, description }) {
  return (
    <div className="flex h-16 w-16 flex-col gap-1 p-2 font-bold">
      <i class={`fa-solid self-center ${icon} `}></i>
      <Text className="text-center text-xs font-medium">{description}</Text>
    </div>
  );
}

export default NavItems;
