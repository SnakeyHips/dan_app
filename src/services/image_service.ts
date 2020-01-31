import Image from "../models/image";
import axios, { AxiosResponse } from "axios";

const apiPath: string = "/blogs";

export async function GetAllImages(): Promise<Image[]> {
  const response: AxiosResponse<Image[]> = await axios.get<Image[]>(apiPath);
  return response.data;
}

export async function GetImage(id: string): Promise<Image> {
  const response: AxiosResponse<Image> = await axios.get<Image>(`${apiPath}/${id}`);
  return response.data;
}