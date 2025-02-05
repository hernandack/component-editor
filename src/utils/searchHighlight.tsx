export const searchHighlight = (text: string, highlight: string) => {
  if (!highlight) return text;

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="bg-teal-500">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};