import React from "react";
import { Content } from "./data";
import FileEntry from "./file-entry";

interface DirectoryProps {
  content: Content;
}
export default function Directory({ content }: DirectoryProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className={`dir ${open ? 'open': ''}`} onClick={() => setOpen(!open)}>{content.file}</div>
      {open && (
        <div className="dir-content">
          {content.contents?.map((content: Content) => (
            <>
              {content.type === 'file' && <FileEntry content={content} />}
              {content.type === 'dir' && <Directory content={content} />}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
