export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Item: {params.slug}</div>;
}
