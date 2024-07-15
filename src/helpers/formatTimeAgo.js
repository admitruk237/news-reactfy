export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondPast = (now.getTime() - date.getTime()) / 1000;
  if (secondPast < 60) {
    return `${Math.floor(secondPast)}s Ago`;
  }
  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)}m Ago`;
  }
  if (secondPast < 86400) {
    return `${Math.floor(secondPast / 3600)}h Ago`;
  }
  if (secondPast < 86400) {
    return `${Math.floor(secondPast / 86400)}days Ago`;
  }
};
