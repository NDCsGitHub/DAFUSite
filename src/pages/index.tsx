import { Link } from 'waku';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
      <Link to="/menu" className="mt-4 inline-block underline">
        Menu Page
      </Link>
        </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Home Page',
    headline: 'Home Page',
    body: 'Home page body',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
