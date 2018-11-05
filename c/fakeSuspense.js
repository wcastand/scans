export default ({ loading, fallback, children, ...props }) =>
  loading ? fallback : children({ loading, ...props })
