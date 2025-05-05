import Skeleton from "../../../components/Skeleton/Skeleton";

interface WithSkeletonProps {
  isLoading: boolean;
}

function withSkeleton<P extends object>(Component: React.ComponentType<P>, type?: SkeletonType, count?: number) {
  return function withSkeleton(props: WithSkeletonProps & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
