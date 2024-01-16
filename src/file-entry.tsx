import { Content } from "./data";


interface FileEntryProps {
  content: Content
}
export default function FileEntry({ content }: FileEntryProps) {
  return <div className="file" key={content.file}>{content.file}</div>
}
