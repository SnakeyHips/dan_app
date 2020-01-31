import Video, { BlankVideo } from "../models/video";
import axios, { AxiosResponse } from "axios";

const apiPath: string = "/blogs";

export async function getAllVideos(): Promise<Video[]> {
  try {
    const response: AxiosResponse<Video[]> = await axios.get<Video[]>(apiPath);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getVideo(id: string): Promise<Video> {
  try {
    const response: AxiosResponse<Video> = await axios.get<Video>(`${apiPath}/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return BlankVideo();
  }
}
