import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full items-center justify-center gap-8 p-4">
      <div className="modal-image flex">
        <img src={image.url} alt={image.name} />
      </div>
      <div className="modal-details flex flex-col bg-white text-black">
        <div className="p-4 text-center text-lg font-semibold">
          {image.name.split(".").slice(0, -1).join(".")}
        </div>
        <div className="flex flex-col p-4">
          <span className="font-semibold">Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-4">
          <span className="font-semibold">Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
