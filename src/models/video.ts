export default interface Video {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export const BlankVideo = () => {
  return {
    id: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  };
};
