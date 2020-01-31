export default interface Image {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export const BlankImage = () => {
  return {
    id: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  };
};
