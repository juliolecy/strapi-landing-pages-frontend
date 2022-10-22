import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Page not found"
      html='<p>Page not found. <a href="/">Go back</a></p>'
    />
  );
};
