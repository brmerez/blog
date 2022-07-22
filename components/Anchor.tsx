import Link from "next/link";

interface IAnchor {
  to: string;
  children: React.ReactNode[] | React.ReactNode;
  [key: string]: any;
}

export default function Anchor({ to, children, ...props }: IAnchor) {
  return (
    <Link href={to}>
      <a href={to} {...props}>
        {children}
      </a>
    </Link>
  );
}
