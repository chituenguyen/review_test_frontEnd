import React, { useEffect, useState } from "react";
import Title from "./Title";
import Container from "../../layouts/Container/Container";
import Button from "../Button/Button";
import { useCookies } from "react-cookie";
import { addLikeThunk, disLikeThunk } from "../../redux/action/storyAction";
import { useDispatch } from "react-redux";

const Content = ({ data }) => {
  const dispatch = useDispatch();
  const [story, setStory] = useState({ title: "", content: "" });
  const [cookies, setCookie] = useCookies(["story_id"]);
  const [storyID, setStoryID] = useState(
    cookies.story_id ? cookies.story_id : []
  );
  const [totalStory, setTotalStory] = useState(
    storyID === [] ? data : data.filter((obj) => !storyID.includes(obj.id))
  );
  console.log(totalStory);
  useEffect(() => {
    if (totalStory.length === 0) {
      setStory({
        id: -1,
        title: "",
        content: "That's all the jokes for today! Come back another day!",
      });
    } else {
      let randomIndex = Math.floor(Math.random() * totalStory.length);
      setStory(totalStory[randomIndex]);
    }
  }, [totalStory]);
  const handleLikePost = (id) => {
    const data = totalStory.find((obj) => obj.id === id);
    dispatch(addLikeThunk({ ...data, like: data.like + 1 }));
    const new_data = totalStory.filter((obj) => obj.id !== id);
    setTotalStory(new_data);
    setStoryID((prevStoryID) => [...prevStoryID, id]);
  };
  const handleDisLikePost = (id) => {
    const data = totalStory.find((obj) => obj.id === id);
    dispatch(disLikeThunk({ ...data, dislike: data.dislike + 1 }));
    const new_data = totalStory.filter((obj) => obj.id !== id);
    setTotalStory(new_data);
    setStoryID((prevStoryID) => [...prevStoryID, id]);
  };
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    setCookie("story_id", storyID, { expires: tomorrow });
  }, [setCookie, storyID]);
  return (
    <div>
      <Title title={story.title} />
      <div className="contentContainer">
        <Container>
          <div
            className="content"
            style={
              story.id === -1
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : null
            }
          >
            {story.content}
          </div>

          {totalStory.length !== 0 && (
            <div className="content__button">
              <Button
                name={"This is Funny!"}
                bheight={"35px"}
                outline="1.5px solid #DEDEDE"
                bg="#2c7edb"
                onClick={() => handleLikePost(story.id)}
              />
              <Button
                name={"This is not funny."}
                bheight={"35px"}
                outline="1.5px solid #DEDEDE"
                onClick={() => handleDisLikePost(story.id)}
              />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Content;
