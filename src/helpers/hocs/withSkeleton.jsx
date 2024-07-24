import Skeleton from '../../components/Skeleton/Skeleton';

function withSkeleton(Copmponent, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Copmponent {...restProps} />;
  };
}

export default withSkeleton;
