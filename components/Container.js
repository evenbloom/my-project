import classNames from "classnames";

const Container = ({ children, className }) => (
  <div className={classNames("max-w-[120rem] mx-auto px-8", className)}>
    {children}
  </div>
);

export default Container;