import { ArticlePage } from "@/components/resources/ArticlePage";
import { buildMetadata } from "@/components/solutions/kit";
import { testAgentVocal as article } from "@/lib/articles";
import { primaryImage } from "@/lib/articles/photos";

export const metadata = buildMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  image: primaryImage(article),
  type: "article",
});

export default function Page() {
  return <ArticlePage article={article} />;
}
