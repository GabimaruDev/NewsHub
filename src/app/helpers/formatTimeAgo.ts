export const formatTimeAgo = (dateSting: string): string => {
  const now = new Date();
  const date = new Date(dateSting);
  const secondPast = (now.getTime() - date.getTime()) / 1000;

  if (secondPast <= 60) {
    return `${Math.floor(secondPast)}s ago`;
  } else if (secondPast <= 3600) {
    return `${Math.floor(secondPast / 60)}m ago`;
  } else if (secondPast <= 86400) {
    return `${Math.floor(secondPast / 3600)}h ago`;
  } else {
    const day = Math.floor(secondPast / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
