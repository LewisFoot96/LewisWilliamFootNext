import BlogPost from "../components/BlogPost";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <h2>Blog Post</h2>
      <BlogPost />
      <Button variant="text">Add item</Button>
    </div>
  );
}
