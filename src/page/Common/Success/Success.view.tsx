import { SuccessProps } from "./Success.props";
import { Container } from "./Success.style";
import Text from "../../../component/Text";

const SuccessView = (props: SuccessProps) => {
  const {} = props;

  return (
    <Container>
      <Text>Success</Text>
    </Container>
  );
};

export default SuccessView;
