import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Feed from './posts/Feed';
import Media from './posts/Media';

const Posts = () => {
  const { path } = useRouteMatch();

  return (
    <div className="posts">
      <aside>
        <ul>
          <li>
            <NavLink to={`${path}/feed`}>Feed</NavLink>
          </li>
          <li>
            <NavLink to={`${path}/media`}>Media</NavLink>
          </li>
        </ul>
      </aside>
      <div>
        <Switch>
          <Route path={`${path}/feed`} component={Feed} />
          <Route path={`${path}/media`} component={Media} />
          <Redirect path={path} to={`${path}/feed`} />
        </Switch>
      </div>
    </div>
  );
};

export default Posts;
