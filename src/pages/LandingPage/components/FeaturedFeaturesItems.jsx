import H2 from "../../../ui/H2";


function FeaturedFeaturesItems({ paraghraf, heading, svg, bgColor }) {
  console.info(bgColor);
  return (
    <div className="rounded-2xl bg-white px-6 py-8  max-w-lg">
      <div className={`inline-block rounded-md px-2 py-2 ${bgColor} `}>
        {svg}
      </div>
      <H2 type="secondry">{heading}</H2>
      <p>{paraghraf}</p>
    </div>
  );
}

export default FeaturedFeaturesItems;
