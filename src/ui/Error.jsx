import { useRouteError } from "react-router-dom";
import Text from "./Text";
// import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <Text>{error.data || error.message}</Text>

      {/* <LinkButton to="-1">&larr; Go back</LinkButton> */}
    </div>
  );
}

export default Error;
