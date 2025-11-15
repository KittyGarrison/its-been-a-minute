export const ContactNotes = ({ notes }) => {
  return (
    <div className="my-4 p-3 bg-emerald-50 rounded border border-emerald-200">
      <p className="text-xs text-emerald-700 font-semibold mb-1">NOTES</p>
      <p className="text-sm text-emerald-900">{notes}</p>
    </div>
  )
}