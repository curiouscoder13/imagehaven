import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full items-center justify-center gap-8 p-4">
      <div className="modal-image flex">
        <img src={image.url} alt={image.name} />
      </div>
      <div className="modal-details flex flex-col bg-white text-black">
        <div className="text-xl font-bold">
          {image.name.split(".").slice(0, -1).join(".")}
        </div>
      </div>
    </div>
  );
}
