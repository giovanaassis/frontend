import { templates } from "@/lib/templates";

export default async function SketchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Template = templates[slug as keyof typeof templates];

  if (!Template) {
    return <h1>Template não encontrado</h1>;
  }

  return (
    <div className="text-black">
      <Template />
    </div>
  );
}
