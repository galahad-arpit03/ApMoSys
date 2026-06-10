import { notFound } from "next/navigation";
import NewsroomsPage from "./NewsroomsPage";
import { getNewsroomCategory } from "./newsroomData";

type NewsroomCategoryRouteProps = {
  slug: string;
};

export default function NewsroomCategoryRoute({
  slug,
}: NewsroomCategoryRouteProps) {
  const category = getNewsroomCategory(slug);

  if (!category) {
    notFound();
  }

  return <NewsroomsPage category={category} />;
}
