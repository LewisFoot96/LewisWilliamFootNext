import Image from "next/image";

export default function BlogPost() {
  return (
    <div>
      <Image
        src="images/great-north-run.jpg"
        width={800}
        height={600}
        alt="Post 1"
      />
    </div>
  );
}
