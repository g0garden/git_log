import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Input } from "../../elements";


const CommentItem = (props) => {

  return (
    <React.Fragment>
        <div flex-direction="column">
        <Grid flex>
          <ProfileImg src={props.user_info.profile} />
          <Text bold size="0.9vw">{props.user_info.nickname}</Text>
        </Grid>
        <Grid>
        <Text size="0.9vw" margin="0px" >{props.comment}</Text>
        </Grid>
      </div>
    </React.Fragment>
  );
};

CommentItem.defaultProps = {
  user_info: {
    nickname: "_nickname",
    profile:
      "https://blog.kakaocdn.net/dn/cyOIpg/btqx7JTDRTq/1fs7MnKMK7nSbrM9QTIbE1/img.jpg",
  },
  comment: "댓글입니다 :)",
};

const ProfileImg = styled.img`
  width: 9%;
  aspect-ratio: 1/1;
  border-radius:100px;
  background-image: url("${(props) => props.src}");
  margin-right: 5px;
`;


export default CommentItem;
