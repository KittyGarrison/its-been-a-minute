export const ContactName = ({firstName, lastName}) => {
  return (
    <h2 className="text-2xl font-bold text-emerald-900 mb-1">
      {firstName} {lastName}
    </h2>
  )
}