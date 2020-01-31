import Video, { BlankVideo } from "../models/video";
import axios, { AxiosResponse } from "axios";

const apiPath: string = "";

export async function getAllVideos(): Promise<Video[]> {
  // try {
  //   const response: AxiosResponse<Video[]> = await axios.get<Video[]>(apiPath);
  //   return response.data;
  // } catch (e) {
  //   console.error(e);
  //   return [];
  // }
  return [];
}

export async function getVideo(id: string): Promise<Video> {
  // try {
  //   const response: AxiosResponse<Video> = await axios.get<Video>(`${apiPath}/${id}`);
  //   return response.data;
  // } catch (e) {
  //   console.error(e);
  //   return BlankVideo();
  // }
  return BlankVideo();
}
