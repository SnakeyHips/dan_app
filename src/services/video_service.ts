import Video from "../models/video";
import axios, { AxiosResponse } from "axios";

const apiPath: string = "/blogs";

export async function GetAllVideos(): Promise<Video[]> {
  const response: AxiosResponse<Video[]> = await axios.get<Video[]>(apiPath);
  return response.data;
}

export async function GetVideo(id: string): Promise<Video> {
  const response: AxiosResponse<Video> = await axios.get<Video>(`${apiPath}/${id}`);
  return response.data;
}