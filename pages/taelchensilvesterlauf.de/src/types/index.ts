export interface Painter {
  id: string;
  name: string;
  bio: string;
  profileImage?: string;
}

export interface Painting {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  imageUrl: string;
  description?: string;
}
