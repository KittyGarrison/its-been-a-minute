// Format date for display
export const formatDate = (dateString?: string) => {
  if (!dateString) return "—";
  // Parse date string in UTC to avoid timezone issues
  const [year, month, day] = dateString.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
};
