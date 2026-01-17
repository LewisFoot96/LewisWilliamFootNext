import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Blog Post</h2>
      <Image
        src="images/great-north-run.jpg"
        width={800}
        height={600}
        alt="Post 1"
      />
    </div>
  );
}
