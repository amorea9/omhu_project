import { useRouter } from "next/router";

function Link({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const router = useRouter();

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default Link;
