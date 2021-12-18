import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/something">Something Else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
