import React from 'react';
import '../tutorial-5/bulma.min.css';

import { Container, Box, Heading } from 'react-bulma-components';

import CardComponent from './components/CardComponent';
import FormComponent from './components/FormComponent';

const App = () => {
  const [comments, setComments] = React.useState([]);

  const getComments = () => {
    if (localStorage.getItem('comments') !== null) {
      setComments(JSON.parse(localStorage.getItem('comments')));
    }
  };

  React.useEffect(getComments, []);

  const createComment = (newComment) => {
    const newComments = [...comments, newComment];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  const deleteComment = (id) => {
    const newComments = comments.filter((item) => item.id !== id);
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  return (
    <Container style={{ width: '600px' }}>
      <Box>
        <Heading renderAs="h2">
          Отзывы: {comments.length > 0 ? '' : 'будут когда их напишут'}
        </Heading>
        {comments.map((comment) => {
          return (
            <CardComponent
              key={comment.id}
              fullName={comment.fullName}
              message={comment.message}
              avatar={comment.avatar}
              createdAt={comment.createdAt}
              deleteComment={deleteComment}
              id={comment.id}
            />
          );
        })}
      </Box>
      <Box>
        <Heading textWeight="bold">Обратная связь:</Heading>
        <FormComponent createComment={createComment} />
      </Box>
    </Container>
  );
};

export default App;
