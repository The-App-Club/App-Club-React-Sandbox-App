const StatusMessage = ({ isFetching, isFetchingNextPage }) => {
  return (
    <div>
      {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
    </div>
  );
};

export default StatusMessage;
