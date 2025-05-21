import { BiCaretRight, BiCaretLeft } from "react-icons/bi";

export default function SubtitleList({ items }) {
  return (
    <div className="subtitle-list">
      {items.map((text, i) => (
        <p key={i} className="subtitle text-lg leading-relaxed flex items-center gap-2">
          <BiCaretRight className="caret-icon"/> 
            <span>{text}</span>
          <BiCaretLeft className="caret-icon"/>
        </p>
      ))}
    </div>
  );
}