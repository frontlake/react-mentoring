import { Card, Image, Media, Heading, Content, Button } from 'react-bulma-components';

const CardComponent = ({ fullName, avatar, message, createdAt, deleteComment, id }) => {
  return (
    <Card shadowless>
      <Card.Content>
        <Button.Group align="right" marginless>
          <Button
            remove
            size="small"
            onClick={() => {
              deleteComment(id);
            }}></Button>
        </Button.Group>
        <Media>
          <Media.Item align="left" mr={4} marginless>
            <Image src={avatar} alt="some randow person" size={64} rounded />
          </Media.Item>
          <Media.Item>
            <Heading renderAs="h2" size={4} marginless mb={2}>
              {fullName}
            </Heading>
            <Content size="medium" textColor="grey">
              {message}
            </Content>
            <Content size="small" textColor="grey-light" align="right">
              {createdAt}
            </Content>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
