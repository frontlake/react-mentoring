import React from 'react';
import { Form, Button } from 'react-bulma-components';
const { Input, Textarea, Control } = Form;

const FormComponent = ({ createComment }) => {
  const [comment, setComment] = React.useState({ fullName: '', email: '', message: '' });

  const addComment = (e) => {
    e.preventDefault();

    const newComment = {
      ...comment,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('ru-Ru'),
      avatar: 'https://i.pravatar.cc/50',
    };
    createComment(newComment);
    setComment({ fullName: '', email: '', message: '' });
  };

  return (
    <form onSubmit={addComment}>
      <Form.Field mt={4}>
        <Control mb={4}>
          <Input
            type="text"
            size="medium"
            placeholder="Имя"
            value={comment.fullName}
            required
            onChange={(e) => setComment({ ...comment, fullName: e.target.value })}
          />
        </Control>
        <Control mb={4}>
          <Input
            type="email"
            size="medium"
            placeholder="Email"
            value={comment.email}
            required
            onChange={(e) => setComment({ ...comment, email: e.target.value.trim() })}
          />
        </Control>
        <Control mb={4}>
          <Textarea
            name="comment"
            size="medium"
            placeholder="Сообщение..."
            value={comment.message}
            required
            onChange={(e) => setComment({ ...comment, message: e.target.value })}></Textarea>
        </Control>
        <Button submit color="info" textTransform="uppercase" fullwidth>
          Отправить
        </Button>
      </Form.Field>
    </form>
  );
};

export default FormComponent;
