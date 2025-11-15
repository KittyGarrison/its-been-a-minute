export const ContactInfo = ({ name, value }) => {
  return (
    <div>
      <p className="text-emerald-700 font-semibold">{name}</p>
      <p className="text-emerald-900">{value}</p>
    </div>
  )
}