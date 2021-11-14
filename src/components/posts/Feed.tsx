import { useHistory, useParams } from 'react-router';

const Feed = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  return (
    <div>
      <h1>Feed {id}</h1>
      <div>
        feed id: {id}
      </div>
      <footer>
        <button onClick={() => history.goBack()}>Back to Lists</button>
      </footer>
    </div>
  );
};

export default Feed;
