import Image, { BlankImage } from "../models/image";
import axios, { AxiosResponse } from "axios";

const apiPath: string = "";

export async function getAllImages(): Promise<Image[]> {
  // try {
  //   const response: AxiosResponse<Image[]> = await axios.get<Image[]>(apiPath);
  //   return response.data;
  // } catch (e) {
  //   console.error(e);
  //   return [];
  // }
  return [];
}

export async function getImage(id: string): Promise<Image> {
  // try {
  //   const response: AxiosResponse<Image> = await axios.get<Image>(`${apiPath}/${id}`);
  //   return response.data;
  // } catch (e) {
  //   console.error(e);
  //   return BlankImage();
  // }
  return BlankImage();
}
