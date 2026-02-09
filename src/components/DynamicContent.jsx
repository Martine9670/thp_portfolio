import TitleBlock from "./blocks/TitleBlock";
import TextBlock from "./blocks/TextBlock";

export default function DynamicContent({ content }) {
  return (
    <>
      {content.map((block) => {
        switch (block.__component) {
          case "shared.title-block":
            return <TitleBlock key={block.id} data={block} />;

          case "shared.text-block":
            return <TextBlock key={block.id} data={block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
