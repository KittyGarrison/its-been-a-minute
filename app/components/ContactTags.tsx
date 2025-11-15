import { ContactTag } from "./ContactTag"

export const ContactTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map((tag) => <ContactTag tag={tag} key={tag} />)}
    </div>
  )
}