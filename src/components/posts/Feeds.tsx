import { Link, useRouteMatch } from 'react-router-dom';

const Feeds = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${path}/1`}>Feed 1</Link>
        </li>
        <li>
          <Link to={`${path}/2`}>Feed 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Feeds;
