import { titleText } from './PageTitle.module.css'

export default function PageTitle({ title }) {
  return <h1 className={titleText}>{title}</h1>
}
