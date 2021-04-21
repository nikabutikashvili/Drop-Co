import * as React from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";

type SomeComponentProps = RouteComponentProps;

const ScrollToTop: React.FC<SomeComponentProps> = ({ history }) => {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
