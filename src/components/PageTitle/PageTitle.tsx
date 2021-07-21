import React, { ReactElement } from 'react';

interface pageTitle {
  title: string;
}
const PageTitle = ({ title }: pageTitle): ReactElement => (
  <>
    <h1>{title}</h1>
  </>
);

export default PageTitle;
