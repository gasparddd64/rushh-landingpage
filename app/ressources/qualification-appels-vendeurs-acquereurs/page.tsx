import { ArticlePage } from "@/components/resources/ArticlePage";
import { buildMetadata } from "@/components/solutions/kit";
import { qualification as article } from "@/lib/articles";

export const metadata = buildMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  image: article.cover,
  type: "article",
});

export default function Page() {
  return <ArticlePage article={article} />;
}
