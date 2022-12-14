import { allRoutes } from './routes';
import { Route, Routes } from 'react-router-dom';
import Authorization from '../pages/Authorization';

const AppRouter = () => {
  return (
    <Routes>
      {allRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component}></Route>
      ))}
      <Route path="*" element={<Authorization />} />
    </Routes>
  );
};

export default AppRouter;
