import { createAsyncThunk } from "@reduxjs/toolkit";
import story from "../api/story";

const { getStory, addLike, disLike } = story;

export const getStoryThunk = createAsyncThunk("story/getStory", async () => {
  const res = await getStory();
  return res;
});

export const addLikeThunk = createAsyncThunk("story/addLike", async (data) => {
  const res = await addLike(data);
  return res;
});

export const disLikeThunk = createAsyncThunk("story/addLike", async (data) => {
  const res = await disLike(data);
  return res;
});
