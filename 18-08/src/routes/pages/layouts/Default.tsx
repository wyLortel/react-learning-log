import { NavLink, Outlet } from 'react-router';

export default function Default() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? 'isActive' : '',
                  isPending ? 'isPending' : '',
                  isTransitioning ? 'isTransitioning' : '',
                ].join(' ')
              }
              viewTransition
            >
              about
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
