import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="parallel">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
