import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>{profile.name}</p>
      <p>Project Management, Operations and Interdisciplinary Product Development.</p>
    </footer>
  );
}
