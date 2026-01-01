export interface ArticleModel {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface GalleryItemModel {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
}
